import { LinksPage, Links, Image } from "./generics";
export interface CharacterDataList {
  data: Array<Character>;
  meta: Meta;
  links: LinksPage;
}

export interface CharacterData {
  data: Character;
}

export interface Meta {
  count: number;
}

export interface Character {
  id: number;
  type: string;
  links: Links;
  attributes: CharacterAttributes;
  relationships: CharacterRelationships;
}

export interface CharacterAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  name: string;
  names: Object;
  malId: string;
  description: string;
  otherNames: string[];
  canonicalName: string;
  image: {
    original: string;
  };
}

export interface CharacterRelationships {
  primaryMedia: {
    links: Links;
  };
  castings: {
    links: Links;
  };
  mediaCharacters: {
    links: Links;
  };
  quotes: {
    links: Links;
  };
}
