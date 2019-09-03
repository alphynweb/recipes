import React from 'react';

import './Checkbox.scss';

const Checkbox = (props) => {
    const {
        controlIdentifier,
        changed,
        id,
        name,
        checked,
        type,
        label
    } = props;

    // const label = props.label ?
    //     <label
    //         htmlFor={props.id}>
    //         {props.label}
    //     </label> :
    //     null;

    return (
        <label className='checkbox-container'>
            {label}
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                key={controlIdentifier}
                onChange={(event) => changed(event, type, controlIdentifier, name)} />
            <span className="checkmark"></span>
        </label>
        // <div className='checkbox-container'>
        //     <input
        //         type="checkbox"
        //         id={id}
        //         name={name}
        //         checked={checked}
        //         key={controlIdentifier}
        //         onChange={(event) => changed(event, type, controlIdentifier, name)} />
        //     {label}
        // </div>
    );
};

export default Checkbox;