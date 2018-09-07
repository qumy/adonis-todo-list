'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('auth/login', 'UserController.login')
  Route.post('auth/register', 'UserController.register')

  Route.get('projects', 'ProjectController.index').middleware('auth')
  Route.post('projects', 'ProjectController.create').middleware('auth')
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth')
  Route.patch('projects/:id', 'ProjectController.update').middleware('auth')

  Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth')
  Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth')

  Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth')
  Route.patch('tasks/:id', 'TaskController.update').middleware('auth')

}).prefix('api')
