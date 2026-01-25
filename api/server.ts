const port = Number(process.env.PORT ?? 3000);
const serviceName = process.env.SERVICE_NAME ?? "api";
const sharedSecret = process.env.SHARED_SECRET ?? "missing";
const fetchedFromWorker = process.env.SHARED_SECRET ? true : false;

Bun.serve({
  port,
  fetch() {
    return new Response(
      JSON.stringify({
        service: serviceName,
        port,
        sharedSecret,
        fetchedFromWorker
      }, null, 2),
      { headers: { "content-type": "application/json" } }
    );
  },
});

console.log(`[${serviceName}] listening on port ${port}`);
