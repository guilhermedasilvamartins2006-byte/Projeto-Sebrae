export const DIVISORS_BY_WEEKLY_HOURS = {
  44: 220,
  42: 210,
  40: 200,
} as const;

export const WEEKLY_HOUR_SCENARIOS = [44, 42, 40] as const;

export type WeeklyHourScenario = (typeof WEEKLY_HOUR_SCENARIOS)[number];

export interface SimulationInputs {
  openingDays: number;
  openingHoursPerDay: number;
  requiredPeopleAtOnce: number;
  currentEmployees: number;
  averageMonthlySalary: number;
}

export interface ScenarioResult {
  weeklyHours: WeeklyHourScenario;
  divisor: number;
  requiredWeeklyHours: number;
  availableWeeklyHours: number;
  uncoveredHours: number;
  spareHours: number;
  fullTimeEquivalent: number;
  hourlyReference: number;
  grossSalaryEquivalent: number;
}

export interface SimulationResult {
  requiredWeeklyHours: number;
  scenarios: ScenarioResult[];
}

export type SimulationField = keyof SimulationInputs;

export const DEFAULT_SIMULATION_INPUTS: SimulationInputs = {
  openingDays: 7,
  openingHoursPerDay: 12,
  requiredPeopleAtOnce: 1,
  currentEmployees: 2,
  averageMonthlySalary: 1500,
};

export const SIMULATION_FIELD_RULES: Record<
  SimulationField,
  { label: string; min: number; max: number; step: number }
> = {
  openingDays: { label: "Dias aberto por semana", min: 1, max: 7, step: 1 },
  openingHoursPerDay: { label: "Horas aberto por dia", min: 1, max: 24, step: 0.5 },
  requiredPeopleAtOnce: { label: "Pessoas necessárias ao mesmo tempo", min: 1, max: 50, step: 1 },
  currentEmployees: { label: "Pessoas na equipe atual", min: 1, max: 100, step: 1 },
  averageMonthlySalary: { label: "Salário bruto mensal médio", min: 1, max: 100000, step: 0.01 },
};

export function validateSimulationField(field: SimulationField, value: number): string | undefined {
  const rule = SIMULATION_FIELD_RULES[field];

  if (!Number.isFinite(value) || value < rule.min || value > rule.max) {
    return `Informe um valor entre ${rule.min} e ${rule.max}.`;
  }

  const stepPosition = (value - rule.min) / rule.step;
  if (Math.abs(stepPosition - Math.round(stepPosition)) > 1e-7) {
    return `Use incrementos de ${rule.step}.`;
  }

  return undefined;
}

export function validateSimulationInputs(inputs: SimulationInputs): string[] {
  const errors: string[] = [];

  for (const [field, rule] of Object.entries(SIMULATION_FIELD_RULES) as [SimulationField, (typeof SIMULATION_FIELD_RULES)[SimulationField]][]) {
    const error = validateSimulationField(field, inputs[field]);
    if (error) {
      errors.push(`${rule.label}: ${error.charAt(0).toLowerCase()}${error.slice(1)}`);
    }
  }

  return errors;
}

export function calculateSimulation(inputs: SimulationInputs): SimulationResult | null {
  if (validateSimulationInputs(inputs).length > 0) {
    return null;
  }

  const requiredWeeklyHours =
    inputs.openingDays * inputs.openingHoursPerDay * inputs.requiredPeopleAtOnce;

  const scenarios = WEEKLY_HOUR_SCENARIOS.map((weeklyHours): ScenarioResult => {
    const divisor = DIVISORS_BY_WEEKLY_HOURS[weeklyHours];
    const availableWeeklyHours = inputs.currentEmployees * weeklyHours;
    const uncoveredHours = Math.max(0, requiredWeeklyHours - availableWeeklyHours);
    const spareHours = Math.max(0, availableWeeklyHours - requiredWeeklyHours);
    const fullTimeEquivalent = requiredWeeklyHours / weeklyHours;
    const hourlyReference = inputs.averageMonthlySalary / divisor;

    return {
      weeklyHours,
      divisor,
      requiredWeeklyHours,
      availableWeeklyHours,
      uncoveredHours,
      spareHours,
      fullTimeEquivalent,
      hourlyReference,
      // A proportional gross-wage reference only. It does not include payroll charges.
      grossSalaryEquivalent:
        (uncoveredHours / weeklyHours) * inputs.averageMonthlySalary,
    };
  });

  return { requiredWeeklyHours, scenarios };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatHours(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 1,
  }).format(value);
}
