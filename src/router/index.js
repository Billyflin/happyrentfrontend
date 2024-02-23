import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import { useAuthStore } from '@/store'
import Dev from '@/views/Dev.vue'

const routes = [{
  path: '/', name: '/', redirect: '/Propiedades'
}, {
  path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN']
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
  path: '/sign-in', name: 'SignIn', component: SignIn
}, {
  path: '/sign-up', name: 'SignUp', component: SignUp
}, {
  path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue'), meta: {
    roles: ['ROLE_USER']
  }
}, {
  path: '/misContratos', name: 'MisContratos', component: () => import('../views/MisContratos.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
},{
  path: '/nuevoContrato', name: 'NuevoContrato', component: () => import('../views/NuevoContrato.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
},{
  // todo /formularioInvitado/:uuid
  path: '/formularioInvitado', name: 'FormularioInvitado', component: () => import('../views/FormularioInvitado.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
},


  {
  path: '/agregarPropiedad/', name: 'AgregarPropiedad', component: () => import('../views/AgregarPropiedad.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_USER']
  }
},
  {
    path: '/Propiedades', name: 'Propiedades', component: () => import('../views/Propiedades.vue'), meta: {
      requiresAuth: true, roles: ['ROLE_USER']
    }
  },
  {
    path: '/propiedad/:id', name: 'Propiedad', component: () => import('../views/Propiedad.vue'), meta: {}
  }, {
    path: '/propiedad/edit/:id', name: 'PropiedadEdit', component: () => import('../views/EditarPropiedad.vue'), meta: {}
  },{
    path: '/formularioRegistro',
    name: 'FormularioRegistro',
    component: () => import('@/views/FormularioRegistro.vue'),
    props: true
  },

  {
    path: '/contrato/:id', name: 'Contrato', component: () => import('../views/Contrato.vue'), meta: {
      requiresAuth: true, roles: ['ROLE_USER']
    }
  }
  ,{
  path: '/rememberPassword', name: 'rememberPassword', component: () => import('../views/RememberPassword.vue')
  },
  {
    path: '/error', name: 'Error', component: () => import('../views/Error.vue')
  }
  ,
  {
  path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue')
  }
  ,
  {
    path: '/correoVerificado', name: 'CorreoVerificado', component: () => import('../views/CorreoVerificado.vue')
  },
  { path: '/registroExitoso', name: 'RegistroExitoso', component: () => import('../views/RegistroExitoso.vue') },
  {
    path: '/principalPlanes', name: 'PrincipalPlanes', component: () => import('../views/PrincipalPlanes.vue')
  }


]

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