import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const Backdrop = (props) => {
    const { clicked, show } = props;

    const backdrop = show ?
        (
            <div className="backdrop" onClick={clicked}>
                {props.children}
            </div>
        ) :
        null

    return (
        backdrop
    );
};

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired
};

export default Backdrop;