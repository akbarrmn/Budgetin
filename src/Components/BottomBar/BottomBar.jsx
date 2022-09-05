import { Box, Typography } from '@mui/material'
import React from 'react'

// Home ICON
import Beranda from "../../Assets/Icon/BottomBars/home.png"
import BerandaContained from "../../Assets/Icon/BottomBars/Fill/home-fil.png"
// Transaksi
import Transaksi from "../../Assets/Icon/BottomBars/note.png"
import TransaksiContained from "../../Assets/Icon/BottomBars/Fill/note-fill.png"
// Tujuan
import Tujuan from "../../Assets/Icon/BottomBars/target.png"
import TujuanContained from "../../Assets/Icon/BottomBars/Fill/target-fill.png"
// Report
import Report from "../../Assets/Icon/BottomBars/bar.png"
import ReportContained from "../../Assets/Icon/BottomBars/Fill/bar-fill.png"
// Profile
import Profile from "../../Assets/Icon/BottomBars/account.png"
import ProfileContained from "../../Assets/Icon/BottomBars/Fill/account-fill.png"
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
                        onClick={() => HandlePage('/beranda')}>
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