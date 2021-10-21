<template>
  <div>
    <md-toolbar md-elevation="0">
      <div class="md-toolbar-section-start">
        <img class="logo" src="@/assets/logo-small-transparent.png" alt="logo" />
        <md-button to="/">Home</md-button>
        <md-button to="/recipe">Recipes</md-button>
      </div>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="showSearchBar = true">
          <md-icon>search</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <!-- Search popup -->
    <md-dialog-prompt
      :md-active.sync="showSearchBar"
      v-model="search"
      md-title="Search for recipes"
      md-input-placeholder="Enter recipe name..."
      md-confirm-text="Search"
      @md-confirm="handleSearchOnConfirm"
    />
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        showSearchBar: false,
        search: null,
      }
    },
    methods: {
      handleSearchOnConfirm(search) {
        this.$router.push({ name: 'recipe', query: { search } })
      }
    }
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