import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Perfil/Profile.vue'
import SignIn from '../views/Auth/SignIn.vue'
import SignUp from '../views/Auth/SignUp.vue'
import { useAuthStore } from '@/store'



const routes = [{
  path: '/', name: '/', redirect: '/Propiedades'
}, {
  path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR']
  }
}, {
  path: '/profile', name: 'Profile', component: Profile, meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
  }
}, {
  path: '/forgot-password',
  name: 'forgot-password',
  component: () => import( '@/views/Auth/ForgotPassword.vue'),
  props: route => ({ token: route.query.token })
}, {
  path: '/sign-in', name: 'SignIn', component: SignIn
}, {
  path: '/sign-up', name: 'SignUp', component: SignUp
}, {
  path: '/misContratos', name: 'MisContratos', component: () => import('@/views/Contrato/MisContratos.vue'), meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
  }
}, {
  path: '/nuevoContrato',
  name: 'NuevoContrato',
  component: () => import('@/views/Contrato/NuevoContrato.vue'),
  props: true,
  meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
  }
}, {
  path: '/clausulasNuevoContrato',
  name: 'ClausulasNuevoContrato',
  component: () => import('@/views/Contrato/ClausulasNuevoContrato.vue'),
  props: true,
  meta: {
    requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
  }
}
  ,

  {
    // todo /formularioInvitado/:uuid
    path: '/formularioInvitado',
    name: 'FormularioInvitado',
    component: () => import('@/views/Contrato/FormularioInvitado.vue'),
    meta: {
      requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  }, {
    path: '/agregarPropiedad/',
    name: 'AgregarPropiedad',
    component: () => import('@/views/Propiedades/AgregarPropiedad.vue'),
    meta: {
      requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  // {
  //     path: '/propiedad/:id',
  //     name: 'Propiedad',
  //     component: () => import('@/views/Propiedades/Propiedad.vue'),
  //     meta: {}
  // },
  {
    path: '/propiedad/edit/:id',
    name: 'PropiedadEdit',
    component: () => import('@/views/Propiedades/EditarPropiedad.vue'),
    meta: {}
  }, {
    path: '/formularioRegistro',
    name: 'FormularioRegistro',
    component: () => import('@/views/Auth/FormularioRegistro.vue'),
    props: true
  },

  {
    path: '/contrato/:id', name: 'Contrato', component: () => import('@/views/Contrato/Contrato.vue'), meta: {
      requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  }, {
    path: '/rememberPassword',
    name: 'rememberPassword',
    component: () => import('@/views/Auth/RememberPassword.vue')
  }, {
    path: '/error', name: 'Error', component: () => import('@/views/PlantillasPlanas/Error.vue')
  }, {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/PlantillasPlanas/NotFound.vue')
  }, {
    path: '/noVerificado',
    name: 'noVerificado',
    component: () => import('@/views/PlantillasPlanas/noVerificado.vue'),
    meta: {
      requiresAuth: true, roles: ['ROLE_PROVICIONAL']
    }
  }, {
    path: '/correoVerificado',
    name: 'CorreoVerificado',
    component: () => import('@/views/PlantillasPlanas/CorreoVerificado.vue')
  }, {
    path: '/registroExitoso',
    name: 'RegistroExitoso',
    component: () => import('@/views/PlantillasPlanas/RegistroExitoso.vue')
  }, {
    path: '/principalPlanes',
    name: 'PrincipalPlanes',
    component: () => import('@/views/PlantillasPlanas/PrincipalPlanes.vue')
  }, {
    path: '/detallesContrato/:uuid', name: 'detallesContrato',
    props: true,
    component: () => import('@/views/Contrato/DetallesContrato.vue')
  }, {
    path: '/billy', name: 'Billy', component: () => import('@/views/Dev.vue')
  }, {
    path: '/danko', name: 'Danko', component: () => import('@/views/Corredora/components/AgregarPersona.vue')
  }, {
    path: '/Propiedades',
    name: 'Propiedades',
    component: () => import('@/views/Propiedades/Propiedades.vue'),
    meta: {
      requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  }, {
    path: '/Corredora',
    name: 'Corredora',
    component: () => import('@/views/Corredora/Corredora.vue')
  }, {
    path: '/detallesCorredora',
    name: 'detallesCorredora',
    component: () => import('@/views/Corredora/DetallesCorredora.vue')
  },
  {
    path: '/Personas',
    name: 'Personas',
    component: () => import('@/views/Personas/Personas.vue')
  },
  {
    path: '/AgregarPersona',
    name: 'AgregarPersona',
    component: () => import('@/views/Personas/AgregarPersona.vue')
  }
  , {
    path: '/Solicitudes',
    name: 'SolicitarDatos',
    component: () => import('@/views/Solicitudes/SolicitarDatos.vue')
  },
  {
    path: '/SolicitudDetails',
    name: 'SolicitudDetails',
    component: () => import('@/views/Solicitudes/SolicitudDetails.vue'),
    props: true
  }


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes, linkActiveClass: 'active'
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  // console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isLoggedIn) {
      next({ name: 'SignIn' })
    } else {
      const userHasRequiredRole = to.meta.roles.some(role =>
        authStore.userInfo.authorities.some(auth => auth.authority === role)
      )
      // console.log(to.meta.roles, authStore.userInfo.authorities)
      console.log(userHasRequiredRole, 'Aer asdasd')
      const userHasProvisionalRole = authStore.userInfo.authorities.some(auth => auth.authority === 'ROLE_PROVICIONAL')
      // console.log(userHasProvisionalRole,"Aer asdasd")
      if (userHasRequiredRole) {
        next()
      } else if (userHasProvisionalRole) {
        next({ name: 'FormularioRegistro' })
      } else {
        next({ name: 'SignIn' })
      }
    }
  } else {
    next()
  }
})


export default router