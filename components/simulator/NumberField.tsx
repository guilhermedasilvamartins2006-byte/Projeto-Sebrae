import type { ChangeEvent } from "react";

interface NumberFieldProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  description?: string;
  error?: string;
  onValueChange: (value: number) => void;
}

export default function NumberField({
  id,
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  description,
  error,
  onValueChange,
}: NumberFieldProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    onValueChange(inputValue === "" ? Number.NaN : event.currentTarget.valueAsNumber);
  }

  return (
    <div className={`number-field ${error ? "number-field--invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <div className="number-field__control">
        {prefix ? <span className="number-field__affix">{prefix}</span> : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          min={min}
          max={max}
          step={step}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : description ? `${id}-description` : undefined}
          onChange={handleChange}
        />
        {suffix ? <span className="number-field__affix">{suffix}</span> : null}
      </div>
      {error ? <p className="number-field__message" id={`${id}-error`}>{error}</p> : null}
      {!error && description ? <p className="number-field__description" id={`${id}-description`}>{description}</p> : null}
    </div>
  );
}
