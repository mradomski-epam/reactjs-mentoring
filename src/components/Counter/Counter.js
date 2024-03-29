import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

class Counter extends React.Component {
    state = { value: this.props.initialValue };
    handleChange = (value) => {
        this.setState({ value })
    }
    render() {
        return (
            <div data-testid="counter">
                {
                    React.createElement('div', {
                    'data-testid': 'counter-value'
                    }, this.state.value)}
                {
                    React.createElement('button', {
                        'data-testid': 'counter-decrement',
                        onClick: () => this.handleChange(this.state.value - 1)
                    },
                    ['decrement'])
                }
                {
                    React.createElement('button', {
                        'data-testid': 'counter-increment',
                        onClick: () => this.handleChange(this.state.value + 1)
                    },
                    ['increment'])
                }
            </div>
        )
    }
}

Counter.propTypes = {
    initialValue: PropTypes.number,
};

Counter.defaultProps = {
    initialValue: 0,
};

export default Counter;
