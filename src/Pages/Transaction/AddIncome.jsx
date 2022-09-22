import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import ButtonFullWidth from '../../Components/Button/ButtonFullWidth'
import Container from '../../Components/Containers/Container'
import Navbar from '../../Components/Navbar/Navbar'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AddIncome = () => {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Container>
                <Navbar caption={'Tambah Pemasukan'} />
                <Box component={'form'} sx={{ mx: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Nama tujuan</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder='Tulis disini...' fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Nominal capaian</Typography>
                        <Box tabIndex={1} sx={{ 
                            display:'flex',
                            alignItems:'center', 
                            justifyContent:'space-between', 
                            border:'1px solid #C2C2C2', 
                            height:'30px', 
                            borderRadius: '6px',
                            p:'12px',
                            ':focus':{
                                border:'1px solid black', 
                            } }}>
                            <Typography sx={{ color:'#B2B3B3' }}>Pilih Kategori</Typography>
                            <NavigateNextIcon sx={{ color:'#B2B3B3' }}/>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Tanggal</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Catatan</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder='Tulis Catatan Singkat' fullWidth />
                    </Box>
                    <Box>
                        <ButtonFullWidth text={'Tambah'} />
                    </Box>
                </Box>
                <BottomBar pages={"Transaksi"} />
            </Container>
        </>
    )
}

export default AddIncome