import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@/database/db';

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();

  const id = req.query.id;

  const entry = await db.getById(id as string);
  // const length = entry.length;
  // res.statusCode = 200;
  // res.setHeader('Content-type', 'application/json');
  // res.end(JSON.stringify({ data: entry }));
  res.status(200).json({ data: entry });
};

export default allAvos;
