import Home from '~/pages/Home'
import Following from '~/pages/Following';

const publicRoutes = [
    {path: '/', component:Home},
    {path: '/following'}
]

const privateRoutes = {

}

export {privateRoutes, publicRoutes}