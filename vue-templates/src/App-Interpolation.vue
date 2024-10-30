<script>
export default {
    data() {
        //return state
        return {
            name: 'Subramanian Murugan',
            status: true,
            age: 18,
            address: {
                city: 'Coimbatore',
                state: 'Tamil Nadu',
                zipcode: '611111'
            }
        }
    }
}
</script>
<template>
    <h1>Profile</h1>
    <div>
        <h3>Name :{{ name }}</h3>
        <h3>Age : {{ age }}</h3>
        <h3>Status : {{ status ? 'Available' : 'Not Available' }}</h3>
        <address>
            <p>{{ address.city }}</p>
            <p>{{ address.state }}</p>
            <p>{{ address.zipcode }}</p>
        </address>
    </div>
</template>