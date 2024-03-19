import React from 'react';
import PropTypes from 'prop-types';
import './MovieTile.scss';

class MovieTile extends React.Component {

    handleSelectMovie = () => {
        this.props.onSelectMovie(this.props.movie);
    }
    render() {
        return (
            <div
                className="MovieTile"
                data-testid={`MovieTile-${this.props.movie.title}`}
                onClick={() => this.handleSelectMovie(this.props.title) }
            >
                <div className="MovieTile__image__wrapper">
                    {
                        this.props.movie.poster_path ? <img src={this.props.movie.poster_path} alt={`${this.props.movie.title} poster`} className="MovieTile__image"/> : ''
                    }
                </div>
                <div className="MovieTile__description">
                    <div className="MovieTile__details">
                        <h3 className="MovieTile__name">{ this.props.movie.title }</h3>
                        <span className="MovieTile__genres">
                            {
                                this.props.movie.genres.join(', ')
                            }
                        </span>
                    </div>
                    <div className="MovieTile__releaseYear">
                        { this.props.movie.release_date }
                    </div>
                </div>
            </div>
        )
    }
}

MovieTile.propTypes = {
    movie: PropTypes.objectOf({
        poster_path:  PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
    }),
    onSelectMovie: PropTypes.func,
};

MovieTile.defaultProps = {
    movie: {
        poster_path: '',
        title: 'name',
        release_date: '',
        genres: [],
    }
};

export default MovieTile;
