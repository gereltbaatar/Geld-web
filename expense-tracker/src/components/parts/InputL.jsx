export const InputL = ({
  placeholder,
  name,
  onChange,
  value,
  type,
  id,
  htmlFor,
  required,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="block text-gray-700"></label>
      <input
        id={id}
        type={type}
        className="w-full flex items-center self-stretch px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 text-neutral not-italic text-base font-roboto outline-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        required={required}
      />
    </div>
  );
};
