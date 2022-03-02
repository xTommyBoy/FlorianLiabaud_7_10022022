export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/back/users/:userId',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const requestUserId = parseInt(request.params.userId, 10)
    const trueUserId = parseInt(
      fastify.jwt.decode(request.cookies.token).userId,
      10
    )

    if (requestUserId !== trueUserId) throw fastify.httpErrors.unauthorized()

    const user = await fastify.prisma.user.findUnique({
      where: {
        id: requestUserId,
      },
    })

    return {
      displayName: user.displayName,
      email: user.email,
    }
  }
}

const response = {
  200: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      displayName: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
      profileImageUrl: { type: 'string' },
      role: { type: 'string' },
      dateCreated: { type: 'string' },
      dateUpdated: { type: 'string' },
    },
  },
}

const schema = { response }
