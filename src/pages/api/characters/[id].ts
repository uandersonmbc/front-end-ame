import type { NextApiRequest, NextApiResponse } from "next";
import { getMediaCharacters } from "services/characters";
import { RelationshipsData } from "types/media";

export default async function characters(
  req: NextApiRequest,
  res: NextApiResponse<Array<RelationshipsData> | {}>
) {
  try {
    const id = req.query.id.toString();

    const { data } = await getMediaCharacters(id);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json([]);
  }
}
