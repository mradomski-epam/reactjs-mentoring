import React from 'react';
import { useForm } from 'react-hook-form';
import '../MovieForm/MovieForm.scss';
import {GENRE_LIST} from "../../data/common";

const AddMovieForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            title: '',
            release_date: '',
            poster_path: '',
            genres: [],
            vote_average: 0.1,
            runtime: 1,
            overview: '',
        }
    });

    const options = GENRE_LIST.map(item => {
        return {
            label: item,
            value: item,
        }
    })

    return (
        <form className="MovieForm" onSubmit={handleSubmit((val) => { console.log(val)})}>
            <div className="MovieForm__row">
                <div className="MovieForm__field MovieForm__field--large">
                    <label
                        className="MovieForm__label"
                        htmlFor="title"
                    >
                        title
                    </label>
                    <input
                        className={
                            'MovieForm__input ' +
                            (errors.title ? 'MovieForm__input--error': '')
                        }
                        name="title"
                        id="title"
                        type="text"
                        placeholder="Movie title"
                        {...register('title', { required: 'This is required.' })}

                    />
                    {
                        errors.title && errors.title.message ?
                            <p className={'MovieForm__error'}>{errors.title.message}</p> :
                            ''
                    }
                </div>
                <div className="MovieForm__field MovieForm__field--small">
                    <label
                        className="MovieForm__label"
                        htmlFor="release_date"
                    >
                        release date
                    </label>
                    <input
                        className={
                            'MovieForm__input MovieForm__input-number ' +
                            (errors.release_date ? 'MovieForm__input--error': '')
                        }
                        name="release_date"
                        id="release_date"
                        type="date"
                        placeholder="Select date"
                        {...register('release_date', { required: 'This is required.' })}
                    />
                    {
                        errors.release_date && errors.release_date.message ?
                            <p className={'MovieForm__error'}>{errors.release_date.message}</p> :
                            ''
                    }
                </div>
            </div>
            <div className="MovieForm__row">
                <div className="MovieForm__field MovieForm__field--large">
                    <label
                        className="MovieForm__label"
                        htmlFor="poster_path"
                    >
                        movie url
                    </label>
                    <input
                        className="MovieForm__input"
                        name="poster_path"
                        id="poster_path"
                        type="text"
                        placeholder="https://"
                        {...register('poster_path')}
                    />
                </div>
                <div className="MovieForm__field MovieForm__field--small">
                    <label
                        className="MovieForm__label"
                        htmlFor="vote_average"
                    >
                        rating
                    </label>
                    <input
                        className={
                            'MovieForm__input MovieForm__input-number ' +
                            (errors.vote_average ? 'MovieForm__input--error': '')
                        }
                        name="vote_average"
                        id="vote_average"
                        type="number"
                        placeholder="7.8"
                        min={0}
                        max={10}
                        step={0.1}
                        {...register('vote_average', { required: 'This is required.' })}
                    />
                    {
                        errors.vote_average && errors.vote_average.message ?
                            <p className={'MovieForm__error'}>{errors.vote_average.message}</p> :
                            ''
                    }
                </div>
            </div>
            <div className="MovieForm__row">
                <div className="MovieForm__field MovieForm__field--large">
                    <label
                        className="MovieForm__label"
                        htmlFor="genres"
                    >
                        genre
                    </label>
                    <select
                        className={
                            'MovieForm__input ' +
                            (errors.genres ? 'MovieForm__input-select--error': '')
                        }
                        name='genres'
                        {...register('genres', {required: 'This is required.'})}
                        >
                        {
                            options.map((item) => {
                                return (
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                )
                            })
                        }
                    </select>
                    {
                        errors.genres && errors.genres.message ?
                            <p className={'MovieForm__error'}>{errors.genres.message}</p> :
                            ''
                    }
                </div>
                <div className="MovieForm__field MovieForm__field--small">
                    <label
                        className="MovieForm__label"
                        htmlFor="runtime"
                    >
                        duration
                    </label>
                    <input
                        className={
                            'MovieForm__input MovieForm__input-number ' +
                            (errors.runtime ? 'MovieForm__input--error': '')
                        }
                        name="runtime"
                        id="runtime"
                        type="number"
                        placeholder="minutes"
                        min={0}
                        step={1}
                        {...register('runtime', { required: 'This is required.' })}
                    />
                    {
                        errors.runtime && errors.runtime.message ?
                            <p className={'MovieForm__error'}>{errors.runtime.message}</p> :
                            ''
                    }
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
                        className={
                            'MovieForm__input MovieForm__input-textarea '  +
                            (errors.overview ? 'MovieForm__input--error': '')
                        }
                        name="overview"
                        id="overview"
                        placeholder="Movie description"
                        {...register('overview', { required: 'This is required.' })}
                    />
                    {
                        errors.overview && errors.overview.message ?
                            <p className={'MovieForm__error'}>{errors.overview.message}</p> :
                            ''
                    }
                </div>
            </div>
            <div className="MovieForm__row--buttons">
                <button className="MovieForm__row--button App-button App-button--secondary" onClick={() => { console.log(errors)}}>reset</button>
                <button className="MovieForm__row--button App-button App-button--primary" type={"submit"}>submit</button>
            </div>
        </form>
    )
};

AddMovieForm.propTypes = {};

AddMovieForm.defaultProps = {};

export default AddMovieForm;
