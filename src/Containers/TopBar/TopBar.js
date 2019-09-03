import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from '../../Components/UI/UIControls/Select/Select';

import * as actions from '../../Store/Actions/index';

import './TopBar.scss';

export class TopBar extends Component {
    state = {
        sortOptions: null
    };

    handleToggleClicked = () => {
        const { onToggleControls } = this.props;
        onToggleControls();
    };

    handleSortOptionsChanged = (event) => {
        const { onSortRecipes, recipesInfo } = this.props;

        if (!recipesInfo) return;

        this.setState({
            sortOptions: event.target.value
        }, () => {
            onSortRecipes(this.state.sortOptions);
        });
    };

    render() {
        const {recipesInfo} = this.props;

        let isSelectDisabled = true;

        if (recipesInfo && recipesInfo.length) {
            isSelectDisabled = false;
        };

        const sortOptions = [
            {
                key: 'sortOptions_0',
                disabled: true,
                label: 'Sort by (Please select)',
                selected: true,
                value: ''
            },
            {
                key: 'sortOptions_1',
                disabled: false,
                label: 'Calories (Low to High)',
                selected: false,
                value: 'calories-low-to-high'
            },
            {
                key: 'sortOptions_2',
                disabled: false,
                label: 'Calories (High to Low)',
                selected: false,
                value: 'calories-high-to-low'
            }
        ];

        return (
            <div className='top-bar' >
                <div id='toggleControls' className='toggle' onClick={this.handleToggleClicked}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>

                <Select
                    className='sort-options'
                    disabled={isSelectDisabled}
                    id='sortOptions'
                    name='sortOptions'
                    options={sortOptions}
                    title='Sort Options'
                    selected={this.sortOptions}
                    changed={this.handleSortOptionsChanged}
                />
            </ div>
        );
    };
};

const mapStateToProps = state => {
    return {
        // Recipes
        recipesInfo: state.recipes.recipesInfo,
        // Controls
        showControls: state.topBar.showControls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Recipes
        onSortRecipes: (sortType) => dispatch(actions.sortRecipes(sortType)),
        // Controls
        onToggleControls: () => dispatch(actions.toggleControls())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);