import React from 'react';
import PropTypes from 'prop-types';
import './GenreList.scss';

class GenreList extends React.Component {
    handleSelect = (name) => {
        this.props.onSelect(name);
    }
    render() {
        return (
            <ul className="GenreSelect__list" data-testid="genre-list">
                {this.props.genreList.map((item) => {
                    const isSelected = this.props.currentGenre === item.value;
                    return (
                        <li
                            role="presentation"
                            data-testid={`genre-list-${item.id}`}
                            key={item.name}
                            className={
                                "GenreSelect__list__item " +
                                (isSelected ? "GenreSelect__list__item--selected" : "")
                            }>
                            <button
                                role="tab"
                                aria-label={item.name}
                                aria-controls={`panel-id-${item.id}`}
                                aria-selected={isSelected}
                                id={`tab-id-${item.id}`}
                                onClick={() => this.handleSelect(item.value)}
                            >
                                {item.name}
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
