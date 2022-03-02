import { compareSync } from 'bcrypt'

export default async function (fastify) {
  fastify.route({
    method: 'DELETE',
    url: '/back/users/:userId',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const id = request.params.userId
    const password = JSON.parse(request.body).password
    const { userId, role } = fastify.jwt.decode(request.cookies.token)
    console.log('====================================')
    console.log('userId: ', id, 'role :', role)
    console.log('====================================')
    const user = await fastify.prisma.user.findUnique({
      where: {
        id: userId
      },
    })

    if (!user) throw fastify.httpErrors.unauthorized('Utilisateur non trouvé')
    if (!compareSync(password, user.password))
      throw fastify.httpErrors.unauthorized('Mot de passe Incorrect !')


    if (id === userId || role === 'admin') {
      await fastify.prisma.user.delete({
        where: {
          id: userId,
        },
      })
    }

    return { message: 'Utilisateur correctement supprimé !' }
  }
}

const params = {
  type: 'object',
  properties: {
    userId: { type: 'number' },
  },
}

const response = {
  200: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
  401: {
    type: 'object',
    properties: {
      statusCode: { type: 'string' },
      error: { type: 'string' },
      message: { type: 'string' },
    },
  },
}

const schema = { response, params }
