import React from 'react';
import PropTypes from 'prop-types';
import './MovieTile.scss';

class MovieTile extends React.Component {
    render() {
        return (
            <div
                className="MovieTile"
                data-testid="MovieTile"
            >
                <div className="MovieTile__image__wrapper">
                    {
                        this.props.imageUrl ? <img src={this.props.imageUrl} alt="movie image" className="MovieTile__image"/> : ''
                    }
                </div>
                <div className="MovieTile__description">
                    <div className="MovieTile__details">
                        <h3 className="MovieTile__name">{ this.props.name }</h3>
                        <span className="MovieTile__genres">
                            {
                                this.props.relevantGenres.join(', ')
                            }
                        </span>
                    </div>
                    <div className="MovieTile__releaseYear">
                        { this.props.releaseYear }
                    </div>
                </div>
            </div>
        )
    }
}

MovieTile.propTypes = {
    imageUrl:  PropTypes.string,
    name: PropTypes.string,
    releaseYear: PropTypes.number,
    relevantGenres: PropTypes.arrayOf(PropTypes.string),
};

MovieTile.defaultProps = {
    imageUrl: '',
    name: 'name',
    releaseYear: 2024,
    relevantGenres: [],
};

export default MovieTile;
