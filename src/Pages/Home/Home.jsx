import React from 'react'
import Container from '../../Components/Containers/Container'
import { Box } from '@mui/material'
import BottomBar from '../../Components/BottomBar/BottomBar'

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', py: 5 }}>
          Home
        </Box>
        <BottomBar />
      </Container>
    </>
  )
}

export default Home