import { Box, Typography } from '@mui/material'
import React from 'react'

// Home ICON
import Beranda from "../../Assets/Icon/BottomBar/Beranda.svg"
import BerandaContained from "../../Assets/Icon/BottomBar/BerandaContained.svg"
// Transaksi
import Transaksi from "../../Assets/Icon/BottomBar/Transaksi.svg"
import TransaksiContained from "../../Assets/Icon/BottomBar/TransaksiContained.svg"
// Tujuan
import Tujuan from "../../Assets/Icon/BottomBar/Tujuan.svg"
import TujuanContained from "../../Assets/Icon/BottomBar/TujuanContained.svg"
// Report
import Report from "../../Assets/Icon/BottomBar/Report.svg"
import ReportContained from "../../Assets/Icon/BottomBar/ReportContained.svg"
// Profile
import Profile from "../../Assets/Icon/BottomBar/Profile.svg"
import ProfileContained from "../../Assets/Icon/BottomBar/ProfileContained.svg"
import { useLocation, useNavigate } from 'react-router-dom'

const BottomBar = () => {
    const location = useLocation().pathname
    const navigate = useNavigate()
    const HandlePage = (props) =>{
        navigate(props)
    }
    return (
        <>
            <Box sx={{
                maxWidth:'inherit',
                width:'inherit',
                background:'white',
                height: '114px',
                boxShadow: '0px -6px 9px rgba(25, 28, 27, 0.05)',
                bottom: 0,
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '16px', gap: '24px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/home')}>
                        <Box component={'img'} src={location === '/home' ? BerandaContained : Beranda} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='caption' sx={{ fontWeight: location === '/home' ? 600 : 400, fontSize: '14px', color: location === '/home' ? 'unset' : '#B2B3B3' }}>
                            Beranda
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/transaksi')}>
                        <Box component={'img'} src={location === '/transaksi' ? TransaksiContained : Transaksi} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='caption' sx={{ fontWeight:location === '/transaksi' ? 600: 400, fontSize: '14px', color: location === '/transaksi' ? 'unset' : '#B2B3B3' }}>
                            Transaksi
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/tujuan')}>
                        <Box component={'img'} src={location === '/tujuan' ? TujuanContained : Tujuan} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='caption' sx={{ fontWeight: location === '/tujuan' ? 600:400, fontSize: '14px', color: location === '/tujuan' ? 'unset' : '#B2B3B3' }}>
                            Tujuan
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/laporan')}>
                        <Box component={'img'} src={location === '/laporan' ? ReportContained : Report} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='caption' sx={{ fontWeight:location === '/laporan' ? 600 : 400, fontSize: '14px', color: location === '/laporan' ? 'unset' : '#B2B3B3' }}>
                            Laporan
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/profile')}>
                        <Box component={'img'} src={location === '/profile' ? ProfileContained : Profile} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='caption' sx={{ fontWeight:location === '/profile' ? 600 : 400, fontSize: '14px', color: location === '/profile' ? 'unset' : '#B2B3B3' }}>
                            Profile
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ width: '132px', height: '4px', background: '#292D32', borderRadius: '5px', order: 1, flexGrow: 0 }} />
                </Box>
            </Box>
        </>
    )
}

export default BottomBar