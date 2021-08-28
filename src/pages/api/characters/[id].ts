import type { NextApiRequest, NextApiResponse } from "next";
import { getMedia, getMediaCharacters } from "services/characters";

type Data = {
  id: number;
  name: string;
};

export default async function characters(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data> | {}>
) {
  try {
    const id = req.query.id.toString();
    const mediaList = [];

    const { data } = await getMediaCharacters(id);

    for (const item of data.data) {
      const { data } = await getMedia(item.id);
      mediaList.push({
        id: data.data.id,
        name: data.data.attributes.canonicalTitle,
      });
    }

    res.status(200).json(mediaList);
  } catch (error) {
    console.log(error);
    res.status(400).json({});
  }
}
