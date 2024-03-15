import './App.scss';
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MovieListPage/>
    },
    {
        path: '/movies/:movieId',
        element: <MovieDetailsPage/>
    }
]);

class App extends React.Component {


  render() {
    return (
        <div className="App">
                <RouterProvider router={router}/>
        </div>
    );
  }
}

export default App;
