import  Home  from './pages/home/Home';
import Planos from './pages/planos/Planos';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Servidores from './pages/Servidores/Servidores';
import Suporte from './pages/Suporte/Suporte';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path='/home' element={<Home/>} />
                
                
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path='/planos' element={<Planos/>}/>

                <Route path='/Servidores' element={<Servidores/>}/>

                <Route path='/Suporte' element={<Suporte/>}/>


              
            </Routes>
        </BrowserRouter>
    );
};