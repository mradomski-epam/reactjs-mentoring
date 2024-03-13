import MovieDetails from "./MovieDetails";
import {cleanup, render, screen} from "@testing-library/react";

const movieDetailsTest = {
    poster_path: 'https://www.movieposters.com/cdn/shop/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_480x.progressive.jpg?v=1573585334',
    title: 'Scarface',
    release_date: '1983',
    genres: [
    'Action',
    'Drama',
],
    vote_average: 8.3,
    runtime: 170,
    overview: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
};

const getDurationTime = (duration) => {
    const hoursCompleted = duration / 60;
    const minutes = duration % 60;
    return `${hoursCompleted >= 1 ? (Math.floor(hoursCompleted) + 'h') : ''} ${minutes > 0 ? (minutes + 'min') : ''}`;
}
test('component renders with proper all of the data visible', () => {
    render(<MovieDetails {...movieDetailsTest}/>);
    const image = screen.getByAltText((movieDetailsTest.title + ' poster'));
    const title = screen.getByText(movieDetailsTest.title);
    const vote_average = screen.getByText(movieDetailsTest.vote_average.toString());
    const release_date = screen.getByText(movieDetailsTest.release_date.toString());
    const runtime = screen.getByText(getDurationTime(movieDetailsTest.runtime));
    const overview = screen.getByText(movieDetailsTest.overview);
    expect(image.getAttribute('src')).toBe(movieDetailsTest.poster_path);
    expect([
        title,
        vote_average,
        release_date,
        runtime,
        overview
    ]).toHaveLength(5);
});

