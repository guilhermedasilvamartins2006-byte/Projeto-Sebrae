import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: "users" as const,
    title: "Conte como funciona hoje",
    description: "Informe os dias de operação, o tamanho da equipe e a cobertura que o negócio precisa.",
  },
  {
    number: "02",
    icon: "chart" as const,
    title: "Compare as jornadas",
    description: "Veja a capacidade semanal nos cenários de 44, 42 e 40 horas por pessoa.",
  },
  {
    number: "03",
    icon: "calendar" as const,
    title: "Encontre um caminho",
    description: "Use os números para avaliar a redistribuição dos horários e a cobertura adicional.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section how-section section-anchor" id="como-funciona">
      <div className="shell">
        <SectionHeading
          eyebrow="Um passo de cada vez"
          title="Clareza para planejar. Espaço para decidir."
          description="Uma demonstração simples para transformar uma dúvida operacional em próximos passos concretos."
          align="center"
        />

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-card__top">
                <span className="step-card__number">{step.number}</span>
                <span className="step-card__icon"><Icon name={step.icon} size={21} /></span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
