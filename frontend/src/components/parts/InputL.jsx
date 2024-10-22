export const InputL = ({ placeholder, name }) => {
  return (
    <input
      type="text"
      className="flex items-center self-stretch px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 text-neutral not-italic text-base font-roboto"
      placeholder={placeholder}
      name={name}
    />
  );
};
