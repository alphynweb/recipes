import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const Modal = (props) => {
    const { content, hide, show } = props;

    const modal = show ?
        <>
            <div className='modal-container'>
                <Backdrop show={show} clicked={hide} />
                <div className='modal'>
                    <span className='close' onClick={hide}>X</span>
                    {content}
                </div>
            </div>
        </> :
        null;

    return (
        modal
    );
};

Modal.propTypes = {
    content: PropTypes.object,
    hide: PropTypes.func.isRequired,
    show: PropTypes.string.isRequired
};

export default Modal;