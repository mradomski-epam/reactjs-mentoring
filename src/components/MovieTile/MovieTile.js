import React from 'react';
import PropTypes from 'prop-types';
import './MovieTile.scss';

class MovieTile extends React.Component {

    handleSelectMovie = (name) => {
        this.props.onSelectMovie(name);
    }
    render() {
        return (
            <div
                className="MovieTile"
                data-testid={`MovieTile-${this.props.title}`}
                onClick={() => this.handleSelectMovie(this.props.title) }
            >
                <div className="MovieTile__image__wrapper">
                    {
                        this.props.poster_path ? <img src={this.props.poster_path} alt={`${this.props.title} poster`} className="MovieTile__image"/> : ''
                    }
                </div>
                <div className="MovieTile__description">
                    <div className="MovieTile__details">
                        <h3 className="MovieTile__name">{ this.props.title }</h3>
                        <span className="MovieTile__genres">
                            {
                                this.props.genres.join(', ')
                            }
                        </span>
                    </div>
                    <div className="MovieTile__releaseYear">
                        { this.props.release_date }
                    </div>
                </div>
            </div>
        )
    }
}

MovieTile.propTypes = {
    poster_path:  PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    onSelectMovie: PropTypes.func,
};

MovieTile.defaultProps = {
    poster_path: '',
    title: 'name',
    release_date: '',
    genres: [],
};

export default MovieTile;
