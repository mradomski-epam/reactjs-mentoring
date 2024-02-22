import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

class Counter extends React.Component {
    handleChange = (value) => {
        this.props.onValueChange(value)
    }
    render() {
        return (
            <div>
                {React.createElement("div", null, this.props.initialValue)}
                <button onClick={() => this.handleChange(this.props.initialValue - 1)}>decrement</button>
                <button onClick={() => this.handleChange(this.props.initialValue + 1)}>increment</button>
            </div>
        )
    }
}

Counter.propTypes = {
    initialValue: PropTypes.number
};

Counter.defaultProps = {
    initialValue: 0
};

export default Counter;
