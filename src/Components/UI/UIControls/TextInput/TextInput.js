import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.scss';

const TextInput = (props) => {
    const {
        controlIdentifier,
        controlParent,
        id,
        name,
        type,
        value,
        placeholder,
        changed,
        deleteGroupItems,
        onDeleteGroupItem
    } = props;

    const label = props.label ?
        <label
            htmlFor={id}>
            {props.label}
        </label> :
        null;

    const deleteGroupItem = deleteGroupItems ?
        <span
            className='delete'
            onClick={() => onDeleteGroupItem(id, controlParent)}>X</span> :
        null;

    return (
        <div className='text-input-holder'>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(event) => changed(event, type, controlIdentifier, controlParent)} />
            {deleteGroupItem}
            {label}
        </div>
    );
};

TextInput.propTypes = {
    controlIdentifier: PropTypes.string.isRequired,
    controlParent: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changed: PropTypes.func.isRequired,
    label: PropTypes.string,
    deleteGroupItems: PropTypes.bool,
    onDeleteGroupItem: PropTypes.func,
};

export default TextInput;