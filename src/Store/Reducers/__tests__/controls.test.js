import reducer from '../controls';
import { initialState } from '../controls';

import * as actionTypes from '../../Actions/actiontypes';

describe('Controls Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual({
            ...initialState
        });
    });

    it('should handle update textInput Control', () => {
        const updateControlAction = {
            type: actionTypes.UPDATE_CONTROL,
            controlType: "text",
            controlIdentifier: 'control',
            value: 'value1'
        };

        const stateToTest = {
            control: {
                value: "value"
            }
        };

        const stateToExpect = {
            control: {
                value: "value1"
            }
        };

        expect(reducer(stateToTest, updateControlAction)).toEqual(stateToExpect);
    });

    it('should update value of textInputGroup groupItem control', () => {
        const updateControlAction = {
            type: actionTypes.UPDATE_CONTROL,
            controlType: "textInputGroup",
            controlParent: "controlParent",
            controlIdentifier: "control1",
            value: "value1"
        };

        const stateToTest = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "value"
                    },
                    {
                        key: "control2",
                        value: "value2"
                    }
                ]
            }
        };

        const stateToExpect = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "value1"
                    },
                    {
                        key: "control2",
                        value: "value2"
                    }
                ]
            }
        };

        expect(reducer(stateToTest, updateControlAction)).toEqual(stateToExpect);
    });

    it('should update checkboxGroup groupItem control from unchecked to checked', () => {
        const updateControlAction = {
            type: actionTypes.UPDATE_CONTROL,
            controlType: "checkboxGroup",
            controlParent: "controlParent",
            controlIdentifier: "control1",
        };

        const stateToTest = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "control1",
                        label: "control1",
                        checked: false
                    },
                    {
                        key: "control2",
                        value: "control2",
                        label: "control2",
                        checked: false
                    },
                ]
            }
        };

        const stateToExpect = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "control1",
                        label: "control1",
                        checked: true
                    },
                    {
                        key: "control2",
                        value: "control2",
                        label: "control2",
                        checked: false
                    },
                ]
            }
        };

        expect(reducer(stateToTest, updateControlAction)).toEqual(stateToExpect);
    });

    it('should update checkboxGroup groupItem control from checked to unchecked', () => {
        const updateControlAction = {
            type: actionTypes.UPDATE_CONTROL,
            controlType: "checkboxGroup",
            controlParent: "controlParent",
            controlIdentifier: "control1",
        };

        const stateToTest = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "control1",
                        label: "control1",
                        checked: true
                    },
                    {
                        key: "control2",
                        value: "control2",
                        label: "control2",
                        checked: false
                    },
                ]
            }
        };

        const stateToExpect = {
            controlParent: {
                groupItems: [
                    {
                        key: "control1",
                        value: "control1",
                        label: "control1",
                        checked: false
                    },
                    {
                        key: "control2",
                        value: "control2",
                        label: "control2",
                        checked: false
                    },
                ]
            }
        };

        expect(reducer(stateToTest, updateControlAction)).toEqual(stateToExpect);
    });

    it('should handle addGroupItem for textInputGroup', () => {
        const addGroupItemAction = {
            type: actionTypes.ADD_GROUP_ITEM,
            controlParent: "groupParent"
        };

        const stateToTest = {
            groupParent: {
                groupItems: [
                    {
                        key: "groupParent_1",
                        id: "groupParent_1"
                    }
                ]
            }
        };

        const stateToExpect = {
            groupParent: {
                groupItems: [
                    {
                        key: "groupParent_1",
                        id: "groupParent_1"
                    },
                    {
                        key: "groupParent_2",
                        id: "groupParent_2"
                    }
                ]
            }
        };

        expect(reducer(stateToTest, addGroupItemAction)).toEqual(stateToExpect);
    });

    it('should handle deleteGroupItem', () => {
        const deleteGroupItem = {
            type: actionTypes.DELETE_GROUP_ITEM,
            controlIdentifier: 'Item1',
            controlParent: 'groupParent'
        };

        expect(reducer({
            groupParent: {
                groupItems: [
                    {
                        id: 'Item1'
                    },
                    {
                        id: 'Item2'
                    }
                ]
            }
        }, deleteGroupItem)).toEqual({
            groupParent: {
                groupItems: [
                    {
                        id: 'Item2'
                    }
                ]
            }
        });
    });
});