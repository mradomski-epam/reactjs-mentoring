import React from 'react';
import PropTypes from 'prop-types';
import './GenreList.scss';

class GenreList extends React.Component {
    handleSelect = (index) => {
        this.props.onSelect(index);
    }
    render() {
        return (
            <ul className="GenreSelect__list">
                {this.props.genreList.map((item, index) => {
                    return <li
                        key={index}
                        className={'GenreSelect__list__item ' + (this.props.currentGenre === item ? 'GenreSelect__list__item--selected' : '')}
                        onClick={() => this.handleSelect(item)}
                    >
                        {item}
                    </li>
                })
                }
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
