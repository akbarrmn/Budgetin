import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import LineChart from '../../Components/Chart/LineChart'
import Container from '../../Components/Containers/Container'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Reports = () => {
  const [switchs, setSwitchs] = React.useState('Pengeluaran')
  const clicked = () =>{
    switchs === 'Pengeluaran' ? setSwitchs('Pemasukan') : setSwitchs('Pengeluaran')
  }
  const percentage = <Typography display="inline" sx={{ color: '#6159E6', fontSize: '14px', fontWeight: 500 }}>30%</Typography>
  return (
    <>
      <Container>
        <Box sx={{ mx: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: '#666867', fontSize: '16px', fontWeight: 500 }}>{switchs === 'Pengeluaran' ? 'Total Pengeluaran':'Total Pemasukan'}</Typography>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}>500k</Typography>
              </Box>
              <Button onClick={clicked} variant='contained' color='primary'>
                Ubah
              </Button>
            </Box>
            <LineChart />
          </Box>
          <Box sx={{ border: '1px solid #EDEDED', p: '20px', borderRadius: '8px' }}>
            <Box sx={{ display: 'flex', gap: '12px' }}>
              <ErrorOutlineIcon sx={{ color: '#6159E6' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'243px' }}>
                <Typography sx={{ color: '#191C1B', fontSize: '14px', fontWeight: 500 }}>Kamu Hemat!</Typography>
                <Typography component={'span'} sx={{ color: '#666867', fontSize: '12px', fontWeight: 500 }}>Kamu menghemat {percentage} lebih banyak di bulan ini. Ayo pertahankan!!</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <BottomBar pages={'Report'} />
      </Container>
    </>
  )
}

export default Reports