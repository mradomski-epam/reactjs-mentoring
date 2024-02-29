import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import Counter from "./Counter";

const initialValue = 0;

afterEach(() => {
    cleanup();
})

test('should render Counter element with proper initial value', () => {
    render(<Counter initialValue={initialValue}/>);
    const initialValueElement = screen.getByTestId('counter-value');
    expect(initialValueElement).toHaveTextContent(initialValue.toString());
});

test('incrementing Counter increases value in it', () => {
    render(<Counter initialValue={initialValue}/>);
    const valueElement = screen.getByTestId('counter-value');
    const incrementElement = screen.getByTestId('counter-increment');
    fireEvent.click(incrementElement);
    expect(valueElement).toHaveTextContent((initialValue + 1).toString());
});

test('decrementing Counter decrements value in it', () => {
    render(<Counter initialValue={initialValue}/>);
    const valueElement = screen.getByTestId('counter-value');
    const incrementElement = screen.getByTestId('counter-decrement');
    fireEvent.click(incrementElement);
    expect(valueElement).toHaveTextContent((initialValue - 1).toString());
});
