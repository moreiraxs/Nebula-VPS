import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Paises } from './Country'
import ServidoreSection from './ServidoresSection'
export default function Servidores (){
    return(
        <>
        <Header/>
        <ServidoreSection/>
        <Paises/>
        
        <Footer/>
        </>
    )
}