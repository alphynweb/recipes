import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../Store/Actions/index';

import Recipes from '../../Components/Recipes/Recipes';
import ModalRecipe from '../../Components/Recipes/ModalRecipe/ModalRecipe';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Message from '../../Components/Message/Message';

export class Container extends Component {
    handleRecipeClicked = (recipeInfo) => {
        const { onSetModalContent, onShowModal } = this.props;
        onSetModalContent(
            <ModalRecipe
                recipeInfo={recipeInfo} />
        );
        onShowModal();
    };

    render() {
        const { fetchingRecipes, recipesInfo, recipesFetched } = this.props;

        const jsxBuffer = recipesFetched && !fetchingRecipes ?
            recipesInfo.length ?
                <Recipes
                    recipesInfo={recipesInfo}
                    onRecipeClicked={(recipeInfo) => this.handleRecipeClicked(recipeInfo)} /> :
                <Message messageType="No recipes found" /> :
            null;


        const spinner = !recipesFetched && fetchingRecipes ?
            <Spinner /> :
            null;


        return (
            <section className="route-section">
                {spinner}
                {jsxBuffer}
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        // Recipes
        fetchingRecipes: state.recipes.fetchingRecipes,
        recipesFetched: state.recipes.recipesFetched,
        recipesInfo: state.recipes.recipesInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Modal
        onSetModalContent: (modalContent) => dispatch(actions.setModalContent(modalContent)),
        onShowModal: () => dispatch(actions.showModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

