import React from 'react'
import Container from '../../Components/Containers/Container'
import { Box, IconButton, Typography } from '@mui/material'
import BottomBar from '../../Components/BottomBar/BottomBar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Hero from "../../Assets/Rectangle.png"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', gap: '16px', px: 2, py: 4, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '14px', fontWeight: 700 }}>Hallo Prayoga!</Typography>
            <Typography sx={{ fontSize: '12px', lineHeight: '12px', color: '#8C8D8D' }}>Selamat datang di budgetin.</Typography>
          </Box>
          <IconButton sx={{ padding: 0, zIndex: 100, width: '30px', height: '30px', ml: 2, color: 'unset' }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box component={'img'} src={Hero} sx={{ width: '100%', position: 'absolute' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', position: 'absolute', top: '15px', left: '16px' }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, color: '#FFFFFF' }}>Total Saldo</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography sx={{ fontSize: '22px', lineHeight: '28px', fontWeight: 700, color: '#FFFFFF' }}>Rp.500.000</Typography>
              <IconButton sx={{ padding: 0, zIndex: 100, width: '30px !important', height: '30px !important', color: 'unset' }}>
                <VisibilityOffOutlinedIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EDEDED',
            borderRadius: '8px',
            mt: '5rem',
            height: '60px',
            width: '378px',
            p: '16px 12px',
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-evenly'
          }}>
            <Box sx={{ display: 'flex', gap: '8px', width:'182px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
                <ExpandCircleDownIcon sx={{ color: '#FF0000' }} />
              </Box>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', gap: '4px', flexDirection: 'column', width: '90px' }}>
                  <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 400, color: '#8C8D8D' }}>Pengeluaran bulan ini</Typography>
                  <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}>Rp.100.000</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '8px', width:'182px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
                <ExpandCircleDownIcon sx={{ transform: 'rotateZ(180deg)', color: '#2FAA23' }} />
              </Box>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', gap: '4px', flexDirection: 'column', width: '90px' }}>
                  <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 400, color: '#8C8D8D' }}>Pemasukan bulan ini</Typography>
                  <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}>Rp.100.000</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <BottomBar pages={'Beranda'} />
      </Container>
    </>
  )
}

export default Home