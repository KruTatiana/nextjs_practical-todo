type CheckboxType = {
  checked: boolean;
  onChange: () => void;
  label?: boolean;
};

export const Checkbox = ({ checked, onChange, label }: CheckboxType) => {
  return (
    <label className="inline-flex items-start cursor-pointer select-none pt-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div
        className={`w-5 h-5 rounded-md border-2 border-[var(--color-checkbox-bg)] flex items-center justify-center transition 
        ${
          checked
            ? "bg-[var(--color-checkbox-bg)]"
            : "bg-[var(--color-checkbox)]"
        }`}
      >
        <svg
          className={`w-3 h-3 text-[var(--color-checkbox)] transition-transform ${
            checked ? "scale-100" : "scale-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};
