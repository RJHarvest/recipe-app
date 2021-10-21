<template>
  <md-toolbar md-elevation="0">
    <div class="md-toolbar-section-start">
      <img class="logo" src="@/assets/logo-small-transparent.png" alt="logo" />
      <md-button to="/">Home</md-button>
      <md-button to="/recipe">Recipes</md-button>
    </div>

    <div class="md-toolbar-section-end">
      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </div>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style scoped>
  .md-toolbar {
    background: none !important;
    padding: 20px 25px;
  }
  .logo {
    height: 70px;
  }
</style>