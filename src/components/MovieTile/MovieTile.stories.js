import MovieTile from "./MovieTile";
import './MovieTile.scss';

const testData = {
    imageUrl: 'https://www.movieposters.com/cdn/shop/files/Casino.mpw.102809_480x.progressive.jpg?v=1707421876',
    name: 'Casino',
    releaseYear: 1995,
    relevantGenres: [
        'Crime',
        'Thriller',
    ],
    rating: 8.2,
    duration: 178,
    description: 'In Las Vegas, two best friends - a casino executive and a mafia enforcer - compete for a gambling empire and a fast-living, fast-loving socialite.',
}

export default {
    title: 'components/MovieTile',
    component: MovieTile,
    tags: ['autodocs'],
    argTypes: {
        ...testData,
        onSelectMovie: { action: 'clicked'},
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
}

export const ExampleData = {
    args: {
        ...testData,
        onSelectMovie: (name) => {
            console.log(name);
        }
    }
}
