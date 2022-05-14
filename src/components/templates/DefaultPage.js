import React from 'react';
import { Box, Container } from '@mui/material';

const DefaultPage = ({ children }) => {
    return (
        <Container maxWidth="lg">
            <Box py={4}>{children}</Box>
        </Container>
    );
};

export default DefaultPage;
