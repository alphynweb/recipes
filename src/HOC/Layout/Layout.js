import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actions from '../../Store/Actions/index';
import { extractIngredients, extractLabels } from '../../utils/utils';

import './Layout.scss';

import TopBar from '../../Containers/TopBar/TopBar';
import UIControlsSection from '../../Containers/UIControlsSection/UIControlsSection';
import Container from '../../Containers/Container/Container';
import Modal from '../../Components/UI/Modal/Modal';

export class Layout extends Component {
    handleRecipeSearch = () => {
        const { ingredientsInfo, excludedIngredientsInfo, dietLabelsInfo, healthLabelsInfo, onFetchRecipes, onToggleControls } = this.props;

        const ingredients = extractIngredients(ingredientsInfo);

        const excludedIngredients = extractIngredients(excludedIngredientsInfo);

        const healthLabels = extractLabels(healthLabelsInfo);

        const dietLabels = extractLabels(dietLabelsInfo);

        const searchParams = {
            ingredients,
            excludedIngredients,
            dietLabels,
            healthLabels
        };

        if (ingredients.length) {
            onToggleControls();
            onFetchRecipes(searchParams);
        };
    };

    render() {
        // Modal
        const { modalContent, showModal, onHideModal } = this.props;

        return (
            <>
                <TopBar />

                <div className='wrapper'>
                    <CSSTransition
                        in={showModal}
                        timeout={300}
                        unmountOnExit
                        appear
                        classNames='modal'>
                        {state => (
                            <Modal
                                show={state}
                                hide={onHideModal}
                                content={modalContent} />
                        )}
                    </CSSTransition>

                    <UIControlsSection
                        onRecipeSearchClicked={this.handleRecipeSearch} />

                    <section className='recipe-results'>
                        <Container />
                    </section>
                </div>
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        // Controls
        controlsConfig: state.controls,
        ingredientsInfo: state.controls.ingredients.groupItems,
        excludedIngredientsInfo: state.controls.excludedIngredients.groupItems,
        healthLabelsInfo: state.controls.healthLabels.groupItems,
        dietLabelsInfo: state.controls.dietLabels.groupItems,
        
        // Modal
        showModal: state.modal.showModal,
        modalContent: state.modal.modalContent,

        // Recipes
        fetchingRecipes: state.recipes.fetchingRecipes,
        recipesFetched: state.recipes.recipesFetched,

        // Top bar
        showControls: state.topBar.showControls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // RECIPES
        // Fetch recipes
        onFetchRecipes: (searchParams) =>
            dispatch(actions.fetchRecipes(searchParams)),

        // MODAL
        // Hide modal
        onHideModal: () => dispatch(actions.hideModal()),

        // TOPBAR
        onToggleControls: () => dispatch(actions.toggleControls())
    };
};

Layout.propTypes = {
    // State
    // controlsConfig: PropTypes.object.isRequired,
    ingredientsInfo: PropTypes.array.isRequired,
    healthLabelsInfo: PropTypes.array.isRequired,
    showModal: PropTypes.bool.isRequired,
    modalContent: PropTypes.object,
    // Dispatch
    onFetchRecipes: PropTypes.func.isRequired,
    // onControlClicked: PropTypes.func.isRequired,
    // onAddGroupItem: PropTypes.func.isRequired,
    // onDeleteGroupItem: PropTypes.func.isRequired,
    // onUpdateControl: PropTypes.func.isRequired,
    onHideModal: PropTypes.func.isRequired 
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);