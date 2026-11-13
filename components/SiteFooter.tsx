import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <a className="brand brand--footer" href="#inicio" aria-label="Escala 5x2 — voltar ao início">
              <BrandMark />
              <span className="brand__word">escala</span>
              <span className="brand__badge">5x2</span>
            </a>
            <p>Mais clareza para pensar a próxima escala da sua operação.</p>
          </div>
          <div className="site-footer__links">
            <a href="#simulador">Simulador</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#inicio">Voltar ao topo <Icon name="arrow-up-right" size={15} /></a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 Escala 5x2 · Demonstração de produto</span>
          <span>Resultados ilustrativos para fins de exploração.</span>
        </div>
      </div>
    </footer>
  );
}
