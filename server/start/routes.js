'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('auth/login', 'UserController.login')
  Route.post('auth/register', 'UserController.register')
  Route.get('projects', 'ProjectController.index').middleware('auth')
  Route.post('projects', 'ProjectController.create').middleware('auth')
}).prefix('api')
