export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/post',
    schema: schema,
    handler: handler,
  })

  async function handler() {
    const allPosts = await fastify.prisma.post.findMany({
      orderBy: [{ id: 'desc' }],
      include: {
        user: true,
        _count: {
          select: { comment: true },
        },
      },
    })

    return allPosts
  }
}
const response = {
  200: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        imageUrl: { type: 'string' },
        authorId: { type: 'number' },
        dateCreated: { type: 'string' },
        user: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            displayName: { type: 'string' },
            profileImageUrl: { type: 'string' },
          },
        },
        _count: { comment: { type: 'number' } },
      },
    },
  },
}

const schema = { response }
