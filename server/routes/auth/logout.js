export default async function (fastify) {
  fastify.route({
    method: 'POST',
    url: '/auth/logout',
    schema: schema,
    handler: handler,
  })

  async function handler(request, reply) {
    reply
      .clearCookie('token', {
        domain: 'localhost',
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: true,
      })
      .code(200)
      .send({ message: 'User disconnected' })
  }
}

const response = {
  200: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
}

const schema = { response }
