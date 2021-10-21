import Home from '@/pages/Home.vue'
import Recipe from '@/pages/Recipe.vue'
import RecipeDetails from '@/pages/Details.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/recipe",
    component: Recipe,
  },
  {
    path: "/detail/:mealId",
    component: RecipeDetails,
  },
]

export default routes