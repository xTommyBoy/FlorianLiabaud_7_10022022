import { compareSync } from 'bcrypt'

export default async function (fastify) {
  fastify.route({
    method: 'PATCH',
    url: '/back/users',
    schema: schema,
    preValidation: [fastify.authenticate],
    handler: handler,
  })

  async function handler(request, reply) {
    const { userId } = fastify.jwt.decode(request.cookies.token)
    const {
      email,
      displayName: displayName,
      profileImageUrl: profileImageUrl,
      password,
    } = request.body

    const user = await fastify.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) throw fastify.httpErrors.unauthorized('Utilisateur non trouvé')

    const token = await reply.jwtSign({ role: user.role, userId: user.id })

    if (!compareSync(password, user.password))
      throw fastify.httpErrors.unauthorized('Mot de passe Incorrect !')

    const updatedUser = await fastify.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: email,
        displayName: displayName,
        profileImageUrl: profileImageUrl,
      },
    })

    const returnedUser = {
      id: updatedUser.id,
      displayName: updatedUser.displayName,
      email: updatedUser.email,
      role: updatedUser.role,
      profileImageUrl: updatedUser.profileImageUrl,
    }

    reply
      .setCookie('connectedUser', JSON.stringify(returnedUser), {
        domain: 'localhost',
        path: '/',
        secure: true,
        httpOnly: false,
        sameSite: true,
      })
      .code(200)
      .send(returnedUser)
  }
}

const body = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    displayName: { type: 'string' },
    profileImageUrl: { type: 'string' },
  },
}

const response = {
  200: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      displayName: { type: 'string' },
      email: { type: 'string' },
      role: { type: 'string' },
      profileImageUrl: { type: 'string' },
    },
  },
}

const schema = { response, body }
