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
import { useNavigate } from 'react-router-dom'

const BottomBar = ({pages}) => {
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
                height: '100px',
                boxShadow: '0px -6px 9px rgba(25, 28, 27, 0.05)',
                bottom: 0,
                position: 'fixed',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '16px', gap: {md:'24px',sm:'24px', xs:'24px', xxs:'12px'} }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} 
                        onClick={() => HandlePage('/home')}>
                        <Box component={'img'} src={pages === 'Beranda' ? BerandaContained : Beranda} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='subtitle2' sx={{ fontWeight: pages === 'Beranda' ? 600 : 400, fontSize: '14px', color: pages === 'Beranda' ? 'unset' : '#B2B3B3' }}>
                            Beranda
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/transaksi')}>
                        <Box component={'img'} src={pages === 'Transaksi' ? TransaksiContained : Transaksi} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='subtitle2' sx={{ fontWeight:pages === 'Transaksi' ? 600: 400, fontSize: '14px', color: pages === 'Transaksi' ? 'unset' : '#B2B3B3' }}>
                            Transaksi
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/tujuan')}>
                        <Box component={'img'} src={pages === 'Targets' ? TujuanContained : Tujuan} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='subtitle2' sx={{ fontWeight: pages === 'Targets' ? 600:400, fontSize: '14px', color: pages === 'Targets' ? 'unset' : '#B2B3B3' }}>
                            Tujuan
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/laporan')}>
                        <Box component={'img'} src={pages === 'Report' ? ReportContained : Report} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='subtitle2' sx={{ fontWeight:pages === 'Report' ? 600 : 400, fontSize: '14px', color: pages === 'Report' ? 'unset' : '#B2B3B3' }}>
                            Laporan
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        onClick={() => HandlePage('/profile')}>
                        <Box component={'img'} src={pages === 'Profile' ? ProfileContained : Profile} sx={{ width: '24px', height: '24px !important' }} />
                        <Typography variant='subtitle2' sx={{ fontWeight:pages === 'Profile' ? 600 : 400, fontSize: '14px', color: pages === 'Profile' ? 'unset' : '#B2B3B3' }}>
                            Profile
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BottomBar