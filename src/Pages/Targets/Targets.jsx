import { Box, Fab, IconButton, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'
import Navbar from '../../Components/Navbar/Navbar'
// Main Content
import MoreVertIcon from '@mui/icons-material/MoreVert';
import foto from "../../Assets/image.jpg"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #1E2120 0%, #5E5E5E 100%);',
  },
}));

const Targets = () => {
  const navigate = useNavigate()
  const clicked = () => {
    navigate('/tujuan/1')
  }
  const add = () =>{
    navigate('/tambah-tujuan')
  }
  return (
    <>
      <Container>
        <Navbar main={true} caption={'Tujuan'}/>
        <Box className="main-content"
          sx={{
            border: '1px solid #EDEDED',
            borderRadius: '10px',
            gap: '16px',
            padding: '16px 8px',
            display: 'flex',
            boxSizing: 'borderBox',
            margin: '1rem 1rem',
            cursor: 'pointer'
          }}
          onClick={clicked}>
          <Box component={'img'} src={foto} sx={{ width: '105px', height: '105px', borderRadius: '50%' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Komputer</Typography>
              <IconButton sx={{ padding: '0 !important', zIndex: 100, minWidth: 'unset', color: 'unset' }}>
                <MoreVertIcon sx={{ width: '24px', height: '24px' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>40% Terkumpul</Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>Rp.2.000.000 - Rp.5.000.000</Typography>
            </Box>
          </Box>
        </Box>
        {/* Clone */}
        <Box className="main-content"
          sx={{
            border: '1px solid #EDEDED',
            borderRadius: '10px',
            gap: '16px',
            padding: '16px 8px',
            display: 'flex',
            boxSizing: 'borderBox',
            margin: '1rem 1rem',
            cursor: 'pointer'
          }}
          onClick={clicked}>
          <Box component={'img'} src={foto} sx={{ width: '105px', height: '105px', borderRadius: '50%' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Komputer</Typography>
              <IconButton sx={{ padding: '0 !important', minWidth: 'unset', color: 'unset' }}>
                <MoreVertIcon sx={{ width: '24px', height: '24px' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>40% Terkumpul</Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>Rp.2.000.000 - Rp.5.000.000</Typography>
            </Box>
          </Box>
        </Box>
        <Fab color="primary" aria-label="add" onClick={add} sx={{ bottom:'130px', right:'20px', position:'absolute' }}>
          <AddIcon />
        </Fab>
        <BottomBar pages={'Targets'} />
      </Container>
    </>
  )
}

export default Targets