<template>
  <footer>
      <slot></slot>
      <p>@All rights reserved</p>
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