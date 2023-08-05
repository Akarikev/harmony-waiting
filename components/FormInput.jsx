"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

function FormInput() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const submitForm = () => {
    console.log(inputName);
    console.log(inputEmail);
  };

  return (
    <div className=" mt-6 " suppressHydrationWarning>
      <h1 className="md:uppercase md:text-center text-center text-[#0f172a] headers_font lg:text-7xl md:text-5xl text-2xl font-medium mb-4 ">
        Be the First to Know when its{" "}
        <span className="text-green-400">live!</span>
      </h1>
      <p className="text-center mb-2 text-gray-600 ">
        we&apos;d love to hear what you think some features should be added!🥱.
        click the link below to answer a 2 min short questionnaire
      </p>

      <Link
        href="https://forms.gle/44wjmhzhzCfJHner6"
        target="_blank"
        className="font-bold text-center"
      >
        <p className="underline decoration-wavy mb-3">to questionnaire</p>
      </Link>

      <div className="flex justify-center items-center w-full">
        <form
          action="https://formsubmit.co/c48e300309232d641b1dfe729a43a0f3"
          target="_blank"
          method="POST"
          onSubmit={submitForm}
          className="border shadow-md p-16 md:w-[800px] px-4 rounded-lg"
        >
          <div className="flex flex-col gap-6 w-full">
            <Input
              type="name"
              placeholder="Enter Name e.g John Doe*"
              className="md:w-full w-[355px]"
              value={inputName}
              required
              onChange={(e) => setInputName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Enter your Email *"
              required
              value={inputEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Submit</Button>

            <small className="text-center italic text-gray-500">
              By entering this form you submit your email to us so we can send
              you your personal link when it goes live
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInput;
