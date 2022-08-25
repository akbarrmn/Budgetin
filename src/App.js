import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { Theme } from './Style/Theme';
import Home from "./Pages/Home/Home"
import Splash from './Pages/Splash/Splash';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
