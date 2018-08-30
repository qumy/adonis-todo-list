'use strict'

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('auth/register', ({ request }) => {
  return { message: 'hello world' }
})
