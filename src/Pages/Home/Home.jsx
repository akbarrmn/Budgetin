import React from 'react'
import Container from '../../Components/Containers/Container'
import { Box, Divider, IconButton, LinearProgress, linearProgressClasses, Typography } from '@mui/material'
import BottomBar from '../../Components/BottomBar/BottomBar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Balance from '../../Components/Balance/Balance';
import foto from "../../Assets/image.jpg"
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #1E2120 0%, #5E5E5E 100%);',
  },
}));

const Home = () => {
  const percentage = <Typography display="inline" sx={{ color: '#6159E6', fontSize: '14px', fontWeight: 500 }}>30%</Typography>
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', gap: '16px', px: 2, py: 4, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '14px', fontWeight: 700 }}>Hallo Prayoga!</Typography>
            <Typography sx={{ fontSize: '12px', lineHeight: '12px', color: '#8C8D8D' }}>Selamat datang di budgetin.</Typography>
          </Box>
          <IconButton sx={{ padding: 0, zIndex: 100, width: '30px', height: '30px', ml: 2, color: 'unset' }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Box>
        <Box pb={'180px'}>
          <Balance />
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography component={'span'} sx={{ color: '#666867', fontSize: '12px', fontWeight: 500 }}>Kamu menghemat {percentage} lebih banyak di bulan ini. Ayo pertahankan!!</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 4, gap: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Riwayat Transaksi</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8C8D8D' }}>Lihat Semua</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 4, gap: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Tujuan Keuangan</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8C8D8D' }}>Lihat Semua</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Komputer</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>Rp.2.000.000 - Rp.5.000.000</Typography>
              <BorderLinearProgress variant="determinate" value={50} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Komputer</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>Rp.2.000.000 - Rp.5.000.000</Typography>
              <BorderLinearProgress variant="determinate" value={80} />
            </Box>
          </Box>

        </Box>
        <Divider sx={{ my: 2 }} />

        <BottomBar pages={'Beranda'} />
      </Container>
    </>
  )
}

export default Home