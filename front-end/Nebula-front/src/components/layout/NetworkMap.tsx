export default function NetworkMap() {
  return (
    <svg viewBox="0 0 300 240" width="100%" style={{ maxWidth: 600 }} aria-hidden="true">
      {/* Linhas de conexão (servidores inativos) */}
      <line x1="150" y1="120" x2="60" y2="40" stroke="#85B7EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="150" y1="120" x2="260" y2="140" stroke="#85B7EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="150" y1="120" x2="180" y2="210" stroke="#85B7EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="150" y1="120" x2="40" y2="170" stroke="#85B7EB" strokeWidth="1.5" opacity="0.5" />

      {/* Linha de conexão ativa (destacada) */}
      <line x1="150" y1="120" x2="240" y2="40" stroke="#5DCAA5" strokeWidth="2" />

      {/* Servidor ativo - Alemanha */}
      <circle cx="240" cy="40" r="6" fill="#5DCAA5" />
      <text x="240" y="26" textAnchor="middle" fontSize="11" fill="#5DCAA5" fontWeight="bold">DE</text>

      {/* Servidor - Brasil */}
      <circle cx="60" cy="40" r="6" fill="#378ADD" />
      <text x="60" y="26" textAnchor="middle" fontSize="11" fill="#85B7EB" fontWeight="bold">BR</text>

      {/* Servidor - Singapura */}
      <circle cx="260" cy="140" r="6" fill="#378ADD" />
      <text x="278" y="144" textAnchor="start" fontSize="11" fill="#85B7EB" fontWeight="bold">SG</text>

      {/* Servidor - Japão */}
      <circle cx="180" cy="210" r="6" fill="#378ADD" />
      <text x="180" y="226" textAnchor="middle" fontSize="11" fill="#85B7EB" fontWeight="bold">JP</text>

      {/* Servidor - EUA */}
      <circle cx="40" cy="170" r="6" fill="#378ADD" />
      <text x="40" y="186" textAnchor="middle" fontSize="11" fill="#85B7EB" fontWeight="bold">US</text>

      {/* Nó central - usuário */}
      <circle cx="150" cy="120" r="11" fill="#7F77DD" />
      <text x="150" y="100" textAnchor="middle" fontSize="13" fontWeight="600" fill="#C9C5F5">Você</text>
    </svg>
  );
}