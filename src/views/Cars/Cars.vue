<template>
  <h1>Hello All cars</h1>
  <div v-if="!Cars" class="error">Loading... </div>
  <div v-else>
    <div v-for="car in Cars" :key="car._id">
    <router-link :to="{name: 'SingleCar',params: { id: car._id}}">
    <h2>{{car.condition}} <span>{{car.maker}} - {{car.model}}</span> </h2>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    Cars: []
  }
},
/* mounted(){
  fetch('http://localhost:5009/cars')
  .then(res=>(res.json()))
  .then(data=>(this.Cars=data))
  .catch(err=>console.log(err.message))
}, */
async mounted(){
  try {
    const res = await fetch('http://localhost:5009/cars')
    this.Cars = await res.json()
  } catch (error) {
    console.log(error.message)
  }
}
}
</script>

<style>

</style>