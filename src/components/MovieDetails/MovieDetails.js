import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';
import {filterEmptyParams, SORT_BY_OPTIONS} from "../../data/common";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";


const MovieDetails = (props) => {
    const [searchParams] = useSearchParams();
    const [searchQuery] = useState(searchParams.get('search') || '');
    const [sortCriterion] = useState(searchParams.get('sortBy') || SORT_BY_OPTIONS[0]);
    const [activeGenre] = useState(searchParams.get('filter') || '');
    const navigate = useNavigate();

    const getDurationTime = (duration) => {
        const hoursCompleted = duration / 60;
        const minutes = duration % 60;
        return `${hoursCompleted >= 1 ? (Math.floor(hoursCompleted) + 'h') : ''} ${minutes > 0 ? (minutes + 'min') : ''}`;
    }

    const getParams = () => {
        const search = searchQuery;
        const sortBy = sortCriterion[0]?.value;
        const sortOrder = 'asc';
        const filter = activeGenre;

        return filterEmptyParams({
            search,
            sortBy,
            sortOrder,
            filter,
        });
    }

    const onImageClick = () => {
        const params = getParams();
        navigate(`/?${createSearchParams(params)}`);
    }

    return (
        <div className="MovieDetails__wrapper" data-testid="movie-details-wrapper">
            <img
                src={props.selectedMovie.poster_path}
                alt={`${props.selectedMovie.title} poster`}
                className="MovieDetails__image"
                data-testid="movie-details-image"
                onError={({ currentTarget }) => {
                    currentTarget.onerror= null;
                    currentTarget.src = '/placeholder.png'
                }}
                onClick={onImageClick}
            />
            <div className="MovieDetails__details">
                <div className="MovieDetails__title__wrapper">
                    <h2 className="MovieDetails__title">
                        {props.selectedMovie.title}
                    </h2>
                    <div className="MovieDetails__rating">
                        <span>{props.selectedMovie.vote_average}</span>
                    </div>
                </div>
                <span className="MovieDetails__genres">{props.selectedMovie.genres.join(' & ')}</span>
                <div className="MovieDetails__releaseYear">
                    <span>{props.selectedMovie.release_date}</span>
                    <span>{getDurationTime(props.selectedMovie.runtime)}</span>
                </div>
                <p className="MovieDetails__description">{props.selectedMovie.overview}</p>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    selectedMovie: PropTypes.object,
};

MovieDetails.defaultProps = {
    selectedMovie: {
        poster_path: '',
        title: '',
        release_date: '',
        genres: [],
        vote_average: 1.0,
        runtime: 1,
        overview: '',
    }
};

export default MovieDetails;
