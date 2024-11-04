<script>
import Profile from './components/Profile.vue'
export default {
    components: { Profile },
    setup() {
        const firstName = 'Subramanian'
        const lastName = 'Murugan'
        const status = true
        return {
            firstName,
            lastName,
            status
        }
    }
}
</script>
<template>
    <Profile title="Profile" :firstName="firstName" :lastName="lastName" :status="status"></Profile>
    <Profile title="Profile" firstName="Ram" lastName="Samy" status="true"></Profile>
    <Profile title="Profile" firstName="Karthik" lastName="Samy" status="true"></Profile>
    <Profile title="Profile" firstName="John" lastName="Samy" status="true"></Profile>
    <Profile title="Profile" firstName="Abhi" lastName="Samy" status="true"></Profile>

</template>