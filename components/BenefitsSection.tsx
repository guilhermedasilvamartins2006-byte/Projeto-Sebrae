import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: "clock" as const,
    eyebrow: "Tempo",
    title: "Enxergue a operação por inteiro",
    description: "Coloque as horas de funcionamento e a necessidade de cobertura no mesmo quadro.",
    className: "benefit-card--mint",
  },
  {
    icon: "chart" as const,
    eyebrow: "Cenários",
    title: "Compare antes de escolher",
    description: "Veja como a capacidade muda em cada jornada e descubra onde está a diferença.",
    className: "benefit-card--blue",
  },
  {
    icon: "shield" as const,
    eyebrow: "Transparência",
    title: "Entenda as premissas",
    description: "Cada estimativa deixa visíveis os valores usados para você conferir os números.",
    className: "benefit-card--cream",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section benefits-section section-anchor" id="beneficios">
      <div className="shell benefits-section__inner">
        <div className="benefits-section__intro">
          <SectionHeading
            eyebrow="Pensado para pequenos negócios"
            title="Decisões melhores começam com uma visão simples."
            description="A demonstração organiza os dados que mais pesam na rotina de quem monta escalas."
          />
          <a className="text-link text-link--dark" href="#simulador">
            Explorar o simulador <Icon name="arrow-right" size={17} />
          </a>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className={`benefit-card ${benefit.className}`} key={benefit.eyebrow}>
              <div className="benefit-card__icon"><Icon name={benefit.icon} size={22} /></div>
              <p className="eyebrow">{benefit.eyebrow}</p>
              <h3>{benefit.title}</h3>
              <p className="benefit-card__description">{benefit.description}</p>
              <span className="benefit-card__decor" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
