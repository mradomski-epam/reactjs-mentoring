import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

class SearchForm extends React.Component {
    handleChangeQuery = (e) => {
        this.setState({ query: e.target.value });
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }

    state = {
        query: this.props.initialSearchQuery
    }
    render() {
        return (
            <form data-testid="search-form" className="SearchForm" onSubmit={this.handleSearch}>
                <input
                    data-testid="search-form-input"
                    className="SearchForm__input"
                    placeholder="What do you want to search?"
                    onInput={ this.handleChangeQuery }
                    value={ this.state.query }
                />
                <button
                    data-testid="search-form-submit"
                    type="submit"
                    className="SearchForm__button"
                    onClick={ this.handleSearch }
                >
                    Search
                </button>
            </form>
        )
    }
}

SearchForm.propTypes = {
    initialSearchQuery: PropTypes.string,
    onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
    initialSearchQuery: '',
};

export default SearchForm;
