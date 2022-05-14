import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, variant, ...otherProps }) => {
    return (
        <Typography variant={variant} {...otherProps}>
            {children}
        </Typography>
    );
};

// Especifica los valores por defecto de props:
Text.defaultProps = {
    variant: 'body1'
};

Text.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'body1'])
};
export default Text;
