"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import NumberField from "@/components/simulator/NumberField";
import ScenarioCard from "@/components/simulator/ScenarioCard";
import {
  calculateSimulation,
  DEFAULT_SIMULATION_INPUTS,
  formatHours,
  SIMULATION_FIELD_RULES,
  validateSimulationInputs,
  validateSimulationField,
  type SimulationField,
  type SimulationInputs,
} from "@/lib/simulator";

const fieldOrder: SimulationField[] = [
  "openingDays",
  "openingHoursPerDay",
  "requiredPeopleAtOnce",
  "currentEmployees",
  "averageMonthlySalary",
];

const fieldPresentation: Record<SimulationField, { id: string; label: string; prefix?: string; suffix?: string; description?: string }> = {
  openingDays: {
    id: "opening-days",
    label: "Dias aberto por semana",
    suffix: "dias",
    description: "De 1 a 7 dias por semana.",
  },
  openingHoursPerDay: {
    id: "opening-hours",
    label: "Horas de funcionamento por dia",
    suffix: "h / dia",
    description: "Use intervalos de meia hora, se precisar.",
  },
  requiredPeopleAtOnce: {
    id: "required-people",
    label: "Pessoas necessárias ao mesmo tempo",
    suffix: "pessoas",
    description: "Quantas pessoas precisam estar trabalhando em cada horário.",
  },
  currentEmployees: {
    id: "current-employees",
    label: "Pessoas na equipe atual",
    suffix: "pessoas",
    description: "Tamanho da equipe considerada nesta simulação.",
  },
  averageMonthlySalary: {
    id: "average-salary",
    label: "Salário bruto mensal médio",
    prefix: "R$",
    description: "Valor demonstrativo usado na referência salarial.",
  },
};

export default function SimulatorSection() {
  const [inputs, setInputs] = useState<SimulationInputs>(DEFAULT_SIMULATION_INPUTS);
  const validationErrors = useMemo(() => validateSimulationInputs(inputs), [inputs]);
  const result = useMemo(() => calculateSimulation(inputs), [inputs]);

  function updateField(field: SimulationField, value: number) {
    setInputs((current) => ({ ...current, [field]: value }));
  }

  function resetInputs() {
    setInputs({ ...DEFAULT_SIMULATION_INPUTS });
  }

  return (
    <section className="section simulator-section section-anchor" id="simulador">
      <div className="shell">
        <SectionHeading
          eyebrow="Simulador demonstrativo"
          title="Comece por um exemplo. Ajuste para a sua realidade."
          description="Mude os dados da loja e veja como a necessidade de cobertura se compara à capacidade da equipe."
          align="center"
        />

        <div className="simulator-shell">
          <div className="simulator-intro-bar">
            <div className="simulator-intro-bar__icon"><Icon name="sparkles" size={20} /></div>
            <div>
              <strong>Uma loja, várias possibilidades</strong>
              <span>Os campos já vêm preenchidos com um exemplo fictício.</span>
            </div>
            <button className="reset-button" type="button" onClick={resetInputs}>
              <Icon name="refresh" size={16} /> Restaurar exemplo
            </button>
          </div>

          <div className="simulator-layout">
            <div className="simulator-form-panel">
              <div className="simulator-panel-heading">
                <div className="simulator-step-number">01</div>
                <div>
                  <p className="eyebrow">Sua operação</p>
                  <h3>O que precisamos saber?</h3>
                </div>
              </div>
              <div className="simulator-fields">
                {fieldOrder.map((field) => {
                  const presentation = fieldPresentation[field];
                  const rule = SIMULATION_FIELD_RULES[field];
                  const value = inputs[field];
                  const error = validateSimulationField(field, value);

                  return (
                    <NumberField
                      key={field}
                      id={presentation.id}
                      label={presentation.label}
                      min={rule.min}
                      max={rule.max}
                      step={rule.step}
                      value={value}
                      prefix={presentation.prefix}
                      suffix={presentation.suffix}
                      description={presentation.description}
                      error={error}
                      onValueChange={(nextValue) => updateField(field, nextValue)}
                    />
                  );
                })}
              </div>
              <div className="simulator-data-note">
                <span className="simulator-data-note__icon"><Icon name="shield" size={17} /></span>
                <p>Seus valores ficam apenas nesta página durante a demonstração. Nada é enviado ou salvo.</p>
              </div>
            </div>

            <div className="simulator-results-panel" aria-live="polite">
              <div className="simulator-panel-heading simulator-panel-heading--results">
                <div className="simulator-step-number simulator-step-number--green">02</div>
                <div>
                  <p className="eyebrow">Visão comparativa</p>
                  <h3>Veja o que muda em cada cenário</h3>
                </div>
              </div>

              {result ? (
                <>
                  <div className="result-summary">
                    <div className="result-summary__icon"><Icon name="clock" size={19} /></div>
                    <p>A operação precisa de <strong>{formatHours(result.requiredWeeklyHours)} horas</strong> de cobertura por semana.</p>
                  </div>
                  <div className="scenario-grid">
                    {result.scenarios.map((scenario) => (
                      <ScenarioCard key={scenario.weeklyHours} result={scenario} isHighlighted={scenario.weeklyHours === 42} />
                    ))}
                  </div>
                  <div className="results-advice">
                    <span><Icon name="chart" size={18} /></span>
                    <p><strong>Como interpretar:</strong> reorganizar os horários muda a distribuição das horas. Se a equipe tiver menos capacidade total que a operação precisa, ainda haverá horas descobertas.</p>
                  </div>
                </>
              ) : (
                <div className="simulator-validation" role="alert">
                  <span className="simulator-validation__icon"><Icon name="shield" size={18} /></span>
                  <div>
                    <strong>Revise os valores para continuar</strong>
                    <ul>
                      {validationErrors.map((error) => <li key={error}>{error}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="simulator-disclaimer">
            Simulação simplificada para demonstração. A referência salarial não inclui encargos e não substitui análise de folha,
            convenção coletiva ou orientação profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
