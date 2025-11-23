export default async function handler(req, res) {
  try {
    const response = await fetch("https://cn.yourbeauty.tips/webhook/submit-prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return data;

  } catch (err) {
    throw new Error(`Proxy failed: ${err.message}`);
  }
}