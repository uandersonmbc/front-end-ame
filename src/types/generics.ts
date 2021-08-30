export interface Links {
  self: string;
  related?: string;
}

export interface RelationshipsData {
  data: Array<{
    type: string;
    id: number;
  }>;
  links: Links;
}

export interface LinksPage {
  first: string;
  prev?: string;
  next?: string;
  last: string;
}

export interface Image {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
  meta?: Meta;
}

export interface Meta {
  dimensions: Dimensions;
}

export interface Dimensions {
  tiny?: Dimension;
  small?: Dimension;
  medium?: Dimension;
  large?: Dimension;
}

export interface Dimension {
  width: number;
  height: number;
}
