import { createTheme } from "@mui/material";

export const Theme = createTheme({
    breakpoints:{
      values:{
        xxs:0,
        xs:360,
        sm:600,
        md:900,
        lg:1200,
        xl:1440
      }
    },
    typography:{
      fontFamily:"Poppins, sans-serif",
      button:{
        textTransform:'none'
      },
      h6:{
        fontSize:'1.25rem'
      },
      h5:{
        fontSize:'1.5rem',
        [`@media screen and (min-width: 1440px)`]: {
          fontSize: "2rem"
        },
        [`@media screen and (min-width: 1200px)`]: {
          fontSize: "1.75rem"
        },
        [`@media screen and (min-width: 700px)`]: {
          fontSize: "22px"
        },
        [`@media screen and (max-width: 700px)`]: {
          fontSize: "22px"
        },
        [`@media screen and (max-width: 395px)`]: {
          fontSize: "20px"
        },
        [`@media screen and (max-width: 365px)`]: {
          fontSize: "18px"
        },
      },
      subtitle1:{
        fontSize:'1rem',
        [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1rem"
        },
        [`@media screen and (max-width: 700px)`]: {
          fontSize: ".75rem"
        },
      },
      subtitle2:{
        fontSize:'14px',
        [`@media screen and (max-width: 1200px)`]: {
          fontSize: "14px"
        },
        // [`@media screen and (max-width: 700px)`]: {
        //   fontSize: ".75rem"
        // },
        // [`@media screen and (max-width: 395px)`]: {
        //   fontSize: "20px"
        // },
        // [`@media screen and (max-width: 365px)`]: {
        //   fontSize: "18px"
        // },
      },
      caption:{
        fontSize:'.75rem',
        [`@media screen and (max-width: 1200px)`]: {
          fontSize: ".75rem"
        },
        [`@media screen and (max-width: 700px)`]: {
          fontSize: "16px"
        },
      }
    },
    palette:{
      primary: {
        main: '#1C1C1C',
        light: '#2b2b2b',
        dark: '#171717',
        contrastText: '#fff'
      },
      secondary:{
        main:'#0F172B',
        light:'#141e38',
        dark:'#0e1526',
        contrastText: '#fff'
      },
      background:{
        paper: '#fff',
        purple: '#7126B5'
      },
      action: {
        disabled: '#fff'
      }
    }
});