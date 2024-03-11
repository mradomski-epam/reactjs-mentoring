import './App.scss';
import React from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import GenreList from "./components/GenreList/GenreList";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SortControl from "./components/SortControl/SortControl";
import Modal from "./components/Modal/Modal";
import MovieForm from "./components/MovieForm/MovieForm";

export const GENRE_LIST = [
    {   value: 1,
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
        name: 'Thriller'
    },
    {
        id: 5,
        name: 'Crime',
    },
    {
        id: 6,
        name: 'Action',
    },
    {
        id: 7,
        name: 'Drama',
    }
]

class App extends React.Component {

  state = {
      initialSearchQuery: 'asdf',
      currentGenre: 'All',
      genreList: GENRE_LIST,
      movies: [
          {
              imageUrl: 'https://www.movieposters.com/cdn/shop/products/d3b27b0547871234b683c5e7b9549677_25c5cfd2-9653-4e3b-b8bc-fc2b9b7ed414_480x.progressive.jpg?v=1573585337',
              movieName: 'Scarface',
              releaseYear: 1983,
              relevantGenres: [
                  GENRE_LIST[5],
                  GENRE_LIST[6],
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
                  GENRE_LIST[5],
                  GENRE_LIST[4],
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
      ],
      modalOpen: false,
      modalTitle: '',
  };
  toggleModalOpen = () => {
      this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleGenreSelect = (genre) => {
      this.setState({ currentGenre: genre })
  }

  handleSelectMovie = (movie) => {
    this.setState({ selectedMovie: this.state.movies.find((item) => item.movieName === movie) });
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
            <div onClick={this.toggleModalOpen}>asd</div>
          <div id="App-portal"></div>
            <Modal
                onClose={this.toggleModalOpen}
                open={this.state.modalOpen}
                title={this.state.modalTitle}
            >
                <MovieForm
                    onSubmit={() => { console.log('submitted!') }}
                    movieData={this.state.selectedMovie}
                />
            </Modal>
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
