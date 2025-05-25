type CheckboxType = {
  checked: boolean;
  onChange: ()=>void;
}

export const Checkbox = ({checked, onChange}: CheckboxType) => {
  return (
    <input type="checkbox" checked={checked} onChange={onChange} />
  )
}