import Home from '@/pages/Home.vue'
import Cuisine from '@/pages/Cuisine.vue'
import Recipe from '@/pages/Recipe.vue'
import Meal from '@/pages/Meal.vue'
import RecipeDetails from '@/pages/Details.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cuisine",
    component: Cuisine,
  },
  {
    path: "/recipe",
    component: Recipe,
  },
  {
    path: "/meal",
    component: Meal,
  },
  {
    path: "/detail/:mealId",
    component: RecipeDetails,
  },
]

export default routes