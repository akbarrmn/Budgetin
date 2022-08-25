import React from 'react'
import Container from '../../Components/Containers/Container'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
          <Box>ID</Box>
          <Typography>
            Lewati
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Home