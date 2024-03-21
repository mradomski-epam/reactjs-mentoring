import './App.scss';
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import Modal from "./components/Modal/Modal";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/movies/:movieId',
                element: <MovieDetailsPage/>,
                children: [
                    {
                        path: '/movies/:movieId/edit',
                        element: <div>asdasdasdasd</div>
                    }
                ],
            },
            {
                path: '/new',
                element: <Modal
                            title={'Add movie'}
                            onClose={() => { console.log('esia') }}
                        >
                            <AddMovieForm/>
                            </Modal>
            }
        ],
        element: <MovieListPage/>
    },
]);

class App extends React.Component {


  render() {
    return (
        <div className="App">
                <div className='App-portal'></div>
                <RouterProvider router={router}/>
        </div>
    );
  }
}

export default App;
