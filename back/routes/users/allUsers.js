export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/back/users',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler() {
    const users = await fastify.prisma.user.findMany()

    return users
  }
}

const response = {
  200: {
    type: 'array',
    items: {
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
  },
}

const schema = { response }
