import { useArgs } from '@storybook/preview-api';
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
export const noCurrentGenre = {
    args: {
        genreList,
        currentGenre: '',
    },
    render: function Render() {
        const [{ genreList, currentGenre }, updateArgs] = useArgs();

        const onSelected = (name) => {
            console.log(name);
            updateArgs({ currentGenre: name });
        }

        return <GenreList genreList={genreList} onSelect={onSelected} currentGenre={currentGenre}/>
    },
};

export const withCurrentGenre = {
    args: {
        genreList,
        currentGenre: 'All',
    },
    render: function Render() {
        const [{ genreList, currentGenre }, updateArgs] = useArgs();

        const onSelected = (name) => {
            console.log(name);
            updateArgs({ currentGenre: name });
        }

        return <GenreList genreList={genreList} onSelect={onSelected} currentGenre={currentGenre}/>
    },
};

// export const NoCurrentGenre = (args) => {
//     return <GenreList {...args} />;
// }
// NoCurrentGenre.args = {
//     genreList,
// }
// export const CurrentGenreSelected = (args) => {
//     return <GenreList {...args} />;
// };
// CurrentGenreSelected.args = {
//     genreList,
//     currentGenre: genreList[0].name,
// }
