export interface Data {
  data: Array<Character>;
  meta: Meta;
  links: Links;
}

export interface Meta {
  count: number;
}

export interface Character {
  id: number;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Links {
  self?: string;
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
  related?: string;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  name: string;
  malId: string;
  description: string;
  image: {
    original: string;
  };
}

export interface Relationships {
  primaryMedia: {
    links: Links;
  };
  castings: {
    links: Links;
  };
}
