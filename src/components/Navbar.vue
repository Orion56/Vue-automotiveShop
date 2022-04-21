<template>
    <nav>
    <router-link :to="{name:'Home'} ">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Cars'}">All Cars</router-link> |
    <router-link :to="{name:'Register'}">Register</router-link> |
    <router-link :to="{name:'Account'}">My Account</router-link>
    </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
nav{
    background-color: rgb(140, 138, 138);
    color:aliceblue;
}
a{
    color:aliceblue;
}
</style>