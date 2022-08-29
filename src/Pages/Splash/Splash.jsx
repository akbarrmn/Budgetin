import { Box } from '@mui/material'
import React from 'react'
import Container from '../../Components/Containers/Container'
import SplashImage from '../../Components/Images/SplashImage'

const Splash = () => {
  return (
    <Container>
      <Box sx={{pt:{xs:'unset', md:5, lg:5} }}>
        <SplashImage />
      </Box>
    </Container>
  )
}

export default Splash