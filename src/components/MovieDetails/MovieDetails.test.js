import MovieDetails from "./MovieDetails";
import {render, screen} from "@testing-library/react";

const movieDetailsTest = {
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

const getDurationTime = (duration) => {
    const hoursCompleted = duration / 60;
    const minutes = duration % 60;
    return `${hoursCompleted >= 1 ? (Math.floor(hoursCompleted) + 'h') : ''} ${minutes > 0 ? (minutes + 'min') : ''}`;
}
test('component renders with proper all of the data visible', () => {
    render(<MovieDetails {...movieDetailsTest}/>);
    const image = screen.getByAltText((movieDetailsTest.name + ' poster'));
    const title = screen.getByText(movieDetailsTest.name);
    const rating = screen.getByText(movieDetailsTest.rating.toString());
    const releaseYear = screen.getByText(movieDetailsTest.releaseYear.toString());
    const duration = screen.getByText(getDurationTime(movieDetailsTest.duration));
    const description = screen.getByText(movieDetailsTest.description);
    expect(image.getAttribute('src')).toBe(movieDetailsTest.imageUrl);
    expect([
        title,
        rating,
        releaseYear,
        duration,
        description
    ]).toBeDefined();
});

