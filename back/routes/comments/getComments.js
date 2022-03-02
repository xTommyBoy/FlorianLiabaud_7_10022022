export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/back/comments/:postId',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request) {
    const comments = await fastify.prisma.comment.findMany({
      where: {
        postId: parseInt(request.params.postId, 10),
      },
      select: {
        id: true,
        content: true,
        postId: true,
        userId: true,
        dateCreated: true,
        user: {
          select: {
            displayName: true,
            profileImageUrl: true,
          },
        },
      },
      orderBy: [{ id: 'asc' }],
    })

    return comments
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
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        content: { type: 'string' },
        postId: { type: 'number' },
        userId: { type: 'string' },
        dateCreated: { type: 'string' },
        user: {
          type: 'object',
          properties: {
            displayName: { type: 'string' },
            profileImageUrl: { type: 'string' },
          },
        },
      },
    },
  },
}

const schema = { params, response }
