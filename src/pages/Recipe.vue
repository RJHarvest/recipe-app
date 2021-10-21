<template>
  <div>
    <Navbar />
    <div class="recipe-section">
      <!-- Snackbar for displaying error messages -->
      <md-snackbar md-position="center" :md-duration="snackbarDuration" :md-active.sync="showError">
        <span>{{ error }}</span>
      </md-snackbar>

      <!-- drawer for filters -->
      <md-drawer :md-active.sync="showFilters" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Filter Recipes</span>
        </md-toolbar>
        <md-list md-expand-single="true">
          <md-list-item md-expand md-expanded.sync="true">
            <md-icon>dinner_dining</md-icon>
            <span class="md-list-item-text">Categories</span>

            <md-list slot="md-expand">
              <md-list-item v-for="(category, index) in categories" :key="index" @click="getRecipes(category.strCategory, 'c')">
                {{ category.strCategory }}
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>public</md-icon>
            <span class="md-list-item-text">Areas</span>

            <md-list slot="md-expand">
              <md-list-item v-for="(area, index) in areas" :key="index" @click="getRecipes(area.strArea, 'a')">
                {{ area.strArea }}
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>bakery_dining</md-icon>
            <span class="md-list-item-text">Ingredients</span>

            <md-list slot="md-expand">
              <md-list-item v-for="ingredient in ingredients" :key="ingredient.idIngredient" @click="getRecipes(ingredient.strIngredient, 'i')">
                {{ ingredient.strIngredient }}
              </md-list-item>
            </md-list>
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
              md-description="Select a filter to display a list of recipes."
            >
              <md-button class="md-primary md-raised" @click="showFilters = true">Select a filter</md-button>
            </md-empty-state>
          </div>
          <div v-else v-for="recipe in recipes" :key="recipe.idMeal" class="md-layout-item md-size-33">
            <md-card>
              <md-card-media-cover md-text-scrim>
                <md-card-media>
                  <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
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
        ingredients: [],
        areas: [],
        categories: [],
        recipes: [],
        isLoading: false,
        showError: false,
        showFilters: false,
        error: null,
        snackbarDuration: 4000,
      }
    },
    mounted() {
      this.getAreas()
      this.getIngredients()
      this.getCategories()
      this.getRecipes(this.$route.query.filter, this.$route.query.filterType)
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
      async getIngredients() {
        try {
          const response = await this.axios.get('list.php?i=list')
          this.ingredients = response.data.meals
        } catch (err) {
          this.error = err
          this.isError = true
        }
      },
      async getCategories() {
        try {
          const response = await this.axios.get('list.php?c=list')
          this.categories = response.data.meals
        } catch (err) {
          this.error = err
          this.isError = true
        }
      },
      async getRecipes(filter = '', filterType = 'i') {
        try {
          this.isLoading = true
          const response = await this.axios.get(`filter.php?${filterType}=${filter}`)
          this.recipes = response.data.meals
          this.isLoading = false
        } catch (err) {
          this.error = err
          this.isError = true
        }
        this.showFilters = false
        this.isLoading = false
      },
      getRecipeLink(id) {
        return `/detail/${id}`
      }
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