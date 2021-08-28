import { AxiosResponse } from "axios";
import axios from "./api";

import { CharacterDataList, CharacterData } from "types/characters";
import { MediaData } from "types/media";
import { RelationshipsData } from "types/generics";

export function getCharacters(
  params: any = {}
): Promise<AxiosResponse<CharacterDataList>> {
  const paramsToString = new URLSearchParams(params).toString();
  return axios.get(`/characters?${paramsToString}`);
}

export function getCharacter(
  id: string
): Promise<AxiosResponse<CharacterData>> {
  return axios.get(`/characters/${id}`);
}

export function getMediaCharacters(
  id: string
): Promise<AxiosResponse<RelationshipsData>> {
  return axios.get(`/characters/${id}/relationships/media-characters`);
}

export function getMedia(id: number): Promise<AxiosResponse<MediaData>> {
  return axios.get(`/media-characters/${id}/media`);
}
