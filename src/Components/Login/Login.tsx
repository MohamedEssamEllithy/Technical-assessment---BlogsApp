import * as Yup from "yup";
import style from "./Login.module.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";

export default function Login() {
  let navigate = useNavigate();
  const[showPassward,setshow]=useState(true)


  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string().required("password is required"),
  });

  let loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
        navigate("/");
    },
  });

  const showPassfn = () => {
    setshow(!showPassward);
  };
  return (
    <div
      className={`flex h-lvh  ${style.login} p-0  xs:pt-20 flex-1 flex-col  px-6  lg:px-8`}
    >
      <div
        className={` bg-slate-100 mt-14 xs:mt-24  sm:mx-auto sm:w-full sm:max-w-lg p-8 border-2 rounded-lg`}
      >
        <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
          Sign in
        </h2>
        <form className="space-y-6" onSubmit={loginForm.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-zinc-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 outline-none"
              />
              {loginForm.errors.email && loginForm.touched.email ? (
                <p className="text-red-500 text-sm ">
                  {loginForm.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              {showPassward ? (
                <>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  <i
                    className="fa-regular fa-eye absolute top-2.5 right-2 cursor-pointer hover:text-teal-600 "
                    onClick={showPassfn}
                  ></i>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    className=" block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  <i
                    className="fa-regular fa-eye-slash absolute top-2.5 right-2 cursor-pointer hover:text-teal-600 "
                    onClick={showPassfn}
                  ></i>
                </>
              )}

              {loginForm.errors.password && loginForm.touched.password ? (
                <p className="text-red-500 text-sm ">
                  {loginForm.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <button
            type="submit"
            className=" w-50 block mx-auto  items-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-teal-600 shadow-sm border-teal-600 border-2 hover:bg-teal-600 hover:text-white  "
          >
            <i className="fa-regular fa-pen-to-square mr-2"></i>
            <span>Sign in</span>
          </button>
        </form>
      </div>
    </div>
  );
}
