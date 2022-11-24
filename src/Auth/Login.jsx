import { Box, Typography } from '@mui/material'
import React from 'react'
import Container from '../Components/Containers/Container'

import logo from "../Assets/Navbar/mdi_finance.png"

const Login = () => {
    return (
        <>
            <Container>
                <Box sx={{ mx: '16px', py: '30px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ gap: '6px', display: 'flex', alignItems: 'center' }}>
                            <Box component={'img'} src={logo} sx={{ width: '34px', height: '34px' }} />
                            <Box sx={{ border: '1px solid #191C1B', height: '34px' }} />
                            <Typography sx={{ fontSize: '22px', fontWeight: 700, lineHeight: '28px' }}>
                                Budgetin.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '4px' }}>
                            <Typography sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '16px' }}>
                                Belum memiliki akun ?
                            </Typography>
                            <Typography sx={{ fontSize: '11px', fontWeight: '700', lineHeight: '16px', cursor: 'pointer' }}>
                                Daftar
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: '48px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'8px' }}>
                            <Box>
                                <Typography sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '36px' }}>
                                    Selamat datang
                                </Typography>
                                <Typography sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '36px' }}>
                                    kembali !
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color:"#8C8D8D", letterSpacing:'0.25 px', textAlign:'justify' }}>
                                    Saya sangat senang melihat anda kembali. Anda dapat melanjutkan login untuk mengelola keuangan anda.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login