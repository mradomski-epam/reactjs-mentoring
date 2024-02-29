import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import GenreList from "./GenreList";

afterEach(() => {
    cleanup();
});

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
    const genreListElements = screen.queryAllByTestId(/genre-list-[1-5]/);
    expect(genreListElements.length).toBe(genreList.length);
});

test('component highlight selected genre passed in props', () => {
    const selectedIndex = 1;
    render(<GenreList genreList={genreList} currentGenre={genreList[selectedIndex].name}/>);
    const selectedGenreElement = screen.getByTestId('genre-list-' + genreList[selectedIndex].id);
    expect(selectedGenreElement).toHaveClass('GenreSelect__list__item--selected');
});

test('component calls onChange callback and passes correct genre in arguments', () => {
    const selectedIndex = 1;
    const onSelect = jest.fn();
    render(<GenreList genreList={genreList} currentGenre={genreList[0].name} onSelect={onSelect}/>);
    const selectedGenreElement = screen.getByTestId('genre-list-'+ genreList[selectedIndex].id);
    fireEvent.click(selectedGenreElement);
    expect(onSelect).toHaveBeenCalledWith(genreList[selectedIndex].name);
});
