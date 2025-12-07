export async function onRequest(context) {
  // Extract city and country from Cloudflare's incoming request object
  const { request } = context;
  const city = request.cf.city || "Unknown City";
  const country = request.cf.country || "Unknown Country";

  // Return a JSON response
  return new Response(JSON.stringify({
    message: `Hello from the Cloud Edge!`,
    location: `You are connecting from ${city}, ${country}`,
    timestamp: new Date().toISOString()
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
