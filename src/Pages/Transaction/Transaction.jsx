import { Box } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'

const Transaction = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Transaction</Box>
        </Box>
        <BottomBar pages={'Transaksi'}/>
      </Container>
    </>
  )
}

export default Transaction