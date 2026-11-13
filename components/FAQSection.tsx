import SectionHeading from "@/components/ui/SectionHeading";

const questions = [
  {
    question: "Preciso informar dados reais da minha empresa?",
    answer:
      "Não. A demonstração abre com dados fictícios e os valores editados ficam apenas no navegador durante o uso. Eles não são enviados nem salvos.",
  },
  {
    question: "Os resultados são um cálculo oficial de folha?",
    answer:
      "Não. As referências de custo são simplificadas e servem para explorar cenários. Encargos, convenções coletivas e regras específicas precisam ser verificados com um profissional.",
  },
  {
    question: "O simulador confirma se uma escala está dentro da lei?",
    answer:
      "Esta versão não valida nem garante conformidade trabalhista. Ela demonstra relações de cobertura e capacidade; uma escala real depende da legislação aplicável, dos acordos e das condições de cada empresa.",
  },
  {
    question: "O que acontece se a equipe tiver menos horas do que a operação precisa?",
    answer:
      "A demonstração mostra a diferença semanal. Redistribuir os mesmos horários pode mudar quando a equipe trabalha, mas não aumenta o total de horas disponíveis.",
  },
];

export default function FAQSection() {
  return (
    <section className="section faq-section section-anchor" id="duvidas">
      <div className="shell faq-section__grid">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Transparência faz parte da experiência."
            description="Veja o que esta demonstração pode ajudar a entender — e o que precisa de análise especializada."
          />
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
