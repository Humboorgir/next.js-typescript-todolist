import type { NextApiRequest, NextApiResponse } from "next";

type Tasks = {
  id: string;
  content: string;
}[];

let tasks: Tasks = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(tasks);
  }

  if (req.method === "POST") {
    const { content } = req.body;
    if (!content) return res.status(500).send("Internal server error");
    const id = String(Math.random());
    const task = { id, content };
    tasks.push(task);
    res.status(200).json(task);
  }
}
