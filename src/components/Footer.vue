<template>
  <footer>
    <slot></slot>
    <p class="m-0">made with <i class="bi bi-balloon-heart"></i> <br/> @H.Q All rights reserved</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style>
footer{
    padding: 10px;
    color: white;
    background-color: #444;
    text-align: center;
    font-size: 0.75rem;
}
</style>