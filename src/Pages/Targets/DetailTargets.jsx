import React from 'react'
import foto from "../../Assets/image.jpg"
import CircleChart from '../../Components/Chart/CircleChart'
import { Box, Typography } from '@mui/material'
import Container from '../../Components/Containers/Container'
import Navbar from '../../Components/Navbar/Navbar'
import BottomBar from '../../Components/BottomBar/BottomBar'

const DetailTargets = () => {
    return (
        <>
            <Container>
                <Navbar caption={'Tujuan'}/>
                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <CircleChart />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Komputer</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', borderLeft: '4px solid #EDEDED', p: '8px 16px' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Rp.2.000.000</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8C8D8D' }}>dari Rp.5.000.000</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', borderLeft: '4px solid #EDEDED', p: '8px 16px' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8C8D8D' }}>Target Tercapai</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>3 Januari 2023</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 4, gap: '16px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Riwayat Transaksi</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8C8D8D' }}>Lihat Semua</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    {/* Clone */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                            <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#52B848' }}>+Rp. 50.000</Typography>
                    </Box>
                </Box>
                <BottomBar pages={'Targets'} />
            </Container>
        </>
    )
}

export default DetailTargets