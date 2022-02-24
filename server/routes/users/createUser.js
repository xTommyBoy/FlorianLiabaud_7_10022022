import { hashSync } from 'bcrypt'

export default async function (fastify) {
  fastify.route({
    method: 'POST',
    url: '/users',
    schema: schema,
    handler: handler,
  })

  async function handler(request, reply) {
    const { email, displayName: displayName, password } = request.body

    const saltRounds = 10
    const hash = hashSync(password, saltRounds)

    const newUser = await fastify.prisma.user.create({
      data: {
        email: email,
        displayName: displayName,
        password: hash,
      },
    })

    const token = await reply.jwtSign({
      role: newUser.role,
      userId: newUser.id,
    })

    const returnedUser = {
      id: newUser.id,
      displayName: newUser.displayName,
      email: newUser.email,
      role: newUser.role,
      profileImageUrl: newUser.profileImageUrl,
    }

    reply
      .setCookie('token', token, {
        domain: 'localhost',
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: true,
      })
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
    password: { type: 'string' },
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
