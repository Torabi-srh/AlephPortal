export default [
  {
    path: '/',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/media',
        name: 'Media',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/pages',
        name: 'Pages',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/comments',
        name: 'Comments',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/appearance',
        name: 'Appearance',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/extentions',
        name: 'Extentions',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/pages/Blank.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/AuthenticationLayout.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
      },
      {
        path: '/auth/reset-password',
        name: 'ResetPassword',
        component: () => import('@/views/auth/ResetPassword.vue'),
      },
      {
        path: '/auth/confirm-password',
        name: 'ConfirmPassword',
        component: () => import('@/views/auth/ConfirmPassword.vue'),
      },
      {
        path: '/auth/verify-email',
        name: 'VerifyEmail',
        component: () => import('@/views/auth/VerifyEmail.vue'),
      },
    ],
  },
]
