# Escala 5x2 — landing page e demonstração

Landing page em Next.js com uma simulação de cobertura de equipe inteiramente no navegador. A interface usa dados de exemplo e não envia nem persiste as informações digitadas.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Estrutura

- `app/`: rota inicial, layout, metadados e estilos globais.
- `components/`: seções da landing page e componentes reutilizáveis.
- `components/simulator/`: campos numéricos e cartões de cenário.
- `lib/simulator.ts`: tipos, validação e funções puras de cálculo.

## Lógica da demonstração

A necessidade semanal de cobertura é calculada por `dias aberto × horas por dia × pessoas necessárias ao mesmo tempo`. A capacidade é `pessoas na equipe × horas semanais do cenário`. A diferença mostra horas descobertas ou capacidade excedente.

Os divisores salariais e a projeção proporcional são referências didáticas. A demonstração não valida escala, encargos, convenções coletivas ou conformidade trabalhista.

## Decisões de implementação

- Componentes estáticos usam o App Router e permanecem como Server Components por padrão.
- `SimulatorSection` é o limite interativo do cliente; seus valores ficam em estado local.
- Não há API, autenticação, banco de dados, analytics ou formulário de captação.
- Estilos são CSS próprio, sem biblioteca de componentes.
