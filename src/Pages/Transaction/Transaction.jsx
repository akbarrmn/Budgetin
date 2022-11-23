import { Box, Fab, InputAdornment, OutlinedInput, Tab, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import foto from "../../Assets/image.jpg"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Balance from '../../Components/Balance/Balance';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const Transaction = () => {
  const [clicked, setClicked] = React.useState("1")
  const navigate = useNavigate()
  const add = () => {
    if (clicked === '1') {
      window.localStorage.setItem("clicked", '1')
      navigate('/tambah-pengeluaran')
    }else{
      window.localStorage.setItem("clicked", '2')
      navigate('/tambah-pemasukan')
    }
  } 

  React.useEffect(()=>{
    const clickedStorage = window.localStorage.getItem("clicked")
    if (clickedStorage) {
      setClicked(clickedStorage)
    }
  },[])

  const handleChange = (event, newValue) => {
    setClicked(newValue);
  };

  return (
    <>
      <Container>
        <Box pb={'180px'}>
          <Balance />
        </Box>
        <TabContext value={clicked}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '24px', height: '24px', py: 3, width: '100%' }}>
            <Tab label="Pengeluaran" value="1" sx={{ color: clicked === '1' ? 'black' : '#B2B3B3', cursor: 'pointer',  alignItems: 'center', gap: '8px', position: 'relative', width: '50%', height: '40px' }} />
            <Tab label="Pemasukan" value="2" sx={{ color: clicked === '2' ? 'black' : '#B2B3B3', display: 'flex', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', width: '50%', height: '40px' }} />
          </TabList>
          <Box sx={{ display: 'flex', gap: '8px', mx: 2 }}>
            <OutlinedInput
              startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
              id="outlined-basic"
              variant="outlined"
              placeholder='Cari transaksi'
              sx={{ height: '50px' }}
              fullWidth />
            <Box tabIndex={1} sx={{
              border: '1px solid #B2B3B3',
              justifyContent: 'space-around',
              p: '0px 8px',
              width: '81px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '8px',
              cursor: 'pointer',
              ':focus': {
                border: '1px solid black'
              }
            }}>
              <FilterAltIcon />
              <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
                Filter
              </Typography>
            </Box>
          </Box>
          <TabPanel value="1">
            <Box className='transaction-content' sx={{ mx: 2, my: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#FF0000' }}>-Rp. 50.000</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#FF0000' }}>-Rp. 50.000</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#FF0000' }}>-Rp. 50.000</Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box className='transaction-content' sx={{ mx: 2, my: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#2FAA23' }}>+Rp. 50.000</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#2FAA23' }}>+Rp. 50.000</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Box component={'img'} src={foto} sx={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Uang Saku</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8C8D8D' }}>29 Agustus 2022</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#2FAA23' }}>+Rp. 50.000</Typography>
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
        <Fab color="primary" aria-label="add" onClick={add} sx={{ bottom: '130px', right: '20px', position: 'absolute' }}>
          <AddIcon />
        </Fab>
        <BottomBar pages={'Transaksi'} />
      </Container>
    </>
  )
}

export default Transaction