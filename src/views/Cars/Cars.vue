<template>
  <h1>Hello All Cars</h1>
  <div v-if="!cars" class="error">Loading... </div>
  <div v-else>
    <div v-for="car in cars" :key="car._id">
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
    cars: []
  }
},
/* mounted(){
  fetch('http://localhost:5009/cars')
  .then(res=>(res.json()))
  .then(data=>(this.cars=data))
  .catch(err=>console.log(err.message))
}, */
async mounted(){
  try {
    const res = await fetch('http://localhost:5009/cars')
    this.cars = await res.json()
  } catch (error) {
    console.log(error.message)
  }
  }
}
</script>

<style>

</style>