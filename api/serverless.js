// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({cuzzo: "maronna mia"});
});

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}`);
});
