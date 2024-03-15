import React from 'react';
import PropTypes from 'prop-types';
import './MovieTile.scss';

class MovieTile extends React.Component {

    handleSelectMovie = () => {
        this.props.onSelectMovie(this.props.movie.id);
    }
    render() {
        return (
            <div
                className="MovieTile"
                data-testid={`MovieTile-${this.props.movie.title}`}
                data-cy={this.props.movie.id}
                onClick={() => this.handleSelectMovie(this.props.title) }
            >
                <div className="MovieTile__image__wrapper">
                    {
                        this.props.movie.poster_path ?
                            <img
                                src={this.props.movie.poster_path}
                                alt={`${this.props.movie.title} poster`}
                                className="MovieTile__image"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror= null;
                                    currentTarget.src = '/placeholder.png'
                                }}
                            /> : ''
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
    movie: PropTypes.object,
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
