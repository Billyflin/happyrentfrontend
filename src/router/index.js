import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tables from '../views/Tables.vue'
import Billing from '../views/Billing.vue'
import Profile from '../views/Profile.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Products from '@/views/Products.vue'
import { useAuthStore } from '@/store'
import Dev from '@/views/Dev.vue'
import Cart from '@/views/Cart.vue'
import ProductDetails from '@/views/components/ProductDetailCard/ProductDetails.vue'

const routes = [{
  path: '/', name: '/', redirect: '/Products'
}, {
  path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN']
  }
}, {
  path: '/tables', name: 'Tables', component: Tables, meta: {
    requiresAuth: true
  }
}, {
  path: '/billing', name: 'Billing', component: Billing, meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
}, {
  path: '/cart', name: 'Cart', component: Cart, meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
}, {
  path: '/dev', name: 'dev', component: Dev
}, {
  path: '/profile', name: 'Profile', component: Profile, meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
}, {
  path: '/addProduct', name: 'AddProduct', component: () => import('../views/AddProduct.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN']
  }
}, {
  path: '/products', name: 'Products', component: Products, props: true
}, { path: '/products/:id', name: 'ProductDetails', component: ProductDetails },

  , {
    path: '/sign-in', name: 'SignIn', component: SignIn
  }, {
    path: '/sign-up', name: 'SignUp', component: SignUp
  }, {
    path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue'), meta: {
      roles: ['ROLE_USER']
    }
  }, {
    path: '/misContratos', name: 'MisContratos', component: () => import('../views/MisContratos.vue'), meta: {}
  }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes, linkActiveClass: 'active'
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) return next({ name: 'SignIn' })

  // Verificar si la ruta requiere roles
  if (to.meta.roles) {
    // Obtener los roles del usuario
    const userRoles = authStore.userInfo.authorityDtoSet.map(a => a.authorityName)

    // Verificar si el usuario tiene los roles necesarios
    const hasRequiredRoles = to.meta.roles.every(role => userRoles.includes(role))

    if (!hasRequiredRoles) {
      // Si el usuario no tiene los roles necesarios, redirigir a una página de error o a donde prefieras
      return next({ name: 'Error' })
    }
  }

  next()
})

export default router