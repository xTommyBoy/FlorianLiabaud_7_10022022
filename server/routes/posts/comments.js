export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/comments/14',
    schema: schema,
    handler: handler,
  })

  async function handler() {
    const comments = await fastify.prisma.post.findMany()

    return comments
  }
}
const response = {}
const schema = { response }
