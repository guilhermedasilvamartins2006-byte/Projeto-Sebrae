import Icon from "@/components/ui/Icon";

const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];

export default function HeroSection() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="status-dot" />
            Planeje a transição com clareza
          </div>
          <h1>
            Sua operação pronta para uma nova <span>escala.</span>
          </h1>
          <p className="hero__description">
            Entenda a cobertura da equipe, compare cenários e veja onde cada hora faz diferença
            antes de mudar a rotina do seu negócio.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#simulador">
              Experimentar simulador <Icon name="arrow-right" size={18} />
            </a>
            <a className="text-link" href="#como-funciona">
              Ver como funciona <Icon name="arrow-down" size={16} />
            </a>
          </div>

          <div className="hero__signals" aria-label="Características da demonstração">
            <span><Icon name="check" size={16} /> Sem cadastro</span>
            <span><Icon name="check" size={16} /> Dados no seu navegador</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Prévia visual do painel de escala">
          <div className="hero-art__glow" />
          <div className="hero-art__label"><span /> UM NOVO OLHAR PARA A SUA EQUIPE</div>
          <div className="hero-card hero-card--main">
            <div className="hero-card__topline">
              <div>
                <p className="hero-card__overline">Visão da semana</p>
                <h2>Sua cobertura</h2>
              </div>
              <span className="hero-card__icon"><Icon name="calendar" size={18} /></span>
            </div>
            <div className="hero-card__metric-row">
              <div>
                <span className="hero-card__metric">84<span>h</span></span>
                <span className="hero-card__caption">horas de operação</span>
              </div>
              <div className="hero-card__divider" />
              <div>
                <span className="hero-card__metric hero-card__metric--green">42<span>h</span></span>
                <span className="hero-card__caption">por pessoa / semana</span>
              </div>
            </div>
            <div className="week-strip" aria-hidden="true">
              {weekDays.map((day, index) => (
                <div className={`week-strip__day ${index === 5 || index === 6 ? "week-strip__day--rest" : ""}`} key={`${day}-${index}`}>
                  <span>{day}</span>
                  <i />
                </div>
              ))}
            </div>
            <div className="hero-card__foot">
              <span><i className="legend-dot legend-dot--work" /> Cobertura planejada</span>
              <span><i className="legend-dot legend-dot--rest" /> Folga</span>
            </div>
          </div>

          <div className="hero-float hero-float--top">
            <span className="hero-float__icon hero-float__icon--green"><Icon name="chart" size={18} /></span>
            <span><strong>Compare cenários</strong><small>Uma decisão de cada vez</small></span>
            <Icon name="arrow-up-right" size={16} className="hero-float__arrow" />
          </div>
          <div className="hero-float hero-float--bottom">
            <span className="hero-float__avatar">2</span>
            <span><strong>Equipe no centro</strong><small>Planejamento mais claro</small></span>
            <span className="hero-float__sparkle"><Icon name="sparkles" size={17} /></span>
          </div>
          <div className="hero-art__orb hero-art__orb--one" />
          <div className="hero-art__orb hero-art__orb--two" />
        </div>
      </div>
      <div className="hero__bottom shell">
        <span>UMA DEMONSTRAÇÃO PARA QUEM FAZ A OPERAÇÃO ACONTECER</span>
        <div className="hero__bottom-line" />
        <span>DA ESCALA ATUAL A NOVAS POSSIBILIDADES</span>
      </div>
    </section>
  );
}
