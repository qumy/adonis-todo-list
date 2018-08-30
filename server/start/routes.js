'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('auth/login', 'UserController.login')
  Route.post('auth/register', 'UserController.register')
  Route.get('projects', 'ProjectController.index')
}).prefix('api')
