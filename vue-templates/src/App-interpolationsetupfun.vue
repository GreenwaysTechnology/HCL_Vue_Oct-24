<script>
export default {
    setup() {
        //declare state as simple variables
        const id = 1;
        const name = 'Subramanian'
        const status = true
        const address = {
            city: 'Coimbatore',
            state: 'TN'
        }
        //return object
        // return {
        //     id: id,
        //     name: name,
        //     status: status,
        //     address: address
        // }
        return {
            id,
            name,
            status,
            address
        }
    }
}
</script>
<template>
    <h1>Profile Information</h1>
    <h3>Name :{{ name }}</h3>
    <h3>Age : {{ age }}</h3>
    <h3>Status : {{ status ? 'Available' : 'Not Available' }}</h3>
    <address>
        <p>{{ address.city }}</p>
        <p>{{ address.state }}</p>
        <p>{{ address.zipcode }}</p>
    </address>
</template>