export default async function (fastify) {
  fastify.route({
    method: 'DELETE',
    url: '/post/:postId',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const postId = request.params.postId
    const { userId, role } = fastify.jwt.decode(request.cookies.token)

    const postDelete = await fastify.prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: true,
      },
    })

    if (postDelete.user.id === userId || role === 'admin') {
      const deleteComments = fastify.prisma.comment.deleteMany({
        where: {
          postId: postId,
        },
      })

      const deletePost = fastify.prisma.post.delete({
        where: {
          id: postId,
        },
      })

      await fastify.prisma.$transaction([deleteComments, deletePost])

      return { message: 'Publication successfully deleted' }
    } else {
      throw fastify.httpErrors.unauthorized(
        'The user is not authorized to delete this publication'
      )
    }
  }
}

const params = {
  type: 'object',
  properties: {
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
