import React, { useEffect } from "react";
import { CheckboxContent } from "./styles"

interface CheckboxProps {
  title: string;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
}

const Checkbox = ({ title, selected, onChange }: CheckboxProps) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  useEffect(() => {
    setChecked(selected ?? false);
  }, [selected])

  const handleToggle = () => {
    setChecked(!checked);
    onChange?.(!checked);
  }

  return <CheckboxContent selected={checked} onClick={handleToggle}>
    <input type="checkbox" checked={checked} />
    <label>{title}</label>
  </CheckboxContent>;
};

export default Checkbox;
