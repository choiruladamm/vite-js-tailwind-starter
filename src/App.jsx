import React from "react";

const App = () => {
  return (
    <div className="layout relative flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="flex gap-4">
        {/* <Icons.bolt className="logo-bolt h-16 w-16 animate-pulse cursor-pointer" />
        <Icons.react className="logo-react animate-spin-slow h-16 w-16 cursor-pointer text-sky-500" /> */}
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-2">
        <h1 className="text-3xl font-bold">
          React.js + Tailwind CSS + Javascript Starter
        </h1>
        <p className="max-w-3xl text-sm text-gray-600 md:text-base">
          A starter for React.js, Tailwind CSS, and Javascript.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/choiruladamm/vite-js-tailwind-starter"
          className="cursor-pointer font-semibold text-slate-900 hover:text-sky-600 hover:underline"
        >
          See the repository
        </a>
      </div>
      <footer className="absolute bottom-2 flex gap-1 text-gray-600">
        © 2023 By
        <a
          target="_blank"
          rel="noreferrer"
          href="https://choiruladamm.vercel.app/"
          className="cursor-pointer font-semibold hover:text-sky-600 hover:underline"
        >
          Choirul Adamm
        </a>
      </footer>
    </div>
  );
};

export default App;
