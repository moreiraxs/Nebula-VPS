import { Lock, EyeOff, Laptop, Gauge } from "lucide-react";
import Cards from "../../components/layout/Cards";

const features = [
  {
    icon: Lock,
    title: "Criptografia AES-256",
    description: "Padrão usado por bancos e governos",
  },
  {
    icon: EyeOff,
    title: "Política zero-log",
    description: "Nenhum registro de atividade é mantido",
  },
  {
    icon: Laptop,
    title: "Até 10 dispositivos",
    description: "Proteja toda sua casa ou equipe",
  },
  {
    icon: Gauge,
    title: "Velocidade sem limites",
    description: "Streaming e jogos sem travar",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-20 mt-12">
      <h2 className="text-3xl font-bold text-white mb-6">
        Por que escolher a Nebula
      </h2>

      <div className="flex gap-4">
        {features.map((feature) => (
          <Cards key={feature.title} className="w-42 h-38 bg-white/16 border-white/10 p-4">
            <feature.icon className="text-[#85B7EB] w-8 h-8 mb-2" />
            <p className="text-white font-bold">{feature.title}</p>
            <p className="text-sm text-white/70">{feature.description}</p>
          </Cards>
        ))}
      </div>
    </section>
  );
}