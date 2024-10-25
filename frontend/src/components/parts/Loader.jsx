import { GeldIconL, GeldLogoIconL } from "../svg";

export const Loader = () => {
  return (
    <main>
      <div className="w-screen h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4 p-[10px]">
              <GeldLogoIconL />
              <GeldIconL />
            </div>
            <div className="flex flex-col gap-4 items-center ">
              <div className="">
                <span className="loading loading-spinner loading-lg bg-blue"></span>
              </div>
              <div className="font-roboto font-bold not-italic text-base text-[#0F172A]">
                Түр хүлээнэ үү...
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
