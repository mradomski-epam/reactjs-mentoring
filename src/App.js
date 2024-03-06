import './App.scss';
import React from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import GenreList from "./components/GenreList/GenreList";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SortControl from "./components/SortControl/SortControl";

class App extends React.Component {

  state = {
      initialSearchQuery: 'asdf',
      currentGenre: 'All',
      genreList: [
          {   id: 1,
              name: 'All',
          },
          {
            id: 2,
            name: 'Documentary'
          },
          {
            id: 3,
            name: 'Comedy'
          },
          {
            id: 4,
            name: 'Horror'
          },
          {
            id: 5,
            name: 'Crime',
          }],
      movies: [
          {
              imageUrl: 'https://www.movieposters.com/cdn/shop/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_480x.progressive.jpg?v=1573585334',
              movieName: 'Scarface',
              releaseYear: 1983,
              relevantGenres: [
                  'Action',
                  'Drama',
              ],
              rating: 8.3,
              duration: 170,
              description: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
          },
          {
              imageUrl: 'https://www.movieposters.com/cdn/shop/files/Casino.mpw.102809_480x.progressive.jpg?v=1707421876',
              movieName: 'Casino',
              releaseYear: 1995,
              relevantGenres: [
                  'Crime',
                  'Thriller',
              ],
              rating: 8.2,
              duration: 178,
              description: 'In Las Vegas, two best friends - a casino executive and a mafia enforcer - compete for a gambling empire and a fast-living, fast-loving socialite.',
          }
      ],
      selectedMovie: null,
      sortBy: '',
      sortByOptions: [
          {
              label: 'Release Date', value: 'releaseDate',
          },
          {
              label: 'Title', value: 'title',
          }
      ]
  };

  handleGenreSelect = (genre) => {
      this.setState({ currentGenre: genre })
  }

  handleSelectMovie = (movie) => {
    this.setState({ selectedMovie: this.state.movies.find((item) => item.name === movie) });
  }

  handleChangeSortBy = (sortBy) => {
      this.setState({ sortBy });
  }

  onSearch = () => {
    return true;
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
          </header>
            <section className="App-search">
                {
                    this.state.selectedMovie ?
                        <MovieDetails {...this.state.selectedMovie} /> :
                        <div>
                            <SearchForm
                                initialSearchQuery={this.state.initialSearchQuery}
                                onSearch={this.onSearch}
                            />
                        </div>
                }
            </section>
            <section className="App-sort-bar">
                <GenreList
                    genreList={this.state.genreList}
                    currentGenre={this.state.currentGenre}
                    onSelect={this.handleGenreSelect}
                />
                <SortControl
                    currentSort={this.state.sortByOptions[0]}
                    setCurrentSort={this.handleChangeSortBy}
                />
            </section>

            <section className="App-movie-list">
                {
                    this.state.movies.map((movie) => {
                        return <MovieTile {...movie} onSelectMovie={this.handleSelectMovie} key={movie.name}/>
                    })
                }
            </section>
        </div>
    );
  }
}

export default App;
