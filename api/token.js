export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'Token not configured' });
  }

  res.status(200).json({ token });
}
