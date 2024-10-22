import { ButtonL, InputL } from "../parts";
import { GeldIcon, GeldLogoIcon } from "../svg";

const SignupPage = () => {
  return (
    <main className="h-full">
      <div className="h-full">
        <div className="h-full grid grid-cols-2">
          <div className="h-full flex items-center justify-center">
            <div className="max-w-96 w-full">
              <div className="w-full flex flex-col gap-10">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[10px] ">
                    <GeldLogoIcon />
                    <GeldIcon />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2  ">
                  <p className="font-roboto font-semibold not-italic text-2xl">
                    Create Geld account
                  </p>
                  <p className="font-roboto font-normal not-italic text-base text-slate ">
                    Sign up below to create your Wallet account
                  </p>
                </div>
                <div className="flex flex-col gap-4 ">
                  <InputL placeholder={"Name"} />
                  <InputL placeholder={"Email"} />
                  <InputL placeholder={"Password"} />
                  <InputL placeholder={"Re-assword"} />
                  <ButtonL text={"Sign up"} />
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-roboto font-normal not-italic text-[#0F172A] text-base">
                    Already have account?
                  </p>
                  <button className="px-3 font-roboto font-normal not-italic text-blue text-base">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-blue"></div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
