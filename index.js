import Fastify from "fastify";
import redisConnector from "./plugins/redis.js";

import routes from "./routes/index.js";
const fastify = Fastify({
  logger: true,
});
fastify.register(redisConnector);
fastify.register(routes);
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
