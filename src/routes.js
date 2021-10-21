import Home from '@/pages/Home.vue'
import Recipe from '@/pages/Recipe.vue'
import RecipeDetails from '@/pages/Details.vue'

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/recipe",
    name: 'recipe',
    component: Recipe,
  },
  {
    path: "/detail/:mealId",
    name: 'recipe-detail',
    component: RecipeDetails,
  },
]

export default routes