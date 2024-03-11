import {render, screen, fireEvent} from "@testing-library/react";
import GenreList from "./GenreList";

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

test('component renders all genres passed in props', () => {
    render(<GenreList genreList={genreList}/>);
    genreList.forEach((genre) => {
        expect(screen.getByText(genre.name)).toBeInTheDocument();
    });
});

test('component highlight selected genre passed in props', () => {
    const selectedIndex = 1;
    render(<GenreList genreList={genreList} currentGenre={genreList[selectedIndex].name}/>);
    expect(screen.getByRole('tab', { selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(genreList[selectedIndex].name);
});

test('component calls onChange callback and passes correct genre in arguments', () => {
    const selectedIndex = 1;
    const onSelect = jest.fn();
    render(<GenreList genreList={genreList} currentGenre={genreList[0].name} onSelect={onSelect}/>);
    const selectedGenreElement = screen.getByRole('tab', { name: genreList[selectedIndex].name });
    fireEvent.click(selectedGenreElement);
    expect(onSelect).toHaveBeenCalledWith(genreList[selectedIndex].name);
});
