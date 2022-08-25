import { Box } from '@mui/material'
import React from 'react'

const Container = (props) => {
  return (
    <>
        <Box sx={{ maxWidth: '428px',height:'100%', minHeight: '100vh', mr:'auto', ml: 'auto', backgroundColor:'white', position:'relative' }}>
            {props.children}
        </Box>
    </>
  )
}

export default Container