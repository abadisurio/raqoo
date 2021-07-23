// import {Dashboard, Landing, Register, SignIn} from '/pages'

const routes = [
    { path: '/register', pageName: 'Register' },
    { path: '/signin', pageName: 'SignIn' },
    { path: '/', pageName: 'Landing' },
]

const routesSignedIn = [
    { path: '/schedule', pageName: 'Schedule' },
    { path: '/notification', pageName: 'Notification' },
    { path: '/registration', pageName: 'Registration' },
    { path: '/profile', pageName: 'Profile' },
    { path: '/', pageName: 'Dashboard' },
]

export {routes, routesSignedIn}