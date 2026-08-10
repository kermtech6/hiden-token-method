export default function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  
  return res.status(200).json({
    status: "ok",
    token_configured: !!token,
    token_value: token ? token.substring(0, 10) + "..." : "NOT_SET",
    timestamp: new Date().toISOString(),
    message: token ? "✅ Token is configured" : "❌ Token is NOT configured"
  });
}
