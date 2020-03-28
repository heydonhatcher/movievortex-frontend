const state = {
  selectedMovieIsLoading: false,
  movieResultsAreLoading: false,
  selectedMovie: {
    tconst: "tt0082971",
    title: "Raiders of the Lost Ark",
    year: 1981,
    directors: [
      {
        nconst: "nm0000229",
        name: "Steven Spielberg"
      }
    ],
    writers: [
      {
        nconst: "nm0001410",
        name: "Lawrence Kasdan"
      },
      {
        nconst: "nm0000184",
        name: "George Lucas"
      },
      {
        nconst: "nm0442241",
        name: "Philip Kaufman"
      }
    ],
    actors: [
      {
        nconst: "nm0000148",
        name: "Harrison Ford"
      },
      {
        nconst: "nm0000261",
        name: "Karen Allen"
      }
    ],
    poster:
      "https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg"
  },
  movieResults: [
    {
      tconst: "tt0089218",
      title: "The Goonies",
      year: 1985,
      directors: [
        {
          nconst: "nm0001149",
          name: "Richard Donner"
        }
      ],
      writers: [
        {
          nconst: "nm0001060",
          name: "Chris Columbus"
        },
        {
          nconst: "nm0000229",
          name: "Steven Spielberg"
        }
      ],
      actors: [
        {
          nconst: "nm0000276",
          name: "Sean Astin"
        },
        {
          nconst: "nm0000982",
          name: "Josh Brolin"
        }
      ],
      poster:
        "https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg"
    },
    {
      tconst: "tt7131622",
      title: "Once Upon a Time... in Hollywood",
      year: 2019,
      directors: [
        {
          nconst: "nm0000233",
          name: "Quentin Tarantino"
        }
      ],
      writers: [],
      actors: [
        {
          nconst: "nm0000138",
          name: "Leonardo DiCaprio"
        },
        {
          nconst: "nm0000093",
          name: "Brad Pitt"
        }
      ],
      poster:
        "https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg"
    }
  ]
};

export default state;
