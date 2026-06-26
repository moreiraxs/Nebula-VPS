export default function Footer() {
  return (
    <footer className="bg-[#292924] border-t border-white/10 px-20 py-12 mt-16">
      <div className="flex justify-between items-start mb-10">

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="./src/assets/shield.png" className="h-8 w-8" alt="Nebula VPS Logo" />
            <span className="text-white text-lg font-bold">Nebula VPS</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            Privacidade de verdade, em qualquer dispositivo. Conecte-se com segurança a qualquer lugar do mundo.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-white/40 text-xs">Todos os servidores operacionais</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-semibold">Produto</p>
          <a href="#recursos" className="text-white/40 text-sm hover:text-white transition-colors">Recursos</a>
          <a href="#servidores" className="text-white/40 text-sm hover:text-white transition-colors">Servidores</a>
          <a href="#planos" className="text-white/40 text-sm hover:text-white transition-colors">Planos</a>
          <a href="#suporte" className="text-white/40 text-sm hover:text-white transition-colors">Suporte</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-semibold">Tecnologia</p>
          <span className="text-white/40 text-sm">Criptografia AES-256</span>
          <span className="text-white/40 text-sm">Protocolo Xray/VLESS</span>
          <span className="text-white/40 text-sm">Política zero-log</span>
          <span className="text-white/40 text-sm">62 países disponíveis</span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-semibold">Disponível em</p>
          <span className="text-white/40 text-sm">Windows</span>
          <span className="text-white/40 text-sm">macOS</span>
          <span className="text-white/40 text-sm">Android</span>
          <span className="text-white/40 text-sm">iOS</span>
          <span className="text-white/40 text-sm">Linux</span>
        </div>

      </div>

      <div className="border-t border-white/10 pt-6 flex justify-between items-center">
        <p className="text-white/30 text-xs">© 2026 Nebula VPS. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="text-white/30 text-xs hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="text-white/30 text-xs hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}