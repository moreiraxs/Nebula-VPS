import Cards from '../../components/layout/Cards'

export default function ServidoreSection(){
    return (
        <>
        <section className="flex-col justify-between items-start px-20 relative">
            <div className="flex-col items-center justify-start ">      
                <p className="text-3xl font-bold text-white">Rede global de servidores</p>
                 <p> Conecte-se a qualquer servidor com um clique. Todos com criptografia AES-256.</p>
            </div>
           <div className=' flex mt-6 gap-1.5'>
            <Cards className="inline-flex items-center gap-2 px-2 py-2 rounded- bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
             1.240 servidores
            </Cards>
             <Cards className="inline-flex items-center gap-2 px-2 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
             62 países
            </Cards>
             <Cards className="inline-flex items-center gap-2 px-2 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
             99,9% uptime
            </Cards>
             </div>
              
        </section>
        
        
        
        </>
    )
}