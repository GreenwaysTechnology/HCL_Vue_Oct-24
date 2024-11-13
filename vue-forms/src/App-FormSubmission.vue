
<script setup>
const onSubmit = event => {
    alert('Form to be Submitted')
}

</script>
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <button>Submit</button>
        </form>
    </div>
</template>