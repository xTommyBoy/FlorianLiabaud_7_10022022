export default async function (fastify) {
  fastify.route({
    method: 'GET',
    url: '/post',
    schema: schema,
    handler: handler,
  })

  async function handler() {
    const posts = await fastify.prisma.post.findMany()

    return posts
  }
}
const response = {}
const schema = { response }
