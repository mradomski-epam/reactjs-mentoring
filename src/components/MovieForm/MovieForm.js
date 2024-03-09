import React from 'react';
import PropTypes from 'prop-types';
// import GENRE_LIST from '../../App';
import './MovieForm.scss';
import Select from "react-dropdown-select";

const EMPTY_FORM = {
    movieTitle: '',
    releaseDate: '2024-03-08',
    movieUrl: '',
    rating: 0,
    relevantGenres: [],
    duration: 0,
    description: '',
}

const GENRE_LIST = [
    {   value: 1,
        label: 'All',
    },
    {
        id: 2,
        label: 'Documentary'
    },
    {
        id: 3,
        label: 'Comedy'
    },
    {
        id: 4,
        label: 'Thriller'
    },
    {
        id: 5,
        label: 'Crime',
    },
    {
        id: 6,
        label: 'Action',
    },
    {
        id: 7,
        label: 'Drama',
    }
];

class MovieForm extends React.Component {
    state = {
        form: this.props.movieData ? {
            movieTitle: this.props.movieData.movieTitle || '',
            releaseDate: this.props.movieData.releaseDate || '2024-03-08',
            movieUrl: this.props.movieData.movieUrl || '',
            rating: this.props.movieData.rating || 0,
            relevantGenres: this.props.movieData.relevantGenres.map((genre) => {
                return GENRE_LIST.find((item) => item.value === genre.value);
            }).filter(Boolean)|| [],
            duration: this.props.movieData.duration || 0,
            description: this.props.movieData.description || '',
        } : EMPTY_FORM,
        genreList: [
            {   value: 'All',
                label: 'All',
            },
            {
                value: 'Documentary',
                label: 'Documentary'
            },
            {
                value: 'Comedy',
                label: 'Comedy'
            },
            {
                value: 'Thriller',
                label: 'Thriller'
            },
            {
                value: 'Crime',
                label: 'Crime',
            },
            {
                value: 'Action',
                label: 'Action',
            },
            {
                value: 'Drama',
                label: 'Drama',
            }
        ]
    };

    resetForm = (e) => {
        e.preventDefault()
        this.setState({
            form: EMPTY_FORM,
        });
    }

    onTitleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                movieTitle: e.target.value,
            }
        });
    }
    onReleaseDateChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                releaseDate: e.target.value,
            }
        });
    }
    onMovieUrlChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                movieUrl: e.target.value,
            }
        });
    }
    onRatingChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                rating: e.target.value,
            }
        });
    }
    onGenreChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                relevantGenres: e,
            },
        })
    }
    onDurationChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                duration: e.target.value,
            }
        });
    }
    onDescriptionChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                description: e.target.value,
            }
        });
    }

    render() {
        return (
            <form
                className="MovieForm"
                onSubmit={this.props.onSubmit}
            >
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--large">
                        <label
                            className="MovieForm__label"
                            htmlFor="movieTitle"
                        >
                            title
                        </label>
                        <input
                            className="MovieForm__input"
                            name="movieTitle"
                            id="movieTitle"
                            type="text"
                            placeholder="Movie title"
                            onInput={this.onTitleChange}
                            value={this.state.form.movieTitle}
                        />
                    </div>
                    <div className="MovieForm__field MovieForm__field--small">
                        <label
                            className="MovieForm__label"
                            htmlFor="releaseYear"
                        >
                            release date
                        </label>
                        <input
                            className="MovieForm__input MovieForm__input-number"
                            name="releaseDate"
                            id="releaseDate"
                            type="date"
                            placeholder="Select date"
                            onChange={this.onReleaseDateChange}
                            value={this.state.form.releaseDate}
                        />
                    </div>
                </div>
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--large">
                        <label
                            className="MovieForm__label"
                            htmlFor="movieUrl"
                        >
                            movie url
                        </label>
                        <input
                            className="MovieForm__input"
                            name="movieUrl"
                            id="movieUrl"
                            type="text"
                            placeholder="https://"
                            onInput={this.onMovieUrlChange}
                            value={this.state.form.movieUrl}
                        />
                    </div>
                    <div className="MovieForm__field MovieForm__field--small">
                        <label
                            className="MovieForm__label"
                            htmlFor="rating"
                        >
                            rating
                        </label>
                        <input
                            className="MovieForm__input MovieForm__input-number"
                            name="rating"
                            id="rating"
                            type="number"
                            placeholder="7.8"
                            min={0}
                            max={10}
                            step={0.1}
                            onChange={this.onRatingChange}
                            value={this.state.form.rating}
                        />
                    </div>
                </div>
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--large">
                        <label
                            className="MovieForm__label"
                            htmlFor="relevantGenre"
                        >
                            genre
                        </label>
                        <Select
                            searchable={false}
                            multi={true}
                            placeholder={"Select genre"}
                            className="MovieForm__select"
                            values={this.state.form.relevantGenres}
                            options={this.state.genreList}
                            onChange={this.onGenreChange}
                        />
                    </div>
                    <div className="MovieForm__field MovieForm__field--small">
                        <label
                            className="MovieForm__label"
                            htmlFor="duration"
                        >
                            duration
                        </label>
                        <input
                            className="MovieForm__input MovieForm__input-number"
                            name="duration"
                            id="duration"
                            type="number"
                            placeholder="minutes"
                            min={0}
                            step={1}
                            onChange={this.onDurationChange}
                            value={this.state.form.duration}
                        />
                    </div>
                </div>
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--full">
                        <label
                            className="MovieForm__label"
                            htmlFor="overview"
                        >
                            overview
                        </label>
                        <textarea
                            className="MovieForm__input MovieForm__input-textarea"
                            name="overview"
                            id="overview"
                            placeholder="Movie description"
                            onInput={this.onDescriptionChange}
                            value={this.state.form.description}
                        />
                    </div>
                </div>
                <div className="MovieForm__row--buttons">
                    <button className="MovieForm__row--button App-button App-button--secondary" onClick={this.resetForm}>reset</button>
                    <button className="MovieForm__row--button App-button App-button--primary" type={"submit"}>submit</button>
                </div>
            </form>
        )
    }
}

MovieForm.propTypes = {
    movieData: PropTypes.object,
    onSubmit: PropTypes.func,
};

MovieForm.defaultProps = {
    movieData: EMPTY_FORM,
};

export default MovieForm;
