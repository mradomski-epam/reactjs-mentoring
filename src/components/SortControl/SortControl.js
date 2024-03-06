import React from 'react';
import PropTypes from 'prop-types';
import './SortControl.scss';
import Select from "react-dropdown-select";


class SortControl extends React.Component {
    state = {
        sortByOptions: [
            {
                label: 'Release Date', value: 'releaseDate',
            },
            {
                label: 'Title', value: 'title',
            }
        ]
    }

    handleSelect = (option) => {
        this.props.setCurrentSort(option);
    }
    render() {
        return (
            <div className="SortControl__wrapper">
                <span className="SortControl__text" data-testid="select">sort by</span>
                <Select searchable={false} className="SortControl__select" data-testid="sort-control-select" values={[this.props.currentSort ]} options={this.state.sortByOptions} onChange={this.handleSelect}/>
            </div>
        )
    }
}

SortControl.propTypes = {
    currentSort: PropTypes.object | null,
    setCurrentSort: PropTypes.func,
};

SortControl.defaultProps = {};

export default SortControl;
