<template>
  <div id="singleCar">
    <h1>Single car details</h1>
    <div class="btn btn-primary" @click="showPrice">
      show price
    </div>
    <p v-show="price">Car Price = {{ car.price }}</p>
    <p>Car Id = {{ id }}</p>
  </div>
</template>

<script>
import { onActivated } from 'vue'

export default {
  props: ['id'],
  data(){
    return{
      //id:this.$route.params.id
      cars: [],
      car:{},
      price: false,
    } 
  },
  computed: {},
  methods: {
    showPrice(){
      this.price =true
    }
  },
  async activated() {
    let res = await fetch('http://localhost:5009/cars')
    this.cars = await res.json()
    this.car = this.cars.find(el => el._id === this.$route.params.id)
  },
  deactivated() {
    this.price=false
  }
}
</script>

<style>

</style>