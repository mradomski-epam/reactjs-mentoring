import GenreList from './GenreList';
import './GenreList.scss';

const genreList = [
    {   id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Documentary'
    },
    {
        id: 3,
        name: 'Comedy'
    },
    {
        id: 4,
        name: 'Horror'
    },
    {
        id: 5,
        name: 'Crime',
    }
];

export default {
    title: 'components/GenreList',
    component: GenreList,
    tags: ['autodocs'],
    argTypes: {
        genreList: { control: 'array' },
        currentGenre: { control: 'text' }
    },
    parameters: {
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#282c34',
                }
            ]
        }

    }
};

export const NoCurrentGenre = (args) => {
    return <GenreList {...args} />;
}
NoCurrentGenre.args = {
    genreList,
}
export const CurrentGenreSelected = (args) => {
    return <GenreList {...args} />;
};
CurrentGenreSelected.args = {
    genreList,
    currentGenre: genreList[0].name,
}
