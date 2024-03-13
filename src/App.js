import './App.scss';
import React from 'react';
import MovieListPage from "./components/MovieListPage/MovieListPage";

export const GENRE_LIST = [
    {   value: '',
        name: 'All',
    },
    {
        value: 'Documentary',
        name: 'Documentary'
    },
    {
        value: 'Comedy',
        name: 'Comedy'
    },
    {
        value: 'Thriller',
        name: 'Thriller'
    },
    {
        value: 'Crime',
        name: 'Crime',
    },
    {
        value: 'Action',
        name: 'Action',
    },
    {
        value: 'Drama',
        name: 'Drama',
    }
]

export const MOVIES = [
    {
        poster_path: 'https://www.movieposters.com/cdn/shop/products/d3b27b0547871234b683c5e7b9549677_25c5cfd2-9653-4e3b-b8bc-fc2b9b7ed414_480x.progressive.jpg?v=1573585337',
        title: 'Scarface',
        release_date: '01-01-1983',
        genres: [
            GENRE_LIST[5].name,
            GENRE_LIST[6].name,
        ],
        vote_average: 8.3,
        runtime: 170,
        overview: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
    },
    {
        poster_path: 'https://www.movieposters.com/cdn/shop/files/Casino.mpw.102809_480x.progressive.jpg?v=1707421876',
        title: 'Casino',
        release_date: '01-01-1995',
        genres: [
            GENRE_LIST[5].name,
            GENRE_LIST[4].name,
        ],
        vote_average: 8.2,
        runtime: 178,
        overview: 'In Las Vegas, two best friends - a casino executive and a mafia enforcer - compete for a gambling empire and a fast-living, fast-loving socialite.',
    }
]

class App extends React.Component {

  state = {
      initialSearchQuery: 'asdf',
      currentGenre: 'All',
      genreList: GENRE_LIST,
      movies: MOVIES,
      selectedMovie: null,
      sortBy: '',
      sortByOptions: [
          {
              label: 'Release Date', value: 'releaseDate',
          },
          {
              label: 'Title', value: 'title',
          }
      ],
      modalOpen: false,
      modalTitle: '',
  };
  render() {
    return (
        <div className="App">
            {
                <MovieListPage/>
            }
        </div>
    );
  }
}

export default App;
