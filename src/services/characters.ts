import { AxiosResponse } from "axios";
import axios from "./api";

import { Data, CharacterData } from "types/characters";

export function getCharacters(params: any = {}): Promise<AxiosResponse<Data>> {
  const paramsToString = new URLSearchParams(params).toString();
  return axios.get(`/characters?${paramsToString}`);
}

export function getCharacter(
  id: string
): Promise<AxiosResponse<CharacterData>> {
  return axios.get(`/characters/${id}`);
}

export function getMediaCharacters(id: string): Promise<AxiosResponse<Data>> {
  return axios.get(`characters/${id}/media-characters"`);
}

export function getMedia(id: string): Promise<AxiosResponse<Data>> {
  return axios.get(`/media-characters/${id}/media`);
}
