import type { NextApiRequest, NextApiResponse } from "next";
import { getCharacters } from "services/characters";

type Data = {
  id: number;
  name: string;
};

export default async function characters(
  req: NextApiRequest,
  res: NextApiResponse<Data | {}>
) {
  try {
    const query = req.query;
    const { data } = await getCharacters(query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({});
  }
}
