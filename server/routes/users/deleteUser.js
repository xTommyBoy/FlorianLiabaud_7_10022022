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

    const userDelete = await fastify.prisma.post.findUnique({
      where: {
        id: user.id,
      },
      include: {
        user: true,
      },
    })

    if (userDelete === userId || role === 'admin') {
      const deleteUser = fastify.prisma.user.delete({
        where: {
          id: userId,
        },
      })

      await fastify.prisma.$transaction(deleteUser)

      return { message: 'User successfully deleted' }
    }
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
