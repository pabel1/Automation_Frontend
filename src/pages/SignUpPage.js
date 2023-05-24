import React from "react";
import GifImage from "../Component/Auth/GifImage";
import SignUpForm from "../Component/Auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className=" p-20 ">
      <div className="w-[80%] bg-white shadow-md rounded-md container p-4 flex items-center justify-center gap-2">
        <div className="w-[50%]">
          <GifImage />
        </div>
        <div>
          <div>
            <h1 className=" text-2xl text-gray-500 ">Sign Up </h1>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
