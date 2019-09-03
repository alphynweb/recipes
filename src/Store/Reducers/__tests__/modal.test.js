import reducer from '../modal';

import * as actionTypes from '../../Actions/actiontypes';
import { initialState } from '../controls';

describe('Modal Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            showModal: false,
            modalContent: null
        });
    });

    it('should handle SHOW_MODAL', () => {
        const showModalAction = {
            type: actionTypes.SHOW_MODAL
        };

        expect(reducer({
            ...initialState,
            showModal: false
        }, showModalAction))
            .toEqual({
                ...initialState,
                showModal: true
            });
    });

    it('should handle HIDE_MODAL', () => {
        const hideModalAction = {
            type: actionTypes.HIDE_MODAL
        };

        expect(reducer({
            ...initialState,
            showModal: true
        }, hideModalAction))
            .toEqual({
                ...initialState,
                showModal: false
            });
    });

    it('should handle SET_MODAL_CONTENT', () => {
        const modalContent = "Modal content example";

        const setModalContentAction = {
            type: actionTypes.SET_MODAL_CONTENT,
            modalContent: modalContent
        };

        expect(reducer(initialState, setModalContentAction))
        .toEqual({
            ...initialState,
            modalContent: modalContent
        });
    });
});