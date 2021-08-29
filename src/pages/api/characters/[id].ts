import type { NextApiRequest, NextApiResponse } from "next";
import { getMedia, getMediaCharacters } from "services/characters";
import { MediaData } from "types/characters";

export default async function characters(
  req: NextApiRequest,
  res: NextApiResponse<Array<MediaData> | []>
) {
  try {
    const id = req.query.id.toString();
    const mediaList: Array<MediaData> = [];

    const { data } = await getMediaCharacters(id);

    for (const item of data.data) {
      const { data } = await getMedia(item.id);
      mediaList.push({
        id: data.data.id,
        type: data.data.type,
        name: data.data.attributes.canonicalTitle,
        posterImage: data.data.attributes.posterImage,
        averageRating: data.data.attributes.averageRating,
      });
    }

    res.status(200).json(mediaList);
  } catch (error) {
    console.log(error);
    res.status(400).json([]);
  }
}
