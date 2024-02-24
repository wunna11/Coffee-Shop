function Checkbox({
  label,
  checked,
  value,
  onChange,
}: {
  label: string;
  checked: boolean;
  value: string;
  onChange: () => void;
}) {

  return (
    <div className="checkbox-wrapper">
      <ul className="flex space-x-2 relative">
        <li>
          <label className="custom-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              value={value}
              onChange={onChange}
              checked={checked}
              className="hidden"
            />
            <div
              className={`${
                checked == true
                  ? "bg-primary text-white"
                  : "bg-white text-primary-600"
              } border rounded-lg p-4 py-1 text-center cursor-pointer`}
            >
              {label}
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkbox;
