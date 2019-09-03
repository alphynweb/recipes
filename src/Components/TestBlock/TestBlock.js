import React from 'react';

import './TestBlock.scss';

const TestBlock = (props) => {

    let styles = ['block'];

    switch (props.show) {
        case 'entering':
            styles.push('entering');
            break;
        case 'entered':
            styles.push('entered');
            break;
        case 'exiting':
            styles.push('exiting');
            break;
    };

    return (
        <div className={styles.join(' ')}>
            {props.show}
        </div>
    );
};

export default TestBlock;