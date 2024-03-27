import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import SignIn from '../views/Auth/SignIn.vue'
import SignUp from '../views/Auth/SignUp.vue'
import {useAuthStore} from '@/store'


const routes = [{
    path: '/', name: '/', redirect: '/Propiedades'
}, {
    path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {
        requiresAuth: true, roles: ['ROLE_ADMIN']
    }
}, {
    path: '/profile', name: 'Profile', component: Profile, meta: {
        requiresAuth: true, roles: ['ROLE_USER']
    }
}, {
    path: '/sign-in', name: 'SignIn', component: SignIn
}, {
    path: '/sign-up', name: 'SignUp', component: SignUp
}, {
    path: '/misContratos', name: 'MisContratos', component: () => import('@/views/Contrato/MisContratos.vue'), meta: {
        requiresAuth: true, roles: ['ROLE_USER']
    }
}, {
    path: '/nuevoContrato',
    name: 'NuevoContrato',
    component: () => import('@/views/Contrato/NuevoContrato.vue'),
    props: true,
    meta: {
        requiresAuth: true, roles: ['ROLE_USER']
    }
}, {
    // todo /formularioInvitado/:uuid
    path: '/formularioInvitado',
    name: 'FormularioInvitado',
    component: () => import('@/views/Contrato/FormularioInvitado.vue'),
    meta: {
        requiresAuth: true, roles: ['ROLE_USER']
    }
},  {
        path: '/agregarPropiedad/',
        name: 'AgregarPropiedad',
        component: () => import('@/views/Propiedades/AgregarPropiedad.vue'),
        meta: {
            requiresAuth: true, roles: ['ROLE_USER']
        }
    }, {
        path: '/propiedad/:id',
        name: 'Propiedad',
        component: () => import('@/views/Propiedades/Propiedad.vue'),
        meta: {}
    }, {
        path: '/propiedad/edit/:id',
        name: 'PropiedadEdit',
        component: () => import('@/views/Propiedades/EditarPropiedad.vue'),
        meta: {}
    }, {
        path: '/formularioRegistro',
        name: 'FormularioRegistro',
        component: () => import('@/views/Auth/components/FormularioRegistro.vue'),
        props: true
    },

    {
        path: '/contrato/:id', name: 'Contrato', component: () => import('@/views/Contrato/Contrato.vue'), meta: {
            requiresAuth: true, roles: ['ROLE_USER']
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
    },{
        path: '/billy', name: 'Billy', component: () => import('@/views/Dev.vue')
    }, {
        path: '/danko', name: 'Danko', component: () => import('@/views/Contrato/DetallesContrato.vue')
    }, {
        path: '/Propiedades',
        name: 'Propiedades',
        component: () => import('@/views/Propiedades/Propiedades.vue'),
        meta: {
            requiresAuth: true, roles: ['ROLE_USER']
        }
    },{
        path: '/Corredora',
        name: 'Corredora',
        component: () => import('@/views/Corredora/Corredora.vue'),
    },{
        path: '/detallesCorredora',
        name: 'detallesCorredora',
        component: () => import('@/views/Corredora/DetallesCorredora.vue'),
    }


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes, linkActiveClass: 'active'
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    console.log(to)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authStore.isLoggedIn) {
            next({ name: 'SignIn' })
        } else {
            const userHasRequiredRole = to.meta.roles.some(role =>
                authStore.userInfo.authorityDtoSet.some(auth => auth.authorityName === role)
            )
            const userHasProvisionalRole = authStore.userInfo.authorityDtoSet.some(auth => auth.authorityName === 'ROLE_PROVICIONAL')
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

// router.beforeEach(async (to, from, next) => {
//     const authStore = useAuthStore()
//     if (to.meta.requiresAuth && !authStore.isLoggedIn) return next({name: 'SignIn'})
//     if (to.name === 'SignIn' && authStore.isLoggedIn) return next({name: 'Dashboard'})
//     if (to.meta.roles) {
//         const userRoles = authStore.userInfo.authorityDtoSet.map(a => a.authorityName)
//         const hasRequiredRoles = to.meta.roles.every(role => userRoles.includes(role))
//         if (!hasRequiredRoles) {
//             if (userRoles.includes('ROLE_PROVICIONAL') && authStore.userInfo.persona == null) {
//                 return next({name: 'FormularioRegistro'})
//             }
//             return next({name: 'Error'})
//         }
//     }
//     next()
// })


export default router