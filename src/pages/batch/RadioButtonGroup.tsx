import { useState } from "react";

export function RadioButtonGroup({
  options,
  onChange,
}: {
  options: string[];
  onChange: (option: string) => void;
}) {
  const [selected, setSelected] = useState(options[0]);
  return options.map((option) => (
    <label key={option}>
      <input
        type="radio"
        value={option}
        checked={selected === option}
        onChange={(ev) => {
          setSelected(ev.target.value);
          onChange(ev.target.value);
        }}
      />
      {option}
    </label>
  ));
}

export default RadioButtonGroup;
