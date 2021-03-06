import { Links, Image, LinksPage } from "./generics";

export interface RelationshipsData {
  data: Array<MediaCharactersData>;
  included: Array<Media>;
  meta: {
    count: number;
  };
  links: LinksPage;
}
export interface MediaData {
  data: Media;
}

export interface MediaCharactersData {
  id: string;
  type: string;
  links: Links;
  attributes: MediaCharactersAttributes;
  relationships: MediaCharactersRelationships;
}

export interface Media {
  id: string;
  type: string;
  links: Links;
  attributes: MediaAttributes;
  relationships: MediaRelationships;
}

export interface MediaCharactersAttributes {
  created: string;
  updatedAt: string;
  role: string;
}

export interface MediaCharactersRelationships {
  character: Links;
  media: Links;
  voices: Links;
}

export interface MediaAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Object;
  canonicalTitle: string;
  abbreviatedTitles: Array<string>;
  averageRating: string | null;
  ratingFrequencies: Object;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease: string | null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string;
  posterImage: Image;
  coverImage: Image;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface MediaRelationships {
  genres: {
    links: Links;
  };
  categories: {
    links: Links;
  };
  castings: {
    links: Links;
  };
  installments: {
    links: Links;
  };
  mappings: {
    links: Links;
  };
  reviews: {
    links: Links;
  };
  mediaRelationships: {
    links: Links;
  };
  characters: {
    links: Links;
  };
  staff: {
    links: Links;
  };
  productions: {
    links: Links;
  };
  quotes: {
    links: Links;
  };
  episodes: {
    links: Links;
  };
  streamingLinks: {
    links: Links;
  };
  animeProductions: {
    links: Links;
  };
  animeCharacters: {
    links: Links;
  };
  animeStaff: {
    links: Links;
  };
}
