import { ChevronLiftIcon, ChevronRightIcon } from "../svg";

export const RecordsRight = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="flex justify-between border">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg w-8 h-8 bg-base200">
              <ChevronLiftIcon />
            </div>
            <p className="font-roboto font-normal not-italic text-base">
              Last 30 Days
            </p>
            <div className="flex items-center justify-center rounded-lg w-8 h-8 bg-base200">
              <ChevronRightIcon />
            </div>
          </div>
          <div className="">
            <div className="menu">
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </div>
          </div>
        </div>
        <div className="border">m</div>
      </div>
    </div>
  );
};
