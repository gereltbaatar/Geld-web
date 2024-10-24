"use client";

import Link from "next/link";
import { Avatar } from ".";
import { GeldLogoIcon, PlusIcon } from "../svg";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  console.log("dasborder", path);

  return (
    <main>
      <div className="">
        <div className="bg-white">
          <div className="container m-auto">
            <div className="px-[120px] py-4 flex justify-between">
              <div className="flex items-center gap-6">
                <div className="p-[6px]">
                  <GeldLogoIcon />
                </div>
                <Link href={"/dashboard"}>
                  <button
                    className={`font-roboto ${
                      path ? "font-bold" : "font-normal"
                    } focus:font-bold not-italic text-[#0F172A] text-base`}
                  >
                    Dashboard
                  </button>
                </Link>

                <Link href={"/records"}>
                  <button
                    className={`font-roboto ${
                      !path ? "font-bold" : "font-normal"
                    } focus:font-bold not-italic text-[#0F172A] text-base`}
                  >
                    Records
                  </button>
                </Link>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <button className="flex items-center bg-blue gap-1 px-3 py-1 rounded-[20px]">
                    <PlusIcon />
                    <p className="font-roboto font-normal not-italic text-base text-white">
                      Record
                    </p>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
