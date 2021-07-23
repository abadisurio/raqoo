// import {Dashboard, Landing, Register, SignIn} from '/pages'

const routes = [
    { path: '/register', pageName: 'Register' },
    { path: '/signin', pageName: 'SignIn' },
    { path: '/', pageName: 'Landing' },
]

const routesSignedIn = [
    { path: '/schedule', pageName: 'SignIn' },
    { path: '/notification', pageName: 'Dashboard' },
    { path: '/profile', pageName: 'Landing' },
    { path: '/', pageName: 'Dashboard' },
]

export {routes, routesSignedIn}