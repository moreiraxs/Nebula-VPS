
import Cards from "../../components/layout/Cards";
import { plans } from "./Plansfuture";
import { Lock, EyeOff, Laptop, Gauge } from "lucide-react";

export default function PlansSection() {
  return (
    <section id="planos" className="min-h-screen px-20 py-16">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Planos para todos os perfis</h2>
        <p className="text-gray-400 text-sm">Garantia de 30 dias ou seu dinheiro de volta.</p>
      </div>

      <div className="flex gap-6 items-stretch justify-center">
        {plans.map((plan) => (
          <Cards
            key={plan.name}
            className={`w-64 gap-3 ${
              
               "border-white/10 hover:border-blue-400" 
            
            }`}
          >
            {plan.highlighted && (
              <span className="bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1 rounded-full font-medium self-start">
                Mais popular
              </span>
            )}

            <p className="text-white font-bold">{plan.name}</p>

            <p className="text-white text-2xl font-bold">
              {plan.price}
              <span className="text-sm font-normal text-white/70">{plan.period}</span>
            </p>

            {plan.savings && (
              <p className="text-[#5DCAA5] text-xs">{plan.savings}</p>
            )}

            <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
              {plan.features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 text-sm">
                  <span className={feature.included ? "text-white/70" : "text-white/30"}>
                    {feature.included ? "✓" : "✗"} {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button className={`mt-auto w-full py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
              plan.highlighted
                ? "bg-white text-black hover:bg-[#F1EFE8]"
                : "bg-transparent border border-white/20 text-white hover:bg-white/5"
            }`}>
              Assinar
            </button>
          </Cards>
        ))}
      </div>

       <div className="flex items-center justify-center mt-12 p-12">
        <Lock className=""/>
       <p className=" flex justify-center"> Pagamento seguro · Cancele quando quiser · Sem taxas ocultas</p>
    </div>
    </section>
  );
}
      