import React, { useState, useEffect } from 'react';
import './MovieListPage.scss';
import MovieTile from "../MovieTile/MovieTile";
import SearchForm from "../SearchForm/SearchForm";
import GenreList from "../GenreList/GenreList";
import SortControl from "../SortControl/SortControl";
import axiosInstance from '../../api/api';
import {SORT_BY_OPTIONS, GENRE_LIST, MOVIES, filterEmptyParams} from "../../data/common";
import {
    useNavigate,
    useSearchParams,
    createSearchParams, Outlet, useParams,
} from "react-router-dom";

const MovieListPage = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortBy') || SORT_BY_OPTIONS[0]);
    const [activeGenre, setActiveGenre] = useState(searchParams.get('filter') || '');
    const [movieList, setMovieList] = useState(MOVIES);
    const navigate = useNavigate();
    let { movieId } = useParams();

    const onSelectMovie = (movieId) => {
        const params = getParams();
        // navigate(`/?${createSearchParams(params)}/movies/${movieId}`);

        navigate(`/movies/${movieId}?${createSearchParams(params)}`);
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

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const params = getParams();

        (async () => {
            try {
                const data = await axiosInstance.get(
                    '/movies',
                    {
                        params,
                    }
                );
                if (!signal.aborted) {
                    if (data.data.data) {
                        window.location.href.includes('/movies') ?
                            navigate(`/movies/${movieId}?${createSearchParams(params)}`) :
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
                <Outlet/>
                {
                       movieId ? null : <SearchForm
                            initialSearchQuery={searchQuery}
                            onSearch={setSearchQuery}
                        />

                }
            </section>
            <section>
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
