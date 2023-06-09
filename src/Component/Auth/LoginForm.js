import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/Auth/AuthApiSlice";

const LoginForm = () => {
  const [inputType, setInputType] = useState("password");
  const [loginUser, { isSuccess, isError, data: userData, isLoading }] =
    useLoginUserMutation() || {};
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(newData);

    if (res?.data) {
      // storeToken(res?.data?.access_token);
      console.log("first");
      // navigate("/");
    }
  };

  useEffect(() => {
    if (isSuccess && !isError && !isLoading) {
      navigate("/");
    }
  }, [isSuccess]);

  const handleShowPassword = (e) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };
  return (
    <div className="w-full p-4">
      <form className=" space-y-4" onSubmit={loginSubmit}>
        <div className="flex flex-col gap-y-1 mb-2 text-sm">
          <label className="self-start" htmlFor="">
            Email Address
          </label>
          <div className=" text-gray-500 flex items-center border gap-2 bg-white rounded-md px-2 py-2">
            <HiOutlineMail size={20} />
            <input
              type="text"
              placeholder="Enter Email Address"
              name="email"
              className=" outline-none border-none w-full  bg-transparent text-gray-500"
              value={newData?.email}
              onChange={(e) =>
                setNewData({
                  ...newData,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 my-2 text-sm">
          <label className="self-start" htmlFor="">
            Password
          </label>
          <div className=" text-gray-500 flex items-center border gap-2 bg-white rounded-md px-2 py-2">
            <button onClick={handleShowPassword}>
              {inputType === "text" ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
            <input
              type={inputType}
              placeholder="Enter Password"
              name="password"
              value={newData?.password}
              onChange={(e) =>
                setNewData({
                  ...newData,
                  password: e.target.value,
                })
              }
              className=" outline-none border-none w-full  bg-transparent text-gray-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 text-sm w-full">
          <button className="rounded-md border text-white bg-primaryColor py-1 px-7 flex gap-2 items-center mr-2">
            Login
          </button>
        </div>
        <div className=" my-4 w-full mx-auto flex justify-center items-center ">
          <p className="text-center my-4">
            Don't have an account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
