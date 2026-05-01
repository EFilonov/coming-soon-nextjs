import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <>
      <div className="relative flex flex-col  place-items-center ">
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {title}
          </span>
          {/* <span className="">⏳</span> */}
        </h2>
        <p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl text-center my-4 text-slate-800 dark:text-slate-100 font-thin"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </>
  );
}

export default ComingSoonContent;
