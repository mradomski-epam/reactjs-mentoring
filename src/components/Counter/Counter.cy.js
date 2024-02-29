import React from 'react'
import Counter from './Counter'

const initialValue = 1;

describe('<Counter />', () => {
  it('renders with initial value', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter initialValue={initialValue}/>);
    cy.contains(initialValue.toString());
  });

  it('increments value after clicking increment', () => {
    cy.mount(<Counter initialValue={initialValue}/>);
    cy.get('[data-testid="counter-increment"]').click();
    cy.contains((initialValue + 1).toString());
  });

  it('decrements value after clicking decrement', () => {
    cy.mount(<Counter initialValue={initialValue}/>);
    cy.get('[data-testid="counter-decrement"]').click();
    cy.contains((initialValue - 1).toString());
  })
})