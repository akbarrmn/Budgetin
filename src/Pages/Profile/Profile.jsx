import { Box, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'
import foto from "../../Assets/image.jpg"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// Icon
import account from "../../Assets/Icon/Profile/account_circle.png"
import info from "../../Assets/Icon/Profile/info.png"
import notifications_active from "../../Assets/Icon/Profile/notifications_active.png"
import restore from "../../Assets/Icon/Profile/restore.png"
import description from "../../Assets/Icon/Profile/description.png"
import logout from "../../Assets/Icon/Profile/logout.png"
import mail from "../../Assets/Icon/Profile/mail.png"
import privacy_tip from "../../Assets/Icon/Profile/privacy_tip.png"
import help from "../../Assets/Icon/Profile/help.png"

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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={account} sx={{ width: '24px', height: '24px' }} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Akun Saya</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={restore} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Reset Data</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={notifications_active} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Pengaturan Notifikasi</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='caption' sx={{ fontSize: '16px', color: '#8C8D8D' }}>Tentang</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={info} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Tentang Budgetin</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={description} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Syarat & Ketentuan</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={privacy_tip} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Kebijakan Privasi</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={mail} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Kritik & Saran</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={help} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Pusat Bantuan</Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon sx={{ width: '16px', height: '16px' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb:'120px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ display: 'flex', width: '100%', gap: '4px', justifyContent: 'space-between', p: '4px 0px', alignItems: 'center', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                  <Box component={'img'} src={logout} />
                  <Typography variant='h6' sx={{ fontSize: '16px' }}>Keluar Akun</Typography>
                </Box>
                <Typography variant='caption' sx={{ fontSize: '14px', color:'#8C8D8D' }}>Versi 1.0</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <BottomBar pages={'Profile'}/>
      </Container>
    </>
  )
}

export default Profile