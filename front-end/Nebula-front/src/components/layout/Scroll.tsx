import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força a janela a rolar para o topo (X: 0, Y: 0) instantaneamente
    window.scrollTo(0, 0);
  }, [pathname]); // Executa toda vez que a rota (caminho) mudar

  return null; // Esse componente não renderiza nada visualmente
}