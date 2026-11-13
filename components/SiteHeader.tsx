import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";

const navigation = [
  { label: "Simulador", href: "#simulador" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#inicio" aria-label="Escala 5x2 — início">
          <BrandMark />
          <span className="brand__word">escala</span>
          <span className="brand__badge">5x2</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small button--nav" href="#simulador">
          Testar simulação <Icon name="arrow-up-right" size={17} />
        </a>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu de navegação">
            <Icon name="menu" size={22} />
          </summary>
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="mobile-nav__cta" href="#simulador">
              Testar simulação <Icon name="arrow-up-right" size={17} />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
