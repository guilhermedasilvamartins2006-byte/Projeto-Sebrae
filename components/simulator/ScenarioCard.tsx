import Icon from "@/components/ui/Icon";
import { formatCurrency, formatHours, type ScenarioResult } from "@/lib/simulator";

interface ScenarioCardProps {
  result: ScenarioResult;
  isHighlighted?: boolean;
}

const scenarioTitles: Record<ScenarioResult["weeklyHours"], string> = {
  44: "Referência atual",
  42: "Etapa de transição",
  40: "Etapa final",
};

export default function ScenarioCard({ result, isHighlighted = false }: ScenarioCardProps) {
  const hasGap = result.uncoveredHours > 0;
  const hasSpare = result.spareHours > 0;
  const coveragePercent = Math.min(
    100,
    (result.availableWeeklyHours / result.requiredWeeklyHours) * 100,
  );

  const statusLabel = hasGap
    ? `Faltam ${formatHours(result.uncoveredHours)}h por semana`
    : hasSpare
      ? `Folga de ${formatHours(result.spareHours)}h por semana`
      : "Cobertura no limite";

  return (
    <article className={`scenario-card ${isHighlighted ? "scenario-card--highlighted" : ""}`}>
      <div className="scenario-card__top">
        <div>
          <p className="scenario-card__eyebrow">{scenarioTitles[result.weeklyHours]}</p>
          <h3>{result.weeklyHours}<span>h</span><small> / semana</small></h3>
        </div>
        <span className={`scenario-card__status ${hasGap ? "scenario-card__status--warning" : ""}`}>
          <i />{statusLabel}
        </span>
      </div>

      <div className="scenario-card__capacity">
        <div>
          <span>Capacidade da equipe</span>
          <strong>{formatHours(result.availableWeeklyHours)}<small>h</small></strong>
        </div>
        <div>
          <span>Necessidade da operação</span>
          <strong>{formatHours(result.requiredWeeklyHours)}<small>h</small></strong>
        </div>
      </div>

      <div
        className="scenario-card__progress"
        role="progressbar"
        aria-label={`Cobertura da equipe para ${result.weeklyHours} horas semanais`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(coveragePercent)}
      >
        <span className={hasGap ? "scenario-card__progress-fill--warning" : ""} style={{ width: `${coveragePercent}%` }} />
      </div>
      <div className="scenario-card__details">
        <span><Icon name="users" size={15} /> {formatHours(result.fullTimeEquivalent)} pessoas equivalentes</span>
        <span>Hora de referência: {formatCurrency(result.hourlyReference)}</span>
      </div>
      {hasGap ? (
        <div className="scenario-card__estimate">
          <span>Salário bruto proporcional estimado</span>
          <strong>{formatCurrency(result.grossSalaryEquivalent)}<small> / mês</small></strong>
        </div>
      ) : (
        <div className="scenario-card__estimate scenario-card__estimate--covered">
          <span>Estimativa salarial</span>
          <strong>Sem déficit de horas</strong>
        </div>
      )}
    </article>
  );
}
