import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../features/Auth/AuthApiSlice";
import { storeToken } from "../Help";
const SignUpForm = () => {
  const [inputType, setInputType] = useState("password");
  const handleShowPassword = (e) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };

  const [newData, setNewData] = useState({
    name: "",
    email: "",
    password: "",

    phone: "",
  });

  const [createUser] = useCreateUserMutation();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createUser(newData);

    if (res?.data) {
      storeToken(res?.data?.access_token);
      navigate("/");
    }
  };

  return (
    <div className="w-full p-4">
      <form className=" space-y-4" onSubmit={handleSubmit}>
        <div className=" gap-x-2">
          <div className="flex flex-col gap-y-1 my-2 text-sm">
            <label className="self-start" htmlFor="">
              Name
            </label>
            <div className=" text-gray-500 flex items-center border gap-2 bg-white rounded-md px-2 py-2">
              <FaRegUserCircle size={20} />
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={newData?.name}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    name: e.target.value,
                  })
                }
                className=" outline-none border-none w-full  bg-transparent text-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 my-2 text-sm">
            <label className="self-start" htmlFor="">
              Phone Number
            </label>
            <div className=" text-gray-500 flex items-center border gap-2 bg-white rounded-md pl-2 py-2">
              <AiOutlinePhone size={20} />
              <input
                type="text"
                placeholder="Enter Number"
                name="phone"
                value={newData?.phone}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    phone: e.target.value,
                  })
                }
                className=" outline-none border-none w-full  bg-transparent text-gray-500 -ml-0.5"
              />
            </div>
          </div>
        </div>
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

        <p className="text-[12px] leading-tight text-gray-600 font-outfit font-medium mt-3">
          By clicking "Sign Up”, I agree to all{" "}
          <span className="text-blue-400">Terms of Use</span> and{" "}
          <span className="text-blue-400">Privacy Policy</span>
        </p>
        <div className="flex items-center justify-center mt-2 text-sm w-full">
          <button className="rounded-md border text-white bg-primaryColor py-1 px-7 flex gap-2 items-center mr-2">
            Sign Up
          </button>
        </div>
        <div className=" my-4 w-full mx-auto flex justify-center items-center ">
          <p className="text-center my-4">
            Already have an account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
