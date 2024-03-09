import { useArgs } from '@storybook/preview-api';
import Modal from './Modal';
import MovieForm from '../MovieForm/MovieForm';
import './Modal.scss';
import '../MovieForm/MovieForm.scss';
import '../../App.scss';

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

const FILLED_FORM = {
    movieTitle: 'TEST',
    releaseDate: '2024-03-08',
    movieUrl: 'https://epam.com',
    rating: 0.1,
    relevantGenres: [GENRE_LIST[0], GENRE_LIST[1]],
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

export const DeleteMovie = {
    args: {
        open: true,
        title: 'delete movie',
    },
    render: function Render() {
        const [{ open, title }] = useArgs();
        return <Modal open={open} title={title}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Are you sure you want to delete this movie?</p>
                <div className="MovieForm__row--buttons">
                    <button className="MovieForm__row--button App-button App-button--primary">confirm</button>
                </div>
            </div>
        </Modal>
    }
}
