import React, { useState, useEffect } from 'react';
import './MovieListPage.scss';
import { GENRE_LIST, MOVIES } from "../../App";
import MovieTile from "../MovieTile/MovieTile";
import MovieDetails from "../MovieDetails/MovieDetails";
import SearchForm from "../SearchForm/SearchForm";
import GenreList from "../GenreList/GenreList";
import SortControl from "../SortControl/SortControl";
import axios from 'axios';

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByOptions, setSortByOptions] = useState([
        {
            label: 'Release Date', value: 'releaseDate',
        },
        {
            label: 'Title', value: 'title',
        }
    ]);
    const [sortCriterion, setSortCriterion] = useState([sortByOptions[0]]);
    const [activeGenre, setActiveGenre] = useState('');
    const [movieList, setMovieList] = useState(MOVIES);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        async function getData() {
            debugger;
            const data = await axios.get(
                'http://localhost:4000/movies',
                {
                    params: {
                        search: searchQuery,
                        sortBy: sortCriterion.length ? sortCriterion[0].value : null,
                        sortOrder: 'asc',
                        filter: activeGenre,
                    }
                }
            );
            if (data.data.data) {
                setMovieList(data.data.data);
            } else {
                console.error('Error with fetching movies');
            }
        }
        getData();
    }, [searchQuery, sortCriterion, activeGenre]);

    return (
        <div className="MovieListPage">
            <section className={"MovieListPage__search"}>
                {
                    selectedMovie ?
                        <MovieDetails {...selectedMovie}/> :
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
                    currentSort={sortCriterion}
                    setCurrentSort={setSortCriterion}
                />
            </section>
            <section className={"MovieListPage__movie-list"}>
                {
                    movieList.map((movie) => {
                        return <MovieTile {...movie} onSelectMovie={setSelectedMovie} key={movie.title} />
                    })
                }
            </section>
        </div>
    )
}

MovieListPage.propTypes = {};

MovieListPage.defaultProps = {};

export default MovieListPage;
