import { Button } from '@mui/material'
import React from 'react'

const ButtonFullWidth = ({text}) => {
    return (
        <>
            <Button variant='contained' color='primary' sx={{ width:'100%', height:'56px', borderRadius:'6px', fontWeight:700, fontSize:'16px' }}>
                {text}
            </Button>
        </>
    )
}

export default ButtonFullWidth