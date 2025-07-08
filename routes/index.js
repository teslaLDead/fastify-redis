async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return { hello: "youyyo" };
  });

  fastify.post("/foo", function (req, reply) {
    const { redis } = fastify;
    redis.set(req.body.key, req.body.value, (err) => {
      reply.send(err || { status: "ok" });
    });
  });

  fastify.get("/foo", function (req, reply) {
    const { redis } = fastify;
    redis.get(req.query.key, (err, val) => {
      reply.send(err || val);
    });
  });
}
export default routes;
