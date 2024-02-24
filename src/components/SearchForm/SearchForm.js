import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

class SearchForm extends React.Component {
    handleChangeQuery = (e) => {
        this.props.onQueryChange(e.target.value)
    }
    handleSearch = (e) => {
        this.props.onSearch(e);
    }

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch(this.props.query);
        }
    }
    render() {
        return (
            <div className="SearchForm">
                <input className="SearchForm__input" placeholder="What do you want to search?" onInput={ this.handleChangeQuery } value={this.props.query } onKeyDown={this.onKeyDown}/>
                <button className="SearchForm__button" onClick={ this.handleSearch }>Search</button>
            </div>
        )
    }
}

SearchForm.propTypes = {
    query: PropTypes.string,
    onQueryChange: PropTypes.func,
    onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
    query: '',
};

export default SearchForm;
