import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import AutoLoad from 'fastify-autoload'
import fastifyCors from 'fastify-cors'
import fastifyCookie from 'fastify-cookie'
import fastifyEnv from 'fastify-env'

export default async function (fastify, opts) {
  fastify.register(fastifyCors, {
    origin: true,
    credentials: true,
  })

  fastify.register(fastifyCookie);


  

  const envSchema = {
    type: 'object',
    required: ['JWT_SECRET_KEY'],
    properties: {
      JWT_SECRET_KEY: {
        type: 'string',
        default: '9a5Vx9zdc4eUv9b84tynDu8k4o2p5',
      },
    },
  }

  fastify.register(fastifyEnv, {
    schema: envSchema,
    dotenv: true,
    confKey: 'config',
  })


  const __dirname = dirname(fileURLToPath(import.meta.url))
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    dirNameRoutePrefix: false,
    options: Object.assign({}, opts),
  })
}


