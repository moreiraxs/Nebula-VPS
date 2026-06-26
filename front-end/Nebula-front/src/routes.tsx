import  Home  from './pages/home/Home';
import Planos from './pages/planos/Planos';
import ScrollToTop from "./components/layout/Scroll";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Servidores from './pages/Servidores/Servidores';
import Suporte from './pages/Suporte/Suporte';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
               
                <Route path='/home' element={<Home/>} />
                
                
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path='/planos' element={<Planos/>}/>

                <Route path='/servidores' element={<Servidores/>}/>

                <Route path='/suporte' element={<Suporte/>}/>


              
            </Routes>
        </BrowserRouter>
    );
};