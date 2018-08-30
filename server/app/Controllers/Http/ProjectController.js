'use strict'

class ProjectController {
  index({ auth }) {
    const user = await auth.getUser();
    console.log(user)
    return {
      message: 'hello world'
    }
  }
}

module.exports = ProjectController
