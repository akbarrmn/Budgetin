import { Box } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Container = (props) => {
  const location = useLocation().pathname
  return (
    <>
        <Box sx={{  width: location === '/'?'unset': '428px',maxWidth:'428px', height:'100%', minHeight: '100vh', mr:'auto', ml: 'auto', backgroundColor:'white', position:'relative' }}>
            {props.children}
        </Box>
    </>
  )
}

export default Container