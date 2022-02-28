export default async function (fastify) {
  fastify.route({
    method: 'DELETE',
    url: '/users/:userId',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const id = request.params.userId
    const { userId, role } = fastify.jwt.decode(request.cookies.token)
    console.log('====================================')
    console.log('userId: ', id, 'role :', role)
    console.log('====================================')
    if (id === userId || role === 'admin') {
      await fastify.prisma.user.delete({
        where: {
          id: userId,
        },
      })
    }

    return { message: 'User successfully deleted' }
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
