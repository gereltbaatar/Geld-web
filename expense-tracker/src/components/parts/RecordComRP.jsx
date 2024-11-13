import { HouseIcon } from "../svg";

const formatTime = (dateString) => {
  const date = new Date(dateString); // ISO 8601 формат руу хөрвүүлэх

  // Цагийг авах
  const hours = String(date.getUTCHours()).padStart(2, "0"); // UTC цаг
  const minutes = String(date.getUTCMinutes()).padStart(2, "0"); // UTC минут

  return `${hours}:${minutes}`; // Формат: HH:MM
};

export const RecordComRP = ({ items }) => {
  const originalTime = items?.createdat; // ISO 8601 формат
  const formattedTime = formatTime(originalTime);

  return (
    <div className="py-3 px-6 flex justify-between border border-base-200 bg-base-100 rounded-xl">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-[50%] bg-blue flex items-center justify-center">
          <HouseIcon />
        </div>
        <div className="">
          <p className="font-roboto font-normal not-italic text-base">
            {items?.name}
          </p>
          <p className="font-roboto font-normal not-italic text-xs text-gray-500">
            {formattedTime}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p
          className={`font-roboto font-bold not-italic text-base ${
            items?.transaction_type === "INC"
              ? "text-[#23E01F]"
              : "text-[#F54949]"
          } `}
        >
          {items?.transaction_type == "INC" ? "+" : "-"}
        </p>
        <p
          className={`font-roboto font-bold not-italic text-base ${
            items?.transaction_type === "INC"
              ? "text-[#23E01F]"
              : "text-[#F54949]"
          }`}
        >
          {items?.amount}
          <span>₮</span>
        </p>
      </div>
    </div>
  );
};
