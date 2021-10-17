<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    color: #2C2928;
    height: 100vh;
    /* background-color: #DB9639; */
    background: linear-gradient(to bottom right, rgba(219, 150, 57, 1), rgba(219, 150, 57, 0.8) 70%);
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .md-button.md-raised {
    background-color: #2C2928 !important;
    color: #ffffff !important;
  }
</style>
