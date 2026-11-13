import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const rows = [
  {
    name: "Equipe A",
    color: "schedule-row__dot--blue",
    cells: ["08–16", "08–16", "08–16", "08–16", "08–16", "Folga", "Folga"],
  },
  {
    name: "Equipe B",
    color: "schedule-row__dot--green",
    cells: ["12–20", "12–20", "Folga", "Folga", "12–20", "12–20", "12–20"],
  },
];

export default function SchedulePreview() {
  return (
    <section className="schedule-section">
      <div className="shell schedule-section__grid">
        <div className="schedule-section__copy">
          <p className="eyebrow">Uma semana, muitas possibilidades</p>
          <h2>Organize os horários com a rotina da equipe à vista.</h2>
          <p>
            Esta prévia mostra como uma escala semanal pode aparecer no produto. Os horários são
            fictícios e servem apenas para ilustrar a visualização.
          </p>
          <div className="schedule-note">
            <span><Icon name="calendar" size={18} /></span>
            <p>Uma escala real depende das regras aplicáveis à empresa e da revisão de um profissional.</p>
          </div>
        </div>

        <div className="schedule-board" aria-label="Exemplo ilustrativo de uma escala semanal">
          <div className="schedule-board__header">
            <div>
              <p className="schedule-board__kicker">EXEMPLO VISUAL</p>
              <h3>Semana da equipe</h3>
            </div>
            <span className="schedule-board__period">5 dias + 2 folgas</span>
          </div>
          <div className="schedule-grid" role="table" aria-label="Horários demonstrativos da equipe">
            <div className="schedule-grid__head schedule-grid__team" role="columnheader">Equipe</div>
            {days.map((day) => <div className="schedule-grid__head" role="columnheader" key={day}>{day}</div>)}
            {rows.map((row) => (
              <div className="schedule-grid__row" role="row" key={row.name}>
                <div className="schedule-grid__team" role="rowheader">
                  <i className={`schedule-row__dot ${row.color}`} />{row.name}
                </div>
                {row.cells.map((cell, index) => (
                  <div className={`schedule-grid__cell ${cell === "Folga" ? "schedule-grid__cell--rest" : ""}`} role="cell" key={`${row.name}-${index}`}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="schedule-board__legend">
            <span><i className="legend-dot legend-dot--work" /> Horário demonstrativo</span>
            <span><i className="legend-dot legend-dot--rest" /> Folga</span>
          </div>
        </div>
      </div>
    </section>
  );
}
