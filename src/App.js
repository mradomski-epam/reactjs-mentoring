import './App.scss';
import React from 'react';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreList from "./components/GenreList/GenreList";
import MovieTile from "./components/MovieTile/MovieTile";

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
              name: 'Scarface',
              releaseYear: 1983,
              relevantGenres: [
                  'Action',
                  'Drama',
              ]
          },
          {
              imageUrl: 'https://www.movieposters.com/cdn/shop/files/Casino.mpw.102809_480x.progressive.jpg?v=1707421876',
              name: 'Casino',
              releaseYear: 1995,
              relevantGenres: [
                  'Crime',
                  'Thriller',
              ]
          }
      ]
  };


  handleQueryChange = (value) => {
    this.setState({ initialSearchQuery: value });
  }

  handleGenreSelect = (genre) => {
      this.setState({ currentGenre: genre })
  }

  onSearch = () => {
    return true;
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <Counter initialValue={0}/>
              <SearchForm
                  initialSearchQuery={this.state.initialSearchQuery}
                  onSearch={this.onSearch}
              />
              <GenreList
                  genreList={this.state.genreList}
                  currentGenre={this.state.currentGenre}
                  onSelect={this.handleGenreSelect}
              />
              {
                  this.state.movies.map((movie) => {
                      return <MovieTile {...movie}/>
                  })
              }
          </header>
        </div>
    );
  }
}

export default App;
