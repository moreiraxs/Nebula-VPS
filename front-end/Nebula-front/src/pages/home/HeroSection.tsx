import NetworkMap from "../../components/layout/NetworkMap";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
   const navigate = useNavigate();
  return (
    <section className="flex justify-between items-start px-20 py-16 relative">

      <div className="max-w-xl flex justify-start items-start flex-col">

        <div className="inline-flex items-center gap-2 px-2 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
          ⚡
          <span>Criptografia de ponta a ponta em toda a rede</span>
        </div>

        <h1 className="text-5xl font-bold leading-tight text-yellow-50">
          Navegue sem
          <br />
          fronteiras, sem rastros
        </h1>

        <span className="text-lg text-gray-300 mt-4">
          Conecte-se a servidores em mais de 60 países com velocidade real e política de zero registro. Privacidade de verdade, em qualquer dispositivo.
        </span>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#fff] hover:bg-[#F1EFE8] text-black px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer">
            Começar agora
          </button>
          <button 
            onClick={() => navigate("/planos")} 
            className="bg-[#fff] hover:bg-[#F1EFE8] text-black px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Ver planos
          </button>

        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-gray-300 text-sm">Conectado · Frankfurt, DE · 12 ms</span>
        </div>

      </div>

      <div className="flex flex-col items-center gap-2 bg-transparent w-96 rounded-lg self-start">
        <NetworkMap />
      </div>

    </section>
  );
}