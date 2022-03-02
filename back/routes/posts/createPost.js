export default async function (fastify) {
  fastify.route({
    method: 'POST',
    url: '/back/post',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const { title, imageUrl } = request.body
    const { userId } = fastify.jwt.decode(request.cookies.token)

    await fastify.prisma.post.create({
      data: {
        title: title,
        imageUrl: imageUrl,
        userId: userId,
      },
    })

    return { message: 'Post correctement crée !' }
  }
}

const body = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    imageUrl: { type: 'string' },
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
}

const schema = { body, response }
