import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';


class MovieDetails extends React.Component {

    getDurationTime = (duration) => {
        const hoursCompleted = duration / 60;
        const minutes = duration % 60;
        return `${hoursCompleted >= 1 ? (Math.floor(hoursCompleted) + 'h') : ''} ${minutes > 0 ? (minutes + 'min') : ''}`;
    }
    render() {
        return (
            <div className="MovieDetails__wrapper" data-testid="movie-details-wrapper">
                <img
                    src={this.props.poster_path}
                    alt={`${this.props.title} poster`}
                    className="MovieDetails__image"
                    data-testid="movie-details-image"
                />
                <div className="MovieDetails__details">
                    <div className="MovieDetails__title__wrapper">
                        <h2 className="MovieDetails__title">
                            {this.props.title}
                        </h2>
                        <div className="MovieDetails__rating">
                            <span>{this.props.vote_average}</span>
                        </div>
                    </div>
                    <span className="MovieDetails__genres">{this.props.genres.join(' & ')}</span>
                    <div className="MovieDetails__releaseYear">
                        <span>{this.props.release_date}</span>
                        <span>{this.getDurationTime(this.props.runtime)}</span>
                    </div>
                    <p className="MovieDetails__description">{this.props.overview}</p>
                </div>
            </div>
        )
    }
}

MovieDetails.propTypes = {
    poster_path:  PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
};

MovieDetails.defaultProps = {
    poster_path: '',
    title: '',
    release_date: '',
    genres: [],
    vote_average: 1.0,
    runtime: 1,
    overview: '',
};

export default MovieDetails;
