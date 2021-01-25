import path from 'path'
import { fileURLToPath } from 'url'

import * as fastifyAutoloadStar from '../../../index.js'

const { dirname } = path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function (fastify, opts) {
  fastify.register(fastifyAutoloadStar.default, {
    dir: path.join(__dirname, 'plugins', 'star-default'),
    options: { foo: 'bar' }
  })
}
