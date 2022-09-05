import { Box, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import ButtonFullWidth from '../../Components/Button/ButtonFullWidth'
import Container from '../../Components/Containers/Container'
import Navbar from '../../Components/Navbar/Navbar'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDropzone } from 'react-dropzone'
import UploadIcon from '@mui/icons-material/Upload';
import ClearIcon from '@mui/icons-material/Clear';

const thumb = {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 2,
    padding: 4,
    position: 'relative'
};

const thumbInner = {
    display: 'flex',
    overflow: 'hidden'
};

const AddTargets = () => {
    const [value, setValue] = React.useState(null);
    const [files, setFiles] = React.useState([]);

    const onDrop = React.useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
        // setFiles([...files, ...acceptedFiles])
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        accept: {
            'image/*': []
        },
        onDrop
    })

    const removeFile = file => () => {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }

    const thumbs = files.map(file => (
        <Box key={file.name} sx={{ display: 'flex' }}>
            <div style={thumb} >
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        alt='images'
                        style={{ objectFit: 'cover', width: '100px' }}
                        // Revoke data uri after image is loaded
                        onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    />
                </div>
            </div>
            <Box>
                <ClearIcon onClick={removeFile(file)} sx={{ cursor:'pointer' }} />
            </Box>
        </Box>
    ))

    React.useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    }, [files])

    return (
        <>
            <Container>
                <Navbar caption={'Tambah tujuan'} />
                <Box component={'form'} sx={{ mx: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Nama tujuan</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder='Tulis disini...' fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Target capaian</Typography>
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
                        <Typography>Nominal capaian</Typography>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                            id="outlined-basic"
                            variant="outlined"
                            placeholder='0,00'
                            fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography>Unggah gambar</Typography>
                        {files.length !== 0 ?
                            <Box sx={{ border: '1px solid #C2C2C2', borderRadius: '6px', alignItems: 'center', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                {thumbs}
                            </Box>
                            :
                            <Box {...getRootProps()} sx={{ width: '100%' }}>
                                <input type='file' multiple {...getInputProps()} />
                                <Box sx={{ border: '1px solid #C2C2C2', borderRadius: '6px', width: '100%', height: '56px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                    <UploadIcon sx={{ color: '#B2B3B3' }} />
                                </Box>
                            </Box>
                        }
                    </Box>
                    <Box>
                        <ButtonFullWidth text={'Tambah Tujuan'} />
                    </Box>
                </Box>
                <BottomBar pages={"Targets"} />
            </Container>
        </>
    )
}

export default AddTargets