import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox/Checkbox';

import './CheckboxGroup.scss';

const CheckboxGroup = (props) => {
    const { changed, id, checkboxes, showTitle, title, type } = props;

    if (!checkboxes) return false;

    const checkboxOptions = checkboxes.map(checkbox => {
        const { checked, key, label, value } = checkbox;
        return <Checkbox
            controlIdentifier={key}
            key={key}
            name={id}
            label={label}
            type={type}
            value={value}
            checked={checked}
            changed={changed} />
    });

    return (
        <fieldset className='checkbox-group'>
            {showTitle ? <h2>{title}</h2> : null }
            {checkboxOptions}
        </fieldset>
    );
};

CheckboxGroup.propTypes = {
    changed: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    checkboxes: PropTypes.arrayOf(
        PropTypes.shape({
            checked: PropTypes.bool.isRequired,
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default CheckboxGroup;