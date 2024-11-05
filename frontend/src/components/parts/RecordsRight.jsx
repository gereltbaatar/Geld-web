import { RecordComRP } from ".";
import { ChevronLiftIcon, ChevronRightIcon } from "../svg";

export const RecordsRight = ({ recordData }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between">
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
            <div className="bg-[#F9FAFB] border border-base300 rounded-lg">
              <li className="list-none ">
                <details className="menu dropdown p-0">
                  <summary className="flex justify-between items-center cursor-pointer px-4 py-3">
                    <span className="font-roboto font-bold not-italic text-base w-32">
                      Newest fisrt
                    </span>
                  </summary>
                  <ul className="dropdown-content bg-[#F9FAFB] border border-base300 rounded-lg p-4">
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
        <div className="flex flex-col gap-6 max-h-[850px] h-full overflow-y-scroll scrollbar-hide">
          <div className="flex flex-col gap-3">
            <p className="font-roboto font-bold not-italic text-base w-32">
              Today
            </p>
            <div className="flex flex-col gap-3">
              {recordData.map((items, itemsIndex) => {
                return (
                  <div key={itemsIndex} className="">
                    <RecordComRP items={items} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-roboto font-bold not-italic text-base w-32">
              Yesterday
            </p>
            <div className="flex flex-col gap-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
