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
import DetailTargets from './Pages/Targets/DetailTargets';
import AddTargets from './Pages/Targets/AddTargets';
import AddOutcome from './Pages/Transaction/AddOutcome';
import AddIncome from './Pages/Transaction/AddIncome';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/beranda' element={<Home/>}/>
            <Route path='/transaksi' element={<Transaction/>}/>
            <Route path='/tambah-pengeluaran' element={<AddOutcome/>}/>
            <Route path='/tambah-pemasukan' element={<AddIncome/>}/>
            <Route path='/tujuan' element={<Targets/>}/>
            <Route path='/tujuan/1' element={<DetailTargets/>}/>
            <Route path='/tambah-tujuan' element={<AddTargets/>}/>
            <Route path='/laporan' element={<Reports/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
