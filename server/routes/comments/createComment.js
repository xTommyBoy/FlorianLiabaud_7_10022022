export default async function (fastify) {
  fastify.route({
    method: 'POST',
    url: '/comments/',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request, reply) {
    const { comment, postId } = request.body
    const { userId } = fastify.jwt.decode(request.cookies.token)

    await fastify.prisma.comment.create({
      data: {
        content: comment,
        postId: postId,
        userId: userId,
      },
    })

    return { message: 'Comment added successfully !' }
  }
}

const body = {
  type: 'object',
  properties: {
    comment: { type: 'string' },
    postId: { type: 'number' },
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
