import './App.scss';
import React from 'react';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreList from "./components/GenreSelect/GenreList";

class App extends React.Component {

  state = {
      initialSearchQuery: 'asdf',
      currentGenre: 'All',
      genreList: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']
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
              <Counter/>
              <SearchForm
                  initialSearchQuery={this.state.initialSearchQuery}
                  onSearch={this.onSearch}
              />
              <GenreList
                  genreList={this.state.genreList}
                  currentGenre={this.state.currentGenre}
                  onSelect={this.handleGenreSelect}
              />
          </header>
        </div>
    );
  }
}

export default App;
