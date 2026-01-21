
const apiUrl = process.env.API_URL ?? "http://localhost:3000";
const serviceName = process.env.SERVICE_NAME ?? "worker";

setInterval(async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    console.log(`[${serviceName}] fetched from API:`, data);
  } catch (err) {
    console.error(`[${serviceName}] error:`, err);
  }
}, 3000);

console.log(`[${serviceName}] started, calling ${apiUrl}`);
