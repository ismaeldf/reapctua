'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {

    const data = request.only([
      'name',
      'email',
      'password'
    ])

    const alreadyUser = await User.where({ email: data.email }).fetch();

    if (alreadyUser.rows.length === 0) {
      const user = await User.create(data)

      return response.created(user)
    } else {
      return response.status(400).json({
        status: 'error',
        message: 'Email is already in use.'
      })
    }
  }

}

module.exports = UserController
