import { useArgs } from '@storybook/preview-api';
import Modal from './Modal';
import './Modal.scss';
import MovieForm from '../MovieForm/MovieForm';
import '../MovieForm/MovieForm.scss';

const GENRE_LIST = [
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

const EMPTY_FORM = {
    movieTitle: '',
    releaseDate: '',
    movieUrl: '',
    rating: 0,
    relevantGenres: [],
    duration: 0,
    description: '',
}

const FILLED_FORM = {
    movieTitle: 'TEST',
    releaseDate: '2024-03-08',
    movieUrl: 'https://epam.com',
    rating: 0.1,
    relevantGenres: [GENRE_LIST[0]],
    duration: 131,
    description: 'blablabla',
}

export default {
    title: 'components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        open: { control: 'boolean' },
    },
}

export const AddMovie = {
    args: {
        open: true,
        title: 'add movie',
    },
    render: function Render() {
      const [{ open, title }] = useArgs();
      return <div id="App-portal">
          <Modal open={open} title={title}><MovieForm/></Modal>
      </div>
    }
}

export const EditMovie = {
    args: {
        open: true,
        title: 'edit movie',
        form: FILLED_FORM,
    },
    render: function Render() {
        const [{ open, title, form }] = useArgs();
        return <div id="App-portal">
            <Modal open={open} title={title}>
                <MovieForm movieData={form}/>
            </Modal>
        </div>
    }
}

// export const DeleteMovie = {
//     args: {
//         open: true,
//         title: 'delete movie',
//     },
//     render: function Render() {
//         const [{ open, title, form }] = useArgs();
//         return <Modal open={open} title={title}>
//             <div style="display: flex; flex-direction: column;">
//                 <p>Are you sure you want to delete this movie?</p>
//                 <div style="display: flex; justify-content: flex-end;">
//                     <button className="App-button--primary">confirm</button>
//                 </div>
//             </div>
//         </Modal>
//     }
// }
