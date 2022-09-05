import { Box, Fab, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import Container from '../../Components/Containers/Container'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import foto from "../../Assets/image.jpg"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
  const [clicked, setClicked] = React.useState(localStorage.getItem("transaction"))
  const navigate = useNavigate()
  const add = () => {
    clicked === "Pengeluaran" ? navigate('/tambah-pengeluaran') : navigate('/tambah-pemasukan')
  }

  React.useEffect(() => {
    return () => {
      const getItem = localStorage.getItem("transaction")
      if (getItem === null) {
        setClicked("Pengeluaran")
      } else {
        if (clicked !== "Pemasukan") {
          localStorage.setItem("transaction", "Pengeluaran")
        } else {
          localStorage.setItem("transaction", "Pemasukan")
        }
      }
    };
  }, [clicked]);

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '24px', height: '24px', py: 3, width: '100%' }}>
          <Box onClick={() => setClicked('Pengeluaran')} sx={{ display: 'flex', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', width: '165px', height: '40px' }}>
            <Typography sx={{ color: clicked === 'Pengeluaran' ? 'black' : '#B2B3B3' }}>Pengeluaran</Typography>
            <Box sx={{
              display: clicked === 'Pengeluaran' ? 'block' : 'none',
              background: '#191C1B',
              width: '100%',
              height: '4px',
              borderRadius: '8px',
              bottom: 0,
              position: 'absolute'
            }} />
          </Box>
          <Box onClick={() => setClicked('Pemasukan')}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              width: '165px',
              height: '40px'
            }}>
            <Typography sx={{ color: clicked === 'Pemasukan' ? 'black' : '#B2B3B3' }}>Pemasukan</Typography>
            <Box sx={{
              display: clicked === 'Pemasukan' ? 'block' : 'none',
              background: '#191C1B',
              width: '100%',
              height: '4px',
              borderRadius: '8px',
              bottom: 0,
              position: 'absolute'
            }} />
          </Box>
        </Box>
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
        {clicked === 'Pengeluaran' ?
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
          :
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
        }
        <Fab color="primary" aria-label="add" onClick={add} sx={{ bottom: '130px', right: '20px', position: 'absolute' }}>
          <AddIcon />
        </Fab>
        <BottomBar pages={'Transaksi'} />
      </Container>
    </>
  )
}

export default Transaction