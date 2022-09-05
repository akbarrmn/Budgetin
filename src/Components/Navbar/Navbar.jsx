import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ main, caption }) => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '24px', py: 3 }}>
                <IconButton onClick={back} sx={{ padding: 0, zIndex: 100, width: '24px', height: '24px', ml: 2, color: 'unset', display: main ? 'none' : 'block' }}>
                    <ChevronLeftIcon sx={{ width: '24px', height: '24px' }} />
                </IconButton>
                <Typography position={'absolute'} mx={'auto'} my={'auto'} textAlign={"center"} sx={{ width: '100%', fontWeight: 700, fontSize: '16px' }}>
                    {caption}
                </Typography>
                <IconButton sx={{ padding: 0, zIndex: 100, width: '24px', height: '24px', mr: 2, color: 'unset', display: main ? 'none' : 'block' }}>
                    <MoreVertIcon sx={{ width: '24px', height: '24px' }} />
                </IconButton>
            </Box>
        </>
    )
}

export default Navbar