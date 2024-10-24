"use client";

import Link from "next/link";
import { ButtonL, InputL } from "../parts";
import { GeldIcon, GeldLogoIcon } from "../svg";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SignupPage = () => {
  ///////////////////////////////////////////////////////////////////////////////

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  ///////////////////////////////////////////////////////////////////////////////

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values, "singup values");
      setErrorMessage("");

      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };

      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/signup`, option);
        const data = await response.json();

        if (response.ok) {
          router.push("/");
        } else {
          setErrorMessage(data.message || "Error occurred");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  ///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);

  ///////////////////////////////////////////////////////////////////////////////

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
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full flex flex-col gap-4 ">
                    <InputL
                      htmlFor={"name"}
                      id={"name"}
                      name={"name"}
                      type={"text"}
                      placeholder={"Name"}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    <InputL
                      htmlFor={"email"}
                      id={"email"}
                      name={"email"}
                      type={"email"}
                      placeholder={"Email"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <InputL
                      htmlFor={"password"}
                      id={"password"}
                      name={"password"}
                      type={"text"}
                      placeholder={"Password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <InputL
                      type={"text"}
                      placeholder={"Re-assword"}
                      name={""}
                    />
                    <ButtonL type={"submit"} text={"Sign up"} />
                  </div>
                </form>
                <div className="flex items-center justify-center">
                  <p className="font-roboto font-normal not-italic text-[#0F172A] text-base">
                    Already have account?
                  </p>
                  <Link href={"/"}>
                    <button className="px-3 font-roboto font-normal not-italic text-blue text-base">
                      Log in
                    </button>
                  </Link>
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
