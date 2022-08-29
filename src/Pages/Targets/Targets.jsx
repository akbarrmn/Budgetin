import { Box } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'

const Targets = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Target</Box>
        </Box>
        <BottomBar />
      </Container>
    </>
  )
}

export default Targets