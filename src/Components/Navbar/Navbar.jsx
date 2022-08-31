import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '24px', py: 3 }}>
                <IconButton sx={{ padding: 0, zIndex: 100, minWidth: 'unset', ml: 2, color: 'unset' }}>
                    <ChevronLeftIcon sx={{ width: '24px', height: '24px' }} />
                </IconButton>
                <Typography position={'absolute'} variant="h6" mx={'auto'} my={'auto'} textAlign={"center"} sx={{ width: '100%' }}>
                    Tujuan
                </Typography>
                <IconButton sx={{ padding: 0, zIndex: 100, minWidth: 'unset', mr: 2, color: 'unset' }}>
                    <MoreVertIcon sx={{ width: '24px', height: '24px' }} />
                </IconButton>
            </Box>
        </>
    )
}

export default Navbar