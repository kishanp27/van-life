import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout'

import "./server";
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostLayout from './components/HostLayout';
import HostVanDetail from './pages/Host/HostVanDetail';


import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />}/>
              <Route path='photos' element={<HostVanPhotos />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
