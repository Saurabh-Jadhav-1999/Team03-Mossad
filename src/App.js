import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { NavBar } from './components/navBar/NavBar';
import { HotelsListPage } from './pages/HotelsListPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/search-hotels' element={<HotelsListPage />} />
          <Route path='*' element={<div><hr />NOT FOUND </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
