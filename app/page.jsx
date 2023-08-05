import FormCard from "@/components/FormCard";
import FormInput from "@/components/FormInput";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 md:p-24"
      suppressHydrationWarning
    >
      <h1 className="headers_font text-blue-500 text-center text-5xl font-bold mb-4">
        harmony haven
      </h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          when harmony haven is live&nbsp;
          <p className=" font-bold">you&apos;ll be the first to know🎉</p>
        </p>
      </div>

      <div className="">
        <FormInput />
        <FormCard />
      </div>
    </main>
  );
}
