import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/authStore.js'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/Propiedades'
  },
  {
    path: '/Propiedades',
    name: 'Propiedades',
    component: () => import('@/views/Propiedades/Propiedades.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/Auth/SignIn.vue')
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR']
    }
  },
  {
    path: '/Indicadores',
    name: 'Indicadores',
    component: () => import('@/views/Indicadores/Indicador.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR']
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/Auth/SignUp.vue')
  },
  {
    path: '/rememberPassword',
    name: 'rememberPassword',
    component: () => import('@/views/Auth/RememberPassword.vue')
  },
  {
    path: '/Corredora',
    name: 'Corredora',
    component: () => import('@/views/Corredora/Corredora.vue')
  },
  {
    path: '/Solicitudes',
    name: 'SolicitarDatos',
    component: () => import('@/views/Solicitudes/SolicitarDatos.vue')
  },
  {
    path: '/SolicitudEnviada',
    name: 'SolicitudEnviada',
    component: () => import('@/views/PlantillasPlanas/SolicitudEnviada.vue')
  },
  {
    path: '/Personas',
    name: 'Personas',
    component: () => import('@/views/Personas/Personas.vue')
  },
  {
    path: '/PersonaDetails',
    name: 'PersonaDetails',
    component: () => import('@/views/Personas/PersonaDetails.vue'),
    props: true
  },
  {
    path: '/Solicitud',
    name: 'Solicitud',
    component: () => import('@/views/Solicitudes/Solicitud.vue'),
    props: (route) => ({
      token: route.query.token,
      carnet: route.query.carnet === 'true',
      liquidaciones: route.query.liquidaciones === 'true',
      certificadoAFP: route.query.certificadoAFP === 'true',
      certificadoDicom: route.query.certificadoDicom === 'true',
      carpetaTributaria: route.query.carpetaTributaria === 'true',
      contratoTrabajo: route.query.contratoTrabajo === 'true'
    })
  },
  {
    path: '/SolicitudDetails',
    name: 'SolicitudDetails',
    component: () => import('@/views/Solicitudes/SolicitudDetails.vue')
  },
  {
    path: '/Contratos',
    name: 'Contratos',
    component: () => import('@/views/Contrato/Contratos.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Perfil/Perfil.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/Calculadora',
    name: 'Calculadora',
    component: () => import('@/views/Calculadora/Calculadora.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    props: (route) => ({ token: route.query.token })
  },
  {
    path: '/nuevoContrato',
    name: 'NuevoContrato',
    component: () => import('@/views/Contrato/NuevoContrato.vue'),
    props: true,
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/felicidades!',
    name: 'Felicidades',
    component: () => import('@/views/PlantillasPlanas/Felicidades.vue')
  },
  {
    path: '/EditorNuevoContrato',
    name: 'Editor',
    component: () => import('@/views/NuevoContrato/EditorDeContratos.vue'),
    props: true,
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/agregarPropiedad',
    name: 'AgregarPropiedad',
    component: () => import('@/views/Propiedades/AgregarPropiedad.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
    }
  },
  {
    path: '/DetallesPropiedad',
    name: 'DetallesPropiedad',
    component: () => import('@/views/Propiedades/DetallesPropiedad.vue'),
    meta: {}
  },
  {
    path: '/formularioRegistro',
    name: 'FormularioRegistro',
    component: () => import('@/views/Auth/FormularioRegistro.vue'),
    props: true
  },
  //
  //   {
  //     path: '/contrato/:id', name: 'Contrato', component: () => import('@/views/Contrato/Contrato.vue'), meta: {
  //       requiresAuth: true, roles: ['ROLE_ADMIN', 'ROLE_CORREDOR', 'ROLE_PROPIETARIO']
  //     }
  //   },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/PlantillasPlanas/Error.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/PlantillasPlanas/NotFound.vue')
  },
  {
    path: '/noVerificado',
    name: 'noVerificado',
    component: () => import('@/views/PlantillasPlanas/noVerificado.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_PROVICIONAL']
    }
  },
  {
    path: '/correoVerificado',
    name: 'CorreoVerificado',
    component: () => import('@/views/PlantillasPlanas/CorreoVerificado.vue')
  },
  {
    path: '/registroExitoso',
    name: 'RegistroExitoso',
    component: () => import('@/views/PlantillasPlanas/RegistroExitoso.vue')
  },
  {
    path: '/principalPlanes',
    name: 'PrincipalPlanes',
    component: () => import('@/views/PlantillasPlanas/PrincipalPlanes.vue')
  },
  // {
  //   path: '/detallesdeContrato/:id', name: 'DetallesContrato',
  //   props: true,
  //   component: () => import('@/views/Contrato/DetallesContrato.vue')
  // },
  {
    path: '/detallesContrato',
    name: 'DetallesContrato',
    component: () => import('@/views/DetallesContrato/DetallesContrato.vue')
  },
  {
    path: '/billy',
    name: 'Billy',
    component: () => import('@/views/Shared/Dev.vue')
  },
  //   {
  //     path: '/danko', name: 'Danko', component: () => import('@/views/Corredora/components/AgregarPersona.vue')
  //   },  {
  //     path: '/detallesCorredora',
  //     name: 'detallesCorredora',
  //     component: () => import('@/views/Corredora/DetallesCorredora.vue')
  //   },
  //
  //   {
  //     path: '/PersonaDetails',
  //     name: 'PersonaDetails',
  //     component: () => import('@/views/Personas/PersonaDetails.vue')
  //   } ,
  {
    path: '/AgregarPersona',
    name: 'AgregarPersona',
    component: () => import('@/views/Personas/AgregarPersona.vue')
  }

  //   {
  //     path: '/Solicitud',
  //     name: 'Solicitud',
  //     component: () => import( '@/views/Solicitudes/Solicitud.vue'),
  //     props: route => ({
  //       token: route.query.token,
  //       carnet: route.query.carnet === 'true',
  //       liquidaciones: route.query.liquidaciones === 'true',
  //       certificadoAFP: route.query.certificadoAFP === 'true',
  //       certificadoDicom: route.query.certificadoDicom === 'true',
  //       carpetaTributaria: route.query.carpetaTributaria === 'true',
  //       contratoTrabajo: route.query.contratoTrabajo === 'true'
  //     })
  //   }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  // console.log(to)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.currentUser) {
      next({ name: 'SignIn' })
    } else {
      const userHasRequiredRole = to.meta.roles.some((role) =>
        authStore.authorities.some((auth) => auth.authority === role)
      )
      // console.log(to.meta.roles, authStore.userInfo.authorities)
      console.log(userHasRequiredRole, 'Aer asdasd')
      const userHasProvisionalRole = authStore.authorities.some(
        (auth) => auth.authority === 'ROLE_PROVICIONAL'
      )
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
