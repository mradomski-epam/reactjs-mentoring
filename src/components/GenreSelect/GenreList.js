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
                {this.props.genreList.map((item) => {
                    return <li
                        key={item.id}
                        className={'GenreSelect__list__item ' + (this.props.currentGenre === item.name ? 'GenreSelect__list__item--selected' : '')}
                        onClick={() => this.handleSelect(item.name)}
                    >
                        {item.name}
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
