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
            <div>
                {React.createElement("div", null, this.state.value)}
                {
                    React.createElement('button', {
                        onClick: () => this.handleChange(this.state.value - 1)
                    },
                    ['decrement'])
                }
                {
                    React.createElement('button', {
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
    onValueChange: PropTypes.func
};

Counter.defaultProps = {
    initialValue: 0,
};

export default Counter;
