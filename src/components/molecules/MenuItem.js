/* eslint-disable react/prop-types */

import React from 'react';
import Text from '../atoms/Text';

const MenuItem = ({ textItem }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Text variant="h1">{textItem}</Text>
        </div>
    );
};

export default MenuItem;
