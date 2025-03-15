import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className=" border-[1px solid bg-gray-500] shadow-md p-5 rounded-md w-100">
          <form onSubmit={handleSubmit(onSubmit)} method="div">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost relative float-right  "
            >
              ✕
            </Link>

            <h3 className="font-bold md: text-3xl text-center">Login</h3>
            {/* email---------------------------- */}
            <div className="mt-4 ">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email "
                className="w-full px-3 py-1 border rounded-md outline-none mt-1"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            {/* password -------------------------------- */}
            <div className="mt-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className=" px-3 py-1 w-full border rounded-md outline-none mt-1"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            {/* button--------------- */}
            <div className="flex justify-around items-center mt-4">
              <button className="bg-pink-500 cursor-pointer text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="text-sm">
                Not registered?
                <Link
                  to="/signup"
                  className=" underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
