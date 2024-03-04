import React from 'react';
import PropTypes from 'prop-types';
import './SortControl.scss';
import Select from "react-dropdown-select";


class SortControl extends React.Component {
    handleSelect = (option) => {
        this.props.setCurrentSort(option);
    }
    render() {
        return (
            <div className="SortControl__wrapper">
                <span className="SortControl__text" data-testId="sort-control-text">sort by</span>
                <Select searchable={false} className="SortControl__select" values={[this.props.currentSort ]} options={this.props.options} onChange={this.handleSelect}/>
            </div>
        )
    }
}

SortControl.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    currentSort: PropTypes.object | null,
    setCurrentSort: PropTypes.func,
};

SortControl.defaultProps = {};

export default SortControl;
