<template>
  <h1>Single car details</h1>
  <p>Car Id = {{id}}</p>
</template>

<script>
export default {
  //props: ['id'],
  data(){
    return{
      id:this.$route.params.id
    } 
  }
}
</script>

<style>

</style>