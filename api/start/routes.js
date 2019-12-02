'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Welcome API Repactua' }
})

Route.post('users', 'UserController.store')

Route.post('auth', 'AuthController.store')

Route.resource('company', 'CompanyController').middleware('auth').apiOnly()
