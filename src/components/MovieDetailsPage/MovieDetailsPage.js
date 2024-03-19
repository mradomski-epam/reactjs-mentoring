import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axiosInstance from '../../api/api';
import MovieDetails from "../MovieDetails/MovieDetails";
import './MovieDetailsPage.scss';

const MovieDetailsPage = () => {
    let { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    `/movies/${movieId}`,
                    {
                        params: {
                            id: movieId,
                        }
                    }
                );
                if (response.data) {
                    setSelectedMovie(response.data);
                }
            } catch (e) {
                console.error(e);
                setSelectedMovie(null);
            }
        })();
    }, [movieId])

    return (
        <div className="MovieDetailsPage">
            {
                selectedMovie ?
                    <MovieDetails selectedMovie={selectedMovie}/> :
                    <div className={"MovieDetailsPage__not-found"}>
                        <p>Selected movie was not found</p>
                    </div>
            }
        </div>
    )
};

export default MovieDetailsPage;
