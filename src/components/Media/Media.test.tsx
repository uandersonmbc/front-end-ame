import { render } from "@testing-library/react";

import Media from "./Media";

const data = {
  id: "3424",
  type: "anime",
  links: {
    self: "https://kitsu.io/api/edge/anime/3424",
  },
  attributes: {
    createdAt: "2013-02-20T16:52:41.711Z",
    updatedAt: "2021-08-30T00:00:09.371Z",
    slug: "cowboy-bebop-session-xx-mish-mash-blues",
    synopsis:
      'Due to the violence portrayed in the Cowboy Bebop world and violence in Japanese schools, the series was briefly cancelled and an extra session was created as a final episode to the first thirteen episodes aired. Called "Session XX: Mish-Mash Blues," a compilation of clips from previous episodes, it aired on June 26, 1998 on TV Tokyo. The episode was never released on DVD. In it, the characters provide a philosophical commentary and end with the words: This Is Not The End. You Will See The Real "Cowboy Bebop" Someday!\n(Source: AniDB)',
    description:
      'Due to the violence portrayed in the Cowboy Bebop world and violence in Japanese schools, the series was briefly cancelled and an extra session was created as a final episode to the first thirteen episodes aired. Called "Session XX: Mish-Mash Blues," a compilation of clips from previous episodes, it aired on June 26, 1998 on TV Tokyo. The episode was never released on DVD. In it, the characters provide a philosophical commentary and end with the words: This Is Not The End. You Will See The Real "Cowboy Bebop" Someday!\n(Source: AniDB)',
    coverImageTopOffset: 9,
    titles: {
      en: "Cowboy Bebop Session XX",
      en_jp: "Cowboy Bebop: Yose Atsume Blues",
      en_us: "Cowboy Bebop Session XX",
      ja_jp: "カウボーイビバップ よせあつめブルース",
    },
    canonicalTitle: "Cowboy Bebop: Yose Atsume Blues",
    abbreviatedTitles: [
      "Yoseatsume Blues",
      "Cowboy Bebop Session XX",
      "Cowboy Bebop Episode 27 Session XX",
      "Cowboy Bebop Session XX: Mish-Mash Blues",
    ],
    averageRating: "73.9",
    ratingFrequencies: {
      "2": "9",
      "3": "1",
      "4": "7",
      "5": "0",
      "6": "32",
      "7": "0",
      "8": "65",
      "9": "1",
      "10": "160",
      "11": "2",
      "12": "283",
      "13": "5",
      "14": "399",
      "15": "6",
      "16": "417",
      "17": "10",
      "18": "106",
      "19": "2",
      "20": "341",
    },
    userCount: 3849,
    favoritesCount: 16,
    startDate: "1998-06-26",
    endDate: "1998-06-26",
    nextRelease: "",
    popularityRank: 2409,
    ratingRank: 2300,
    ageRating: "R",
    ageRatingGuide: "17+ (violence & profanity)",
    subtype: "special",
    status: "finished",
    tba: "",
    posterImage: {
      tiny: "https://media.kitsu.io/anime/poster_images/3424/tiny.jpg?1597696639",
      small:
        "https://media.kitsu.io/anime/poster_images/3424/small.jpg?1597696639",
      medium:
        "https://media.kitsu.io/anime/poster_images/3424/medium.jpg?1597696639",
      large:
        "https://media.kitsu.io/anime/poster_images/3424/large.jpg?1597696639",
      original:
        "https://media.kitsu.io/anime/poster_images/3424/original.jpg?1597696639",
      meta: {
        dimensions: {
          tiny: {
            width: 110,
            height: 156,
          },
          small: {
            width: 284,
            height: 402,
          },
          medium: {
            width: 390,
            height: 554,
          },
          large: {
            width: 550,
            height: 780,
          },
        },
      },
    },
    coverImage: {
      tiny: "https://media.kitsu.io/anime/cover_images/3424/tiny.jpg?1597702098",
      small:
        "https://media.kitsu.io/anime/cover_images/3424/small.jpg?1597702098",
      medium:
        "https://media.kitsu.io/anime/cover_images/3424/tiny.jpg?1597702098",
      large:
        "https://media.kitsu.io/anime/cover_images/3424/large.jpg?1597702098",
      original:
        "https://media.kitsu.io/anime/cover_images/3424/original.jpg?1597702098",
      meta: {
        dimensions: {
          tiny: {
            width: 840,
            height: 200,
          },
          small: {
            width: 1680,
            height: 400,
          },
          large: {
            width: 3360,
            height: 800,
          },
        },
      },
    },
    episodeCount: 1,
    episodeLength: 27,
    totalLength: 27,
    youtubeVideoId: "",
    showType: "special",
    nsfw: false,
  },
  relationships: {
    genres: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/genres",
        related: "https://kitsu.io/api/edge/anime/3424/genres",
      },
    },
    categories: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/categories",
        related: "https://kitsu.io/api/edge/anime/3424/categories",
      },
    },
    castings: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/castings",
        related: "https://kitsu.io/api/edge/anime/3424/castings",
      },
    },
    installments: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/installments",
        related: "https://kitsu.io/api/edge/anime/3424/installments",
      },
    },
    mappings: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/mappings",
        related: "https://kitsu.io/api/edge/anime/3424/mappings",
      },
    },
    reviews: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/reviews",
        related: "https://kitsu.io/api/edge/anime/3424/reviews",
      },
    },
    mediaRelationships: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/media-relationships",
        related: "https://kitsu.io/api/edge/anime/3424/media-relationships",
      },
    },
    characters: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/characters",
        related: "https://kitsu.io/api/edge/anime/3424/characters",
      },
    },
    staff: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/staff",
        related: "https://kitsu.io/api/edge/anime/3424/staff",
      },
    },
    productions: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/productions",
        related: "https://kitsu.io/api/edge/anime/3424/productions",
      },
    },
    quotes: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/quotes",
        related: "https://kitsu.io/api/edge/anime/3424/quotes",
      },
    },
    episodes: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/episodes",
        related: "https://kitsu.io/api/edge/anime/3424/episodes",
      },
    },
    streamingLinks: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/streaming-links",
        related: "https://kitsu.io/api/edge/anime/3424/streaming-links",
      },
    },
    animeProductions: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/anime-productions",
        related: "https://kitsu.io/api/edge/anime/3424/anime-productions",
      },
    },
    animeCharacters: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/anime-characters",
        related: "https://kitsu.io/api/edge/anime/3424/anime-characters",
      },
    },
    animeStaff: {
      links: {
        self: "https://kitsu.io/api/edge/anime/3424/relationships/anime-staff",
        related: "https://kitsu.io/api/edge/anime/3424/anime-staff",
      },
    },
  },
};

describe("Media", () => {
  it("renders without crashing", () => {
    render(<Media data={data} />);
  });
});
