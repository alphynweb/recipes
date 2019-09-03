import React from 'react';

import './Select.scss';

const Select = (props) => {
    const { changed, disabled, id, key, name, options } = props;

    const jsxOptionsBuffer = [];

    options.forEach(option => {
        const { disabled, key, label, value, selected } = option;

        jsxOptionsBuffer.push(
            <option
                key={key}
                value={value}
                selected={selected}
                disabled={disabled}>{label}</option>
        );
    });

    const selectWrapperClass = ['select-wrapper', disabled ? 'disabled' : null].join(' ');

    return (
        <div className={selectWrapperClass}>
            <span className='select-arrow'></span>
            <select
                key={key}
                id={id}
                name={name}
                disabled={disabled}
                onChange={changed}>
                {jsxOptionsBuffer}
            </select>
        </div>
    );
};

export default Select;