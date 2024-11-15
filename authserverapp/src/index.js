const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = "your_jwt_secret_key"; // Set this as an environment variable in production

// Dummy user data
const users = [
  {
    id: 1,
    username: 'user',
    password: bcrypt.hashSync('pass', 8) // Store hashed passwords
  }
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).send('User not found');
  }

  // Check password
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ auth: false, token: null });
  }

  // Create a token
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).send({ auth: true, token: token });
});

// Protected route
app.get('/dashboard', verifyToken, (req, res) => {
  res.status(200).send("This is a protected route.");
});

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
