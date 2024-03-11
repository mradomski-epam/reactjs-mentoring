import React from 'react';
import PropTypes from 'prop-types';
import { GENRE_LIST } from '../../data/common';
import './MovieForm.scss';
import Select from "react-dropdown-select";

const EMPTY_FORM = {
    movieTitle: '',
    releaseDate: '',
    movieUrl: '',
    rating: 0,
    relevantGenres: [],
    duration: 0,
    description: '',
}

class MovieForm extends React.Component {
    state = {
        form: this.props.movieData ? {
            movieTitle: this.props.movieData.movieTitle || '',
            releaseDate: this.props.movieData.releaseDate || '',
            movieUrl: this.props.movieData.movieUrl || '',
            rating: this.props.movieData.rating || 0,
            relevantGenres: this.props.movieData.relevantGenres || [],
            duration: this.props.movieData.duration || 0,
            description: this.props.movieData.description || '',
        } : EMPTY_FORM,
        genreList: GENRE_LIST,
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            }
        });
    }

    resetForm = (e) => {
        e.preventDefault()
        this.setState({
            form: EMPTY_FORM,
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
                            onInput={this.onChange}
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
                            onChange={this.onChange}
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
                            onInput={this.onChange}
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
                            onChange={this.onChange}
                            value={this.state.form.rating}
                        />
                    </div>
                </div>
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--large">
                        <label
                            className="MovieForm__label"
                            htmlFor="relevantGenres"
                        >
                            genre
                        </label>
                        <Select
                            searchable={false}
                            multi={true}
                            name="relevantGenres"
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
                            onChange={this.onChange}
                            value={this.state.form.duration}
                        />
                    </div>
                </div>
                <div className="MovieForm__row">
                    <div className="MovieForm__field MovieForm__field--full">
                        <label
                            className="MovieForm__label"
                            htmlFor="description"
                        >
                            overview
                        </label>
                        <textarea
                            className="MovieForm__input MovieForm__input-textarea"
                            name="description"
                            id="description"
                            placeholder="Movie description"
                            onInput={this.onChange}
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
