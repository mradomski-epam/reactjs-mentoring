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
            <div className="MovieDetails__wrapper">
                <img
                    src={this.props.imageUrl}
                    alt={`${this.props.name} poster`}
                    className="MovieDetails__image"
                />
                <div className="MovieDetails__details">
                    <div className="MovieDetails__title__wrapper">
                        <h2 className="MovieDetails__title">
                            {this.props.name}
                        </h2>
                        <div className="MovieDetails__rating">
                            <span>{this.props.rating}</span>
                        </div>
                    </div>
                    <span className="MovieDetails__genres">{this.props.relevantGenres.join(' & ')}</span>
                    <div className="MovieDetails__releaseYear">
                        <span>{this.props.releaseYear}</span>
                        <span>{this.getDurationTime(this.props.duration)}</span>
                    </div>
                    <p className="MovieDetails__description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

MovieDetails.propTypes = {
    imageUrl:  PropTypes.string,
    name: PropTypes.string,
    releaseYear: PropTypes.number,
    relevantGenres: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
};

MovieDetails.defaultProps = {
    imageUrl: '',
    name: 'name',
    releaseYear: 2024,
    relevantGenres: [],
    rating: 1.0,
    duration: 1,
    description: '',
};

export default MovieDetails;
