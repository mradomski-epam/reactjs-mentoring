import './App.scss';
import React from 'react';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";

class App extends React.Component {

  state = { initialValue: 0, query: 'asdf' };

  handleCounterChange = (value) => {
    this.setState({ initialValue: value });
  }

  handleQueryChange = (value) => {
    this.setState({ query: value });
  }

  onSearch = () => {
    return true;
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <Counter initialValue={this.state.initialValue} onValueChange={this.handleCounterChange}/>
              <SearchForm query={this.state.query} onQueryChange={this.handleQueryChange} onSearch={this.onSearch}/>
          </header>
        </div>
    );
  }
}

export default App;
