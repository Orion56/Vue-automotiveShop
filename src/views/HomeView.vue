<template>
  <div class="home">
    <ShoppingList  />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleCar from "@/views/Cars/SingleCar.vue"
import Cars from "@/views/Cars/Cars.vue"
import ShoppingList from "@/components/ShoppingList.vue"

export default {
  name: 'HomeView',
  components: {
    SingleCar,
    Cars,
    ShoppingList
}
}
</script>

<style scoped>

</style>
