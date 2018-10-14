const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('/about', '/')
routes.add('/about', '/blog/:slug')
routes.add('/account/signUp', '/account/signUp')