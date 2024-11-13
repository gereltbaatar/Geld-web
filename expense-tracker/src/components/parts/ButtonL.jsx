export const ButtonL = ({ text, type }) => {
  return (
    <button
      type={type}
      className="px-4 h-12 bg-blue rounded-[20px] text-white font-roboto font-normal not-italic text-xl"
    >
      {text}
    </button>
  );
};
