import type { NextApiRequest, NextApiResponse } from "next";

type Tasks = {
  id: string;
  content: string;
}[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tasks: Tasks = [];

  if (req.method === "GET") {
    res.status(200).json(tasks);
  }
}
