import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../Store/Actions/index';
import { extractIngredients } from '../../utils/utils';

import UIControls from '../../Components/UI/UIControls/UIControls';
import Button from '../../Components/UI/UIControls/Button/Button';
import Message from '../../Components/Message/Message';

import '../../Components/UI/UIControls/UIControls.scss';
import '../../Components/UI/UIControls/Button/Button.scss';
import './UIControlsSection.scss';

export class UIControlsSection extends Component {
    state = {
        show: true,
        canSearch: false,
    };

    handleToggleClicked = () => {
        this.setState(prevState => ({
            ...this.state,
            show: !prevState.show
        }));
    };

    handleAddGroupItem = (controlParent) => {
        const { onAddGroupItem } = this.props;
        onAddGroupItem(controlParent);
    };

    handleDeleteGroupItem = (controlIdentifier, controlParent) => {
        const { onDeleteGroupItem } = this.props;
        onDeleteGroupItem(controlIdentifier, controlParent);
    };

    componentWillReceiveProps(nextProps) {
        // If there are no ingredients then don't enable search button
        const ingredients = extractIngredients(nextProps.ingredientsInfo);
        if (!ingredients.length) {
            this.setState({
                canSearch: false
            });
            return;
        };

        // If recipe search has finished then set search button to disabled
        if (!nextProps.fetchingRecipes && nextProps.recipesFetched) {
            this.setState({
                canSearch: false
            });
        };

        // In which case, ok to search
        this.setState({
            canSearch: true
        });
    };

    render() {
        const { controlsConfig, onControlClicked, onToggleControlOpen, ingredientsInfo, onRecipeSearchClicked, showControls } = this.props;

        const ingredients = extractIngredients(ingredientsInfo);

        const addIngredientMessage = !ingredients.length ? <Message messageType='Add ingredient' /> : null;

        const uiControlsClasses = ['ui-controls', !showControls ? 'hide' : null].join(' ');

        return <section className={uiControlsClasses}>
            <Button
                id='searchButton'
                name='searchButton'
                text='SEARCH'
                disabled={!this.state.canSearch}
                clicked={onRecipeSearchClicked} />
            <UIControls
                onAddGroupItem={this.handleAddGroupItem}
                onDeleteGroupItem={this.handleDeleteGroupItem}
                controlsConfig={controlsConfig}
                onControlClicked={onControlClicked}
                onToggleControlOpen={onToggleControlOpen} />
            {addIngredientMessage}
        </section>

    };
};

const mapStateToProps = state => {
    return {
        // Controls
        controlsConfig: state.controls,
        ingredientsInfo: state.controls.ingredients.groupItems,
        healthLabelsInfo: state.controls.healthLabels.groupItems,
        // TopBar
        showControls: state.topBar.showControls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // CONTROLS
        // Control clicked
        onControlClicked: (event, controlType, controlIdentifier, controlParent) =>
            dispatch(actions.controlClicked(event, controlType, controlIdentifier, controlParent)),

        // Add control group item
        onAddGroupItem: (controlParent) =>
            dispatch(actions.addGroupItem(controlParent)),

        // Delete control group item
        onDeleteGroupItem: (controlIdentifier, controlParent) =>
            dispatch(actions.deleteGroupItem(controlIdentifier, controlParent)),

        // Update control
        onUpdateControl: (event, controlType, controlIdentifier, controlParent, controlOptionsName) =>
            dispatch(actions.updateControl(event, controlType, controlIdentifier, controlParent, controlOptionsName)),

        // Toggle control open
        onToggleControlOpen: (controlIdentifier) =>
            dispatch(actions.toggleControlOpen(controlIdentifier))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIControlsSection);