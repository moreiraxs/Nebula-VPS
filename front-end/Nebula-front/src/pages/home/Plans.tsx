import Cards from "../../components/layout/Cards";

const PlansHome = [
  {
    name: "Mensal",
    price: "US$ 9,99",
    period: "/mês",
    description: "3 dispositivos\nSuporte por e-mail",
    highlighted: false,
  },
  {
    name: "Anual",
    price: "US$ 4,99",
    period: "/mês",
    description: "10 dispositivos\nSuporte prioritário\nServidores dedicados",
    highlighted: false,
  },
  {
    name: "Bienal",
    price: "US$ 2,99",
    period: "/mês",
    description: "10 dispositivos\nMelhor custo total",
    highlighted: false,
  },
];

export default function PlansSection() {
  return (
    <section className="px-20 mt-12 mb-20 ">
      <h2 className="text-3xl font-bold text-white mb-6">
        Planos para todos os perfis
      </h2>

      <div className="flex gap-4 ">
        {PlansHome.map((plan) => (
          <Cards
            key={plan.name}
            className={`w-56 h-82 bg-white/16 p-6 gap-4 flex justify-start transition-colors
              ${plan.highlighted
                ? "border-2 border-[#85B7EB]"
                : "border-white/10 hover:border-blue-400"
              }`}
          >
            {plan.highlighted && (
              <span className="bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1 rounded-full font-medium">
                Mais popular
              </span>
            )}

            <p className="text-white font-bold">{plan.name}</p>

            <p className="text-white text-2xl font-bold">
              {plan.price}
              <span className="text-sm font-normal text-white/70">{plan.period}</span>
            </p>

            <p className="text-sm text-white/70 whitespace-pre-line">
              {plan.description}
            </p>

            <button className="bg-[#fff] w-44 hover:bg-[#F1EFE8] text-black px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer">
              Assinar
            </button>
          </Cards>
        ))}
      </div>
    </section>
  );
}