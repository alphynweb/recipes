import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
    const { disabled, id, name, text, clicked, refId } = props;

    return (
        <button
            id={id}
            ref={refId}
            name={name}
            onClick={clicked}
            disabled={disabled}>

            {text}

        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clicked: PropTypes.func
};

export default Button;