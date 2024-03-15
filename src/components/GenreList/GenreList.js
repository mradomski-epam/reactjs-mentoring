import React from 'react';
import PropTypes from 'prop-types';
import './GenreList.scss';

class GenreList extends React.Component {
    handleSelect = (genre) => {
        this.props.onSelect(genre === 'all' ? '' : genre);
    }
    render() {
        return (
            <ul className="GenreSelect__list" data-testid="genre-list">
                {this.props.genreList.map((item) => {
                    const isSelected = this.props.currentGenre === item;
                    return (
                        <li
                            role="presentation"
                            data-testid={`genre-list-${item}`}
                            key={item}
                            className={
                                "GenreSelect__list__item " +
                                (isSelected ? "GenreSelect__list__item--selected" : "")
                            }>
                            <button
                                className="GenreSelect__list__item__button"
                                role="tab"
                                aria-label={item}
                                aria-controls={`panel-id-${item}`}
                                aria-selected={isSelected}
                                id={`tab-id-${item}`}
                                onClick={() => this.handleSelect(item)}
                            >
                                {item === '' ? 'all' : item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

GenreList.propTypes = {
    genreList: PropTypes.array,
    currentGenre: PropTypes.string,
    onSelect: PropTypes.func,
};

GenreList.defaultProps = {};

export default GenreList;
