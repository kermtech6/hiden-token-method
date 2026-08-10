export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const configured = Boolean(process.env.GITHUB_TOKEN);

  res.status(200).json({ configured });
}
