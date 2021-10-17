<template>
  <div>
    <Navbar />
    <div class="recipe-section">
      <!-- Snackbar for displaying error messages -->
      <md-snackbar md-position="center" md-duration="4000" :md-active.sync="showError">
        <span>{{ error }}</span>
      </md-snackbar>

      <!-- drawer for filters -->
      <md-drawer :md-active.sync="showFilters" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Filter By Cuisne</span>
        </md-toolbar>
        <md-list>
          <md-list-item v-for="(area, index) in areas" :key="index" @click="getRecipes(area.strArea)">
            <span class="md-list-item-text">{{ area.strArea }}</span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-100">
          <md-button @click="showFilters = true">Filters</md-button>
        </div>
        <div v-if="isLoading" class="md-layout-item md-size-100">
          <md-progress-spinner :md-diameter="100" :md-stroke="5" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div v-else class="md-layout-item md-layout">
          <div v-if="!recipes" class="md-layout-item md-size-100">
            <md-empty-state
              md-icon="no_meals"
              md-label="No Recipes Found"
              md-description="Select a cuisine to display a list of recipes."
            >
              <md-button class="md-primary md-raised" @click="showFilters = true">Select a cuisine</md-button>
            </md-empty-state>
          </div>
          <div v-else v-for="recipe in recipes" :key="recipe.idMeal" class="md-layout-item md-size-33">
            <md-card>
              <md-card-media-cover md-text-scrim>
                <md-card-media>
                  <img :src="recipe.strMealThumb" :alt="recipe.strMeal" loading="lazy">
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <span class="md-title">{{ recipe.strMeal }}</span>
                  </md-card-header>

                  <md-card-actions>
                    <md-button :to="getRecipeLink(recipe.idMeal)">View</md-button>
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'recipe',
    components: {
      Navbar,
    },
    data() {
      return {
        areas: [],
        recipes: null,
        isLoading: false,
        showError: false,
        showFilters: false,
        error: null,
      }
    },
    mounted() {
      this.getAreas()
      this.getRecipes(this.$route.query.filter)
    },
    methods: {
      async getAreas() {
        try {
          const response = await this.axios.get('list.php?a=list')
          this.areas = response.data.meals
        } catch (err) {
          this.error = err
          this.showError = true
        }
      },
      async getRecipes(area = '') {
        try {
          this.isLoading = true
          const response = await this.axios.get(`filter.php?a=${area}`)
          this.recipes = response.data.meals
        } catch (err) {
          this.error = err
          this.showError = true
        }
        this.showFilters = false
        this.isLoading = false
      },
      getRecipeLink(id) {
        return `/detail/${id}`
      },
    }
  }
</script>

<style scoped>
  .recipe-section {
    padding: 20px 40px;
  }
  .md-layout-item {
    padding: 12px;
  }
</style>