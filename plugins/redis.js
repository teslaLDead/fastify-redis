import fastifyRedis from "@fastify/redis";
import fastifyPlugin from "fastify-plugin";

async function redisConnector(fastify, options) {
  fastify.register(fastifyRedis, {
    host: "127.0.0.1",
  });
}

export default fastifyPlugin(redisConnector);
