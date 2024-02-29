import {render, screen, cleanup, fireEvent} from "@testing-library/react";

import SearchForm from "./SearchForm";

afterEach(() => {
    cleanup();
});

const initialSearchQuery = 'search something!';
test('render SearchForm with value equal to initial value passed in props', () => {
    render(<SearchForm initialSearchQuery={initialSearchQuery}/>);
    const searchFormInput = screen.getByTestId('search-form-input');
    expect(searchFormInput).toHaveAttribute('value', initialSearchQuery);
});

test('after typing to the input and clicking submit button onChange prop is called with query value', () => {
    const onSearch = jest.fn();
    render(<SearchForm  onSearch={onSearch} />);
    const searchFormSubmit = screen.getByTestId('search-form-submit');
    const searchFormInput = screen.getByTestId('search-form-input');
    fireEvent.input(searchFormInput, { target: { value: initialSearchQuery }});
    fireEvent.click(searchFormSubmit);
    expect(onSearch).toHaveBeenCalledWith(initialSearchQuery);
});

test('after typing to the input and pressing enter, onChange prop is called with value', () => {
    const onSearch = jest.fn();
    render(<SearchForm  onSearch={onSearch} />);
    const searchFormInput = screen.getByTestId('search-form-input');
    fireEvent.input(searchFormInput, { target: { value: initialSearchQuery }});
    searchFormInput.focus();
    fireEvent.submit(screen.getByTestId('search-form'));
    expect(onSearch).toHaveBeenCalledWith(initialSearchQuery);
})
