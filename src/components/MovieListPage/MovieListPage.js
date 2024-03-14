import React, { useState, useEffect } from 'react';
import './MovieListPage.scss';
import { GENRE_LIST, MOVIES } from "../../App";
import MovieTile from "../MovieTile/MovieTile";
import MovieDetails from "../MovieDetails/MovieDetails";
import SearchForm from "../SearchForm/SearchForm";
import GenreList from "../GenreList/GenreList";
import SortControl from "../SortControl/SortControl";
import axiosInstance from '../../api/api';
import {SORT_BY_OPTIONS} from "../../data/common";

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriterion, setSortCriterion] = useState([SORT_BY_OPTIONS[0]]);
    const [activeGenre, setActiveGenre] = useState('');
    const [movieList, setMovieList] = useState(MOVIES);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        (async () => {
            try {
                const data = await axiosInstance.get(
                    '/movies',
                    {
                        params: {
                            search: searchQuery,
                            sortBy: sortCriterion.length ? sortCriterion[0].value : null,
                            sortOrder: 'asc',
                            filter: activeGenre,
                        }
                    }
                );
                if (!signal.aborted) {
                    if (data.data.data) {
                        setMovieList(data.data.data);
                    }
                }
            } catch (e) {
                if (!signal.aborted) {
                    console.error(e);
                }
            }
        })();
        return () => {
            abortController.abort();
        }
    }, [searchQuery, sortCriterion, activeGenre]);

    return (
        <div className="MovieListPage">
            <section className={"MovieListPage__search"}>
                {
                    selectedMovie ?
                        <MovieDetails selectedMovie={selectedMovie}/> :
                        <div>
                            <SearchForm
                                initialSearchQuery={searchQuery}
                                onSearch={setSearchQuery}
                            />
                        </div>
                }
            </section>
            <section className={"MovieListPage__sort-bar"}>
                <GenreList
                    genreList={GENRE_LIST}
                    currentGenre={activeGenre}
                    onSelect={setActiveGenre}
                />
                <SortControl
                    sortByOptions={SORT_BY_OPTIONS}
                    currentSort={sortCriterion}
                    setCurrentSort={setSortCriterion}
                />
            </section>
            <section className={"MovieListPage__movie-list"}>
                {
                    movieList.map((movie) => {
                        return <MovieTile movie={movie} onSelectMovie={setSelectedMovie} key={movie.title} />
                    })
                }
            </section>
        </div>
    )
}

MovieListPage.propTypes = {};

MovieListPage.defaultProps = {};

export default MovieListPage;
