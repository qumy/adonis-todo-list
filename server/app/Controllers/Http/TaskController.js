'use strict'
const Task = use('App/Models/Task')

class TaskController {
  async create() {
    const user = await auth.getUser()
    const { description } = request.all()
    const project = new Task()
    project.fill({
      title
    })
  }
}

module.exports = TaskController
