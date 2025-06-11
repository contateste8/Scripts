import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Método não permitido');

  const { titulo, codigo } = req.body;

  if (!titulo || !codigo) {
    return res.status(400).json({ erro: 'Título e código são obrigatórios' });
  }

  const filePath = path.resolve('./data/scripts.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  data.push({ titulo, codigo });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ sucesso: true });
}
