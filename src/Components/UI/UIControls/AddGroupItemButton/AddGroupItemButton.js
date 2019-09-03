import React from 'react';
import PropTypes from 'prop-types';

const AddGroupItemButton = (props) => {
    const { controlParent, disabled, id, name, text, clicked } = props;

    return (
        <button
            id={id}
            name={name}
            onClick={() => clicked(controlParent)}
            disabled={disabled}>

            {text}
        </button>
    );
};

AddGroupItemButton.propTypes = {
    controlParent: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired
};

export default AddGroupItemButton;