import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UIControls/Button/Button';
import CheckboxGroup from '../UIControls/CheckboxGroup/CheckboxGroup';
import Select from '../UIControls/Select/Select';
import TextInput from '../UIControls/TextInput/TextInput';
import TextInputGroup from '../UIControls/TextInputGroup/TextInputGroup';

import './UIControls.scss';

const UIControls = (props) => {
    const {
        controlsConfig,
        onAddGroupItem,
        onDeleteGroupItem,
        onControlClicked,
        onToggleControlOpen
    } = props;
    const controlsArray = [];

    if (!controlsConfig) return false;

    for (let key in controlsConfig) {
        controlsArray.push(
            {
                id: key,
                controlConfig: controlsConfig[key]
            }
        )
    };

    const controls = controlsArray.map(control => {
        const {
            id,
            controlConfig
        } = control;
        const {
            key,
            refId,
            text,
            type,
            title,
            name,
            groupItems,
            maxNoGroupItems,
            addGroupItemButton,
            deleteGroupItems,
            placeholder,
            options,
            value,
            touched,
            validationRequired,
            closed
        } = controlConfig;

        let controlType;

        switch (type) {
            case 'select':
                controlType = <Select
                    controlIdentifier={id}
                    key={id}
                    id={id}
                    name={name}
                    options={options}
                    touched={touched}
                    type={type}
                    changed={onControlClicked} />
                break;
            case "text":
                controlType = <TextInput
                    controlIdentifier={id}
                    key={id}
                    id={id}
                    refId={refId}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    touched={touched}
                    type={type}
                    validationRequired={validationRequired}
                    changed={onControlClicked} />;
                break;
            case "textInputGroup":
                controlType = <TextInputGroup
                    key={key}
                    id={id}
                    refId={refId}
                    name={name}
                    title={title}
                    type={type}
                    textInputs={groupItems}
                    maxNoTextInputs={maxNoGroupItems}
                    addGroupItemButton={addGroupItemButton}
                    deleteGroupItems={deleteGroupItems}
                    controlParent={id}
                    onAddGroupItem={onAddGroupItem}
                    onDeleteGroupItem={onDeleteGroupItem}
                    changed={onControlClicked} />;
                break;
            case "button":
                controlType = <Button
                    key={id}
                    id={id}
                    refId={refId}
                    name={name}
                    text={text}
                    type={type} />;
                break;
            case "checkboxGroup":
                controlType = <CheckboxGroup
                    key={id}
                    id={id}
                    refId={refId}
                    name={name}
                    title={title}
                    checkboxes={groupItems}
                    type={type}
                    touched={touched}
                    changed={onControlClicked} />;
                break;
            default:
                break;
        };

        const controlStyle = ['control-section', closed ? 'closed' : null].join(' ');

        return (
            <div className={controlStyle} key={id}>
                <h3 onClick={() => onToggleControlOpen(id)}>{title}</h3>
                <div className='control-section-content'>
                    {controlType}
                </div>
            </div>
        );
    });

    return (
        <>
            {controls}
        </>
    )
};

UIControls.propTypes = {
    controlsConfig: PropTypes.object.isRequired,
    onAddGroupItem: PropTypes.func.isRequired,
    onDeleteGroupItem: PropTypes.func.isRequired,
    onControlClicked: PropTypes.func.isRequired
};

export default UIControls;