export default async function (fastify) {
  fastify.route({
    method: 'POST',
    url: '/back/comments',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request, reply) {
    const { comment, postId } = request.body
    const { userId } = fastify.jwt.decode(request.cookies.token)

    const newComment = await fastify.prisma.comment.create({
      data: {
        content: comment,
        postId: postId,
        userId: userId,
      },
    })

    return { message: 'Comment added successfully !', comment: newComment}
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
      comment: {
        type: 'object',
        properties: {
          id: { type: 'number'},
          content: { type: 'string' },
          postId: { type: 'number' },
          userId: { type: 'string' },
          dateCreated: { type: 'string' },
          user: {
            type: 'object',
            properties: {
              displayName: { type: 'string' },
              profileImageUrl: {type: 'string'},
            }
          }
        }
      }
    },
  },
}

const schema = { body, response }
