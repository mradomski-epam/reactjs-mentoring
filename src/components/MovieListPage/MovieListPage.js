import React, { useState, useEffect } from 'react';
import './MovieListPage.scss';
import MovieTile from "../MovieTile/MovieTile";
import MovieDetails from "../MovieDetails/MovieDetails";
import SearchForm from "../SearchForm/SearchForm";
import GenreList from "../GenreList/GenreList";
import SortControl from "../SortControl/SortControl";
import axiosInstance from '../../api/api';
import { SORT_BY_OPTIONS, GENRE_LIST, MOVIES } from "../../data/common";
import {
    useNavigate,
    useSearchParams,
    createSearchParams,
} from "react-router-dom";

const MovieListPage = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortBy') || SORT_BY_OPTIONS[0]);
    const [activeGenre, setActiveGenre] = useState(searchParams.get('filter') || '');
    const [movieList, setMovieList] = useState(MOVIES);
    const [selectedMovie] = useState(null);
    const navigate = useNavigate();

    const onSelectMovie = (movieId) => {
        navigate(`/movies/${movieId}`);
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const search = searchQuery;
        const sortBy = sortCriterion[0]?.value;
        const sortOrder = 'asc';
        const filter = activeGenre;
        const params = {
            search,
            sortBy,
            sortOrder,
            filter,
        };
        Object.keys(params).forEach((key) => {
            if (!params[key]) delete params[key];
        });
        (async () => {
            try {
                const data = await axiosInstance.get(
                    '/movies',
                    {
                        params
                    }
                );
                if (!signal.aborted) {
                    if (data.data.data) {
                        navigate(`/?${createSearchParams(params)}`);
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
    }, [searchQuery, sortCriterion, activeGenre, navigate]);

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
                        return <MovieTile
                                movie={movie}
                                onSelectMovie={onSelectMovie}
                                key={movie.title}
                        />
                    })
                }
            </section>
        </div>
    )
}

MovieListPage.propTypes = {};

MovieListPage.defaultProps = {};

export default MovieListPage;
