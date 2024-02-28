import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

class Counter extends React.Component {
    state = { initialValue: 0 };
    handleChange = (value) => {
        this.setState({ initialValue: value })
    }
    render() {
        return (
            <div>
                {React.createElement("div", null, this.state.initialValue)}
                {
                    React.createElement('button', {
                        onClick: () => this.handleChange(this.state.initialValue - 1)
                    },
                    ['decrement'])
                }
                {
                    React.createElement('button', {
                            onClick: () => this.handleChange(this.state.initialValue + 1)
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
