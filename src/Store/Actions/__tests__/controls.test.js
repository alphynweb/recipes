import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../index';
import * as actionTypes from '../actiontypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Controls actions', () => {
    it('should update a control', () => {
        const expectedAction = {
            type: actionTypes.UPDATE_CONTROL,
            controlType: 'controlType',
            controlIdentifier: 'controlIdentifier',
            controlParent: 'controlParent',
            value: 'value'
        };
        expect(actions.updateControl({ target: { value: 'value' } }, 'controlType', 'controlIdentifier', 'controlParent')).toEqual(expectedAction);
    });

    it('should delete a control group item', () => {
        const controlIdentifier = 'controlIdentifier';
        const controlParent = 'controlParent';

        const expectedAction = {
            type: actionTypes.DELETE_GROUP_ITEM,
            controlIdentifier: controlIdentifier,
            controlParent: controlParent
        };
        expect(actions.deleteGroupItem(controlIdentifier, controlParent)).toEqual(expectedAction);
    });

    it('should add a control group item', () => {
        const controlParent = 'controlParent';

        const expectedAction = {
            type: actionTypes.ADD_GROUP_ITEM,
            controlParent: controlParent
        };

        expect(actions.addGroupItem(controlParent)).toEqual(expectedAction);
    });
});

describe('Controls async actions', () => {
    it('should create an action to set the state of the control and then filter the recipes when a control is clicked', () => {
        const store = mockStore({});

        const clickEvent = {
            target: {
                value: "value"
            }
        }

        const expectedActions = [
            {
                type: actionTypes.UPDATE_CONTROL,
                controlType: 'controlType',
                controlIdentifier: 'controlIdentifier',
                controlParent: 'controlParent',
                value: 'value'
            },
            {
                type: actionTypes.FILTER_RECIPES
            }
        ];

        store.dispatch(actions.controlClicked(clickEvent, 'controlType', 'controlIdentifier', 'controlParent'));
        expect(store.getActions()).toMatchObject(expectedActions);
    });
});