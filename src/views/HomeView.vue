<template>
  <div class="home">
    <Cars/>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleCar from "@/views/Cars/SingleCar.vue"
import Cars from "@/views/Cars/Cars.vue"

export default {
  name: 'HomeView',
  components: {
    SingleCar,
    Cars
}
}
</script>
