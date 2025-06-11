import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./data/scripts.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.status(200).json(data);
}
