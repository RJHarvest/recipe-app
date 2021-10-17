<template>
  <div>
    <Navbar />
    <div class="detail md-layout md-gutter">
      <div class="md-layout-item md-large-size-100 md-xsmall-size-100">
        <md-button @click="$router.back()" class="md-raised md-dense back">Back</md-button>
      </div>
      <div class="md-layout-item md-large-size-33 md-xsmall-size-100">
        <h1 class="title">{{ recipe.strMeal }}</h1>
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
        <!-- <md-button v-for="tag in recipe.tags" :key="tag">{{ tag }}</md-button> -->
        <div class="extra-buttons">
          <md-button :href="recipe.strYoutube" target="__blank" rel="noopener noreferrer">Video</md-button>
          <md-button :href="recipe.strSource" target="__blank" rel="noopener noreferrer">Source</md-button>
        </div>
      </div>
      <div class="md-layout-item md-layout md-gutter md-large-size-66 md-xsmall-size-100">
        <div class="md-layout-item md-size-100 header">
          <h1>Ingredients</h1>
          <md-divider></md-divider>
        </div>
        <div
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
          class="md-layout-item md-large-size-25 md-xsmall-size-50 ingredients"
        >
          <li>{{ ingredient.measurement }} {{ ingredient.ingredient }}</li>
        </div>
        <div class="md-layout-item md-size-100 header">
          <h1>Instructions</h1>
          <md-divider></md-divider>
        </div>
        <div class="md-layout-item md-size-100">
          <ol class="instructions">
            <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'recipe-details',
    components: {
      Navbar,
    },
    data() {
      return {
        recipe: {}
      }
    },
    mounted() {
      console.log(this.$router);
      this.getRecipe(this.$route.params.mealId)
    },
    methods: {
      async getRecipe(mealId) {
        try {
          const response = await this.axios.get(`lookup.php?i=${mealId}`)
          const recipe = this.formatRecipeDataObject(response.data.meals[0])
          this.recipe = recipe
        } catch (err) {
          console.log('Error', err);
        }
      },
      formatRecipeDataObject(recipeData) {
        const ingredients = Object
          .entries(recipeData)
          .filter(entries => entries[0].includes('strIngredient') && (entries[1] && entries[1].trim() !== ""))
          .map(entries => entries[1])
        const measurements = Object
          .entries(recipeData)
          .filter(entries => entries[0].includes('strMeasure') && (entries[1] && entries[1].trim() !== ""))
          .map(entries => entries[1])

        const fullIngredients = []
        for (let i = 0; i < ingredients.length; i++) {
          fullIngredients.push({
            ingredient: ingredients[i],
            measurement: measurements[i]
          })
        }

        const recipe = {
          ...recipeData,
          ingredients: fullIngredients,
          tags: recipeData.strTags && recipeData.strTags.split(','),
          instructions: recipeData.strInstructions && recipeData.strInstructions.split('\r\n')
        }
        return recipe
      }
    }
  }
</script>

<style scoped>
  .back {
    float: left;
  }
  .title {
    line-height: 1.25;
  }
  .detail {
    padding: 0 2.5rem;
  }
  .extra-buttons {
    margin-top: 1rem;
  }
  .header {
    padding: 15px 0;
  }
  .ingredients {
    text-align: left;
    font-size: 16px;
  }
  .ingredients > li {
    margin: 7px 0;
    line-height: 1.5;
  }
  .instructions {
    font-size: 18px;
    text-align: left;
    line-height: 1.75;
    font-weight: 500;
  }
  .instructions > li {
    white-space: pre-wrap;
    margin-bottom: 10px;
  }
</style>