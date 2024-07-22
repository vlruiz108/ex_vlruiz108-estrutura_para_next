export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      try {
        const response = await fetch('http://localhost:5001/YOUR_PROJECT_ID/us-central1/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        const data = await response.json();
        res.status(response.status).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  