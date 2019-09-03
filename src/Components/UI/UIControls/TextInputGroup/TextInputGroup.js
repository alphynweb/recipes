import React from 'react';
import PropTypes from 'prop-types';

import AddGroupItemButton from '../AddGroupItemButton/AddGroupItemButton';
import TextInput from '../TextInput/TextInput';

import './TextInputGroup.scss';

const TextInputGroup = (props) => {
    const {
        changed,
        controlParent,
        name,
        textInputs,
        maxNoTextInputs,
        addGroupItemButton,
        deleteGroupItems,
        showTitle,
        title,
        type,
        onAddGroupItem,
        onDeleteGroupItem
    } = props;

    if (!textInputs) return false;

    const textInputGroup = textInputs.map(textInput => {
        const { id, key, value, placeholder } = textInput;
        return <TextInput
            controlIdentifier={key}
            controlParent={controlParent}
            id={id}
            name={name}
            key={key}
            placeholder={placeholder}
            type={type}
            value={value}
            deleteGroupItems={deleteGroupItems}
            onDeleteGroupItem={onDeleteGroupItem}
            changed={changed} />
    });

    let groupItemButton = null;

    if (addGroupItemButton) {
        const currentNoTextInputs = textInputs.length;
        if (currentNoTextInputs < maxNoTextInputs) {
            const { buttonKey, buttonId, buttonName, buttonText, disabled } = addGroupItemButton;
            groupItemButton =
                <AddGroupItemButton
                    key={buttonKey}
                    id={buttonId}
                    name={buttonName}
                    text={buttonText}
                    disabled={disabled}
                    controlParent={controlParent}
                    clicked={onAddGroupItem} />;
        }
    };

    const maxNoTextInputsMessage = maxNoTextInputs ? ' (Max ' + maxNoTextInputs + ')' : null;

    return (
        <fieldset className='text-input-group'>
            {showTitle ? <h2>{title}{maxNoTextInputsMessage}</h2> : null}
            {textInputGroup}
            {groupItemButton}
        </fieldset>
    );
};

TextInputGroup.propTypes = {
    changed: PropTypes.func.isRequired,
    controlParent: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    textInputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired,
    addGroupItemButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    deleteGroupItems: PropTypes.bool.isRequired,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    onAddGroupItem: PropTypes.func.isRequired,
    onDeleteGroupItem: PropTypes.func.isRequired
};

export default TextInputGroup;