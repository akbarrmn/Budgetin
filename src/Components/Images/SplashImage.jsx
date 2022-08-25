import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './SplashImage.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper";
import { Box, Button, Typography } from '@mui/material';
import Image1 from "../../Assets/Image1.png"
import Image2 from "../../Assets/Image2.png"
import Image3 from "../../Assets/Image3.png"
import Arrow from "../../Assets/Icon/Arrow.svg"
import { Link } from 'react-router-dom';

const SplashImage = () => {
  const [swiper, setSwiper] = React.useState(0);

  return (
    <>
      <Box className='swiper-container' sx={{ position:'relative', height:'90vh', pt:5, mx:5 }}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            el: '.swiper-pagination'
          }}
          onSlideChange={(e) => setSwiper(e.realIndex)}
          slidesPerView={1}
          style={{ borderRadius: '10px' }}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >
          <SwiperSlide style={{ width: '352px', height: '305px' }}>
            <Box component={'img'} src={Image1} sx={{ width: '100%', height: '100%', objectFit:'contain' }} />
          </SwiperSlide>
          <SwiperSlide style={{ width: '352px', height: '305px' }}>
            <Box component={'img'} src={Image2} sx={{ width: '100%', height: '100%', objectFit:'contain' }} />
          </SwiperSlide>
          <SwiperSlide style={{ width: '352px', height: '305px' }}>
            <Box component={'img'} src={Image3} sx={{ width: '100%', height: '100%', objectFit:'contain' }} />
          </SwiperSlide>
        </Swiper>
        <Box className="swiper-pagination" />
        <Box sx={{ mt: 5 }}>
          <Typography variant='h5' sx={{ textAlign: 'center', fontWeight:700 }}>
            {swiper === 0 ? "Simpan Uang," :
              swiper === 1 ? "Catat Uang,"
                : "Capai Tujuan,"}
          </Typography>
          <Typography variant='h5' sx={{ textAlign: 'center', fontWeight:700 }}>
            {swiper === 0 ? "Tanpa Berfikir Memikirkannya" : swiper === 1 ? "Tanpa Berfikir Memikirkannya" : "Untuk Masa Depan Yang Indah"}
          </Typography>
          <Typography variant='caption' sx={{ display: 'flex', justifyContent: 'center', px: {md:'5rem',sm:'5rem', xs:'4rem'}, textAlign: 'center', mt: 2 }}>
            {swiper === 0 ?
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              : swiper === 1 ?
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </Typography>
        </Box>
        {swiper !== 2 ?
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 'unset' }, mb: 5 }}>
            <Button className="next" color='secondary' variant='contained'
              sx={{
                width: '56px',
                height: '56px',
                minWidth:'unset',
                position: { xs: 'unset', md: 'absolute' },
                bottom: { xs: 'unset', md: '5%' },
                textAlign:'center',
                borderRadius:'50%'
              }}>
              <Box component={'img'} src={Arrow} sx={{ width:'25.34px', height:'25.34px' }}/>
            </Button>
          </Box>
          :
          <Link to="/home" style={{ textDecoration:'none' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: '100%',
                height: '56px',
                marginTop:'10%',
                position: { xs: 'unset', md: 'absolute' },
                bottom: { xs: 'unset', md: '5%' },
              }}
            >
              Masuk
            </Button>
          </Link>
        }
      </Box>
    </>
  )
}

export default SplashImage