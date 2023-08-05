import React from "react";
import FormInput from "./FormInput";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

function FormCard() {
  return (
    <div
      className="flex justify-center items-center mt-4 gap-3"
      suppressHydrationWarning
    >
      <Link
        href={"https://github.com/Akarikev/harmony-haven-app"}
        className="rounded-full p-4 shadow-md flex justify-center items-center transition delay-75 ease-in-out hover:bg-slate-900 hover:text-white"
      >
        <GithubIcon width={20} />
      </Link>
      {""}
      <small>check our github repo 🌟 </small>
    </div>
  );
}

export default FormCard;
