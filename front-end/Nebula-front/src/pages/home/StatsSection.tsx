import Cards from "../../components/layout/Cards";

const stats = [
  { label: "Servidores ativos", value: "1240" },
  { label: "Países", value: "62" },
  { label: "Velocidade média", value: "920 Mbps" },
  { label: "Usuários protegidos", value: "2,4m" },
];

export default function StatsSection() {
  return (
    <div className="flex gap-4 px-20">
      {stats.map((stat) => (
        <Cards key={stat.label} className="">
          <p>{stat.label}</p>
          <span className="font-bold text-lg">{stat.value}</span>
        </Cards>
      ))}
    </div>
  );
}