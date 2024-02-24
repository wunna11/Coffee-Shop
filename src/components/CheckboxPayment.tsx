function CheckboxPayment({
  label,
  img,
  checked,
  value,
  onChange,
}: {
  label: string;
  img: string;
  checked: boolean;
  value: string;
  onChange: () => void;
}) {
  return (
    <div className="checkbox-wrapper">
      <ul>
        <li>
          <label className="custom-checkbox">
            <input
              type="checkbox"
              id="react-option"
              value={value}
              onChange={onChange}
              checked={checked}
              className="hidden"
            />
            <div
              className={`${
                checked == true ? "bg-primary-100 text-primary border border-primary-100" : "bg-gray-50"
              } flex justify-between items-center border rounded-lg p-2 cursor-pointer`}
            >
              <h3 className="font-bold">{label}</h3>
              <img src={img} className="w-8 h-8" />
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CheckboxPayment;
