import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { Theme } from './Style/Theme';
import Home from "./Pages/Home/Home"
import Splash from './Pages/Splash/Splash';
import Transaction from "./Pages/Transaction/Transaction"
import Targets from './Pages/Targets/Targets';
import Reports from './Pages/Reports/Reports';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/transaksi' element={<Transaction/>}/>
            <Route path='/tujuan' element={<Targets/>}/>
            <Route path='/laporan' element={<Reports/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
