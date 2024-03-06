import MovieTile from "./MovieTile";
import {fireEvent, render, screen} from '@testing-library/react';

const movieTileTest = {
    imageUrl: 'https://www.movieposters.com/cdn/shop/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_480x.progressive.jpg?v=1573585334',
    name: 'Scarface',
    releaseYear: 1983,
    relevantGenres: [
        'Action',
        'Drama',
    ],
    rating: 8.3,
    duration: 170,
    description: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
};

test('renders component and have data visible', () => {
    render(<MovieTile {...movieTileTest} />)
    const image = screen.getByAltText((movieTileTest.name + ' poster'));
    const title = screen.getByText(movieTileTest.name);
    const releaseYear = screen.getByText(movieTileTest.releaseYear.toString());
    const genres = screen.getByText(movieTileTest.relevantGenres.join(', '));

    expect([
        image,
        title,
        releaseYear,
        genres,
    ]).toBeDefined();
});

test('component gets clicked and calls back movie name', () => {
    const onSelectMovie = jest.fn();
    render(<MovieTile {...movieTileTest} onSelectMovie={onSelectMovie}/>);
    const image = screen.getByAltText((movieTileTest.name + ' poster'));
    fireEvent.click(image);
    expect(onSelectMovie).toHaveBeenCalledWith(movieTileTest.name);
});
