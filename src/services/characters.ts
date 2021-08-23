import { AxiosResponse } from "axios";
import axios from "./api";

import { Data } from "types/characters";

export function getCharacters(params: any = {}): Promise<AxiosResponse<Data>> {
  const paramsToString = new URLSearchParams(params).toString();
  return axios.get(`/characters?${paramsToString}`);
}
