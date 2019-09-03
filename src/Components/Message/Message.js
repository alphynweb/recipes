import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

const Message = (props) => {
    const { messageType } = props;

    let jsxBuffer;

    switch (messageType) {
        case 'No recipes found':
            jsxBuffer = (
                <div className='no-recipes message'>
                    <h1>No Recipes Found</h1>
                    <p>Please perform a new search</p>
                </div>
            );
            break;
        case 'Add ingredient':
            jsxBuffer = (
                <div className='message'>
                    <p>Please add at least one ingredient</p>
                </div>
            );
            break;
        default:
            jsxBuffer = null;
            break;
    };

    return jsxBuffer;
};

Message.propTypes = {
    messageType: PropTypes.string.isRequired
};

export default Message;