import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { Layout } from '../Layout';
import Modal from '../../../Components/UI/Modal/Modal';

jest.mock('../../../Containers/Container/Container', () => 'Container'); // Mock element due to Container being connected to redux
jest.mock('../../../Containers/TopBar/TopBar', () => 'TopBar');
jest.mock('../../../Containers/UIControlsSection/UIControlsSection', () => 'UIControlsSection');

import { controlsConfigMock } from '../../../config/controlsMockTemplate';
import { UIControlsSection } from '../../../Containers/UIControlsSection/UIControlsSection';

// import MockTransitionGroup from '../../../__mocks__/react-transition-group';
// jest.mock('react-transition-group', () => {
//     return {
//         CSSTransition: jest.fn(() => (<p>Hello</p>))
//     };
// });

jest.mock('react-transition-group', () => {
    const mockCSSTransition = jest.fn(() => null);
    return {
        CSSTransition: mockCSSTransition
    };
});

// jest.mock('react-transition-group', () => ({
//     CSSTransition: (props) => {
//         // props.onExited() // you can call it asynchronously too, if you wrap it in a timeout
//         return <div>
//             {props.in ? props.children() : null}
//         </div>
//     }
// }))

// import * as Transitions from 'react-transition-group';
// jest.mock('react-transition-group');

// jest.mock('react-transition-group', () => {
//     return {
//         CSSTransition: jest.fn(() => null)
//     };
// });


configure({
    adapter: new Adapter()
});

describe('<Layout />', () => {
    let wrapper;

    const props = {
        // Controls
        controlsConfig: controlsConfigMock,
        ingredientsInfo: [
            {
                value: 'bacon'
            },
            {
                value: 'cheese'
            }
        ],
        excludedIngredientsInfo: [],
        healthLabelsInfo: [
            {
                value: "peanut-free",
                checked: true
            },
            {

                value: "vegetarian",
                checked: true
            },
            {
                value: 'alcohol-free',
                checked: false
            }
        ],
        dietLablesInfo: [],
        showModal: false,
        onFetchRecipes: jest.fn(),
        onHideModal: jest.fn(),
        onToggleControls: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<Layout {...props} />);
    });

    it('should match the snapshot if there are ingredients', () => {
        const tree = renderer.create(<Layout {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should match the snapshot if there are no ingredients', () => {
        wrapper.setProps({
            ingredientsInfo: [],
            healthLabelsInfo: []
        });

        const tree = renderer.create(<Layout {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should not render a modal when showModal = false', () => {
        wrapper.setProps({
            showModal: false
        });

        expect(wrapper.find(Modal)).toHaveLength(0);
    });

    it.skip('should render a modal when showModal = true', () => {
        // Transitions.mockResolvedValue('Hello');

        // const mockTransition = jest.spyOn(CSSTransition);
        // expect(CSSTransition).toHaveBeenCalled();
        // CSSTransition.mockImplementation(() => {
        //     return {

        //     };
        // });

        // console.log('Mock CSS Transition', mockReactTransitionGroup.CSSTransition);

        // wrapper.setProps({
        //     showModal: true
        // });

        // console.log("WRAPPER DEBUG (MODAL)", wrapper.debug());
        // expect(wrapper.find(Modal)).toHaveLength(1);

        // expect(mockCSSTransition).toHaveBeenCalled();
        // expect(mockReactTransitionGroup.CSSTransition).toHaveBeenCalled();
        // console.log(mockReactTransitionGroup.CSSTransition.calls);
    });

    it('should render TopBar', () => {
        expect(wrapper.find('TopBar')).toHaveLength(1);
    });

    it('should render UIControlsSection', () => {
        expect(wrapper.find('UIControlsSection')).toHaveLength(1);
    });

    it('should render container', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should trigger handleRecipeSearch method when search button is clicked', () => {
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'handleRecipeSearch');

        instance.forceUpdate();

        const uiControlsSection = wrapper.find('UIControlsSection');

        uiControlsSection.props().onRecipeSearchClicked();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onFetchRecipes with ingredients and health labels when there are some ingredients', () => {
        const mockOnFetchRecipes = jest.fn();

        wrapper.setProps({
            onFetchRecipes: mockOnFetchRecipes
        });

        wrapper.instance().handleRecipeSearch();

        expect(mockOnFetchRecipes).toHaveBeenCalledTimes(1);
        expect(mockOnFetchRecipes).toHaveBeenCalledWith({
            ingredients: ['bacon', 'cheese'],
            excludedIngredients: [],
            healthLabels: ['peanut-free', 'vegetarian'],
            dietLabels: []
        });

    })

    it('should not call onFetchRecipes when there are no ingredients entered', () => {
        const mockonFetchRecipes = jest.fn();

        wrapper.setProps({
            ingredientsInfo: [],
            onFetchRecipes: mockonFetchRecipes
        });

        wrapper.instance().handleRecipeSearch();

        expect(mockonFetchRecipes).not.toHaveBeenCalled();
    });
});
