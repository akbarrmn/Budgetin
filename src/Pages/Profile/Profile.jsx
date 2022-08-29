import { Box, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'
import foto from "../../Assets/image.jpg"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// Icon
import account from "../../Assets/Icon/Profile/account_circle.svg"
import info from "../../Assets/Icon/Profile/info.svg"
import language from "../../Assets/Icon/Profile/language.svg"
import lock from "../../Assets/Icon/Profile/lock.svg"
import notifications_active from "../../Assets/Icon/Profile/notifications_active.svg"
import restore from "../../Assets/Icon/Profile/restore.svg"

const Profile = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', py: 5 }}>
          <Box sx={{ width: '114px', height: '114px', borderRadius: '50%' }}>
            <Box component={'img'} src={foto} sx={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
            <Typography variant='h6'>Prayoga Anata</Typography>
            <Typography variant='caption'>prayoga12@gmail.com</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', px: '1rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='caption' sx={{ fontSize: '16px', color: '#8C8D8D' }}>Akun</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={account} sx={{ width:'24px', height:'24px' }}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Akun Saya</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={lock}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Atur Pin</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={restore}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Reset Data</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='caption' sx={{ fontSize: '16px', color: '#8C8D8D' }}>Pilihan</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={language}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Ganti Bahasa</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={notifications_active}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Pengaturan Notifikasi</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='caption' sx={{ fontSize: '16px', color: '#8C8D8D' }}>Tentang</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems:'center' }}>
                  <Box component={'img'} src={info}/>
                  <Typography variant='caption' sx={{ fontSize: '16px' }}>Tentang Budgetin</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <BottomBar />
      </Container>
    </>
  )
}

export default Profile