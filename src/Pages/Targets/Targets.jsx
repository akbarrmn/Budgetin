import { Box, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import CircleChart from '../../Components/CircleChart/CircleChart'
import Container from '../../Components/Containers/Container'
import Navbar from '../../Components/Navbar/Navbar'

const Targets = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <CircleChart />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent:'center' }}>
            <Typography variant='h5'>Komputer</Typography>
            <Box sx={{ display:'flex', flexDirection:'column' }}>
              <Typography variant='caption'>Rp.2.000.000</Typography>
              <Typography variant='caption'>dari Rp.5.000.000</Typography>
            </Box>
            <Box sx={{ display:'flex', flexDirection:'column' }}>
              <Typography variant='caption'>Target Tercapai</Typography>
              <Typography variant='caption'>3 Januari 2023</Typography>
            </Box>
          </Box>
        </Box>
        <BottomBar pages={'Targets'} />
      </Container>
    </>
  )
}

export default Targets