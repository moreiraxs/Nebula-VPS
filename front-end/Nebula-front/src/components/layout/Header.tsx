import shield from "../../assets/shield.png"
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Recursos", href: "/" },
  { label: "Servidores", href: "/servidores" },
  { label: "Planos", href: "/planos" },
  { label: "Suporte", href: "/suporte" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 text-white border-b border-white/20">
      <div className="flex items-center gap-2">
        <img src={shield} className="h-10 w-10" alt="Nebula VPS Logo" />
        <h2 className="text-xl font-bold cursor-pointer">Nebula VPS</h2>
      </div>

      <nav>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="text-white hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="bg-[#2C2C2A] hover:bg-[#F1EFE8] hover:text-black text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer">
        Entrar
      </button>
    </header>
  );
}