import { useState } from "react";
import Cards from "../../components/layout/Cards";

const servidores = [
  { pais: "Brasil", cidade: "São Paulo", ping: "8 ms", regiao: "América" },
  { pais: "Estados Unidos", cidade: "Nova York", ping: "142 ms", regiao: "América" },
  { pais: "Estados Unidos", cidade: "Los Angeles", ping: "178 ms", regiao: "América" },
  { pais: "Canadá", cidade: "Toronto", ping: "155 ms", regiao: "América" },
  { pais: "Argentina", cidade: "Buenos Aires", ping: "32 ms", regiao: "América" },
  { pais: "Alemanha", cidade: "Frankfurt", ping: "12 ms", regiao: "Europa" },
  { pais: "Holanda", cidade: "Amsterdã", ping: "18 ms", regiao: "Europa" },
  { pais: "Reino Unido", cidade: "Londres", ping: "24 ms", regiao: "Europa" },
  { pais: "França", cidade: "Paris", ping: "21 ms", regiao: "Europa" },
  { pais: "Suíça", cidade: "Zurique", ping: "19 ms", regiao: "Europa" },
  { pais: "Singapura", cidade: "Singapura", ping: "220 ms", regiao: "Ásia" },
  { pais: "Japão", cidade: "Tóquio", ping: "265 ms", regiao: "Ásia" },
  { pais: "Austrália", cidade: "Sydney", ping: "310 ms", regiao: "Oceania" },
  { pais: "Coreia do Sul", cidade: "Seul", ping: "288 ms", regiao: "Ásia" },
];

const regioes = ["América", "Europa", "Ásia", "Oceania"];

export const Paises = () => {
  const [busca, setBusca] = useState("");

  const servidoresFiltrados = servidores.filter((servidor) =>
    servidor.pais.toLowerCase().includes(busca.toLowerCase()) ||
    servidor.cidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section id="servidores" className=" px-20 ">
      <div className="flex flex-col mb-6">
        <input
          type="text"
          placeholder="Buscar país ou cidade..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className='bg-white/16 w-full h-12
                 rounded-lg border border-white/10 text-sm text-gray-300
                 size-14 text-lg font-bold px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
                 '
        />
      </div>

      <div className="flex flex-col gap-8">
        {regioes.map((regiao) => {
          const lista = servidoresFiltrados.filter((s) => s.regiao === regiao);
          if (lista.length === 0) return null;

          return (
            <div key={regiao}>
              <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">
                {regiao}
              </p>
              <div className="flex flex-col gap-2">
                {lista.map((servidor) => (
                  <Cards
                    key={`${servidor.pais}-${servidor.cidade}`}
                    className="w-full flex-row justify-between items-center border-white/10"
                  >
                    <span className="text-white text-sm">{servidor.pais} — {servidor.cidade}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 text-xs font-mono">{servidor.ping}</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                  </Cards>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};