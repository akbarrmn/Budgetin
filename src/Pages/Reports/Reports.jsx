import { Box } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'

const Reports = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Reports</Box>
        </Box>
        <BottomBar />
      </Container>
    </>
  )
}

export default Reports