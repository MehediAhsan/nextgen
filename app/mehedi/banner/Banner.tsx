import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[915px] bg-[#020203] relative">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-[400px] md:w-[1135px]">
          <Image
            src="/assets/images/banner.svg"
            alt=""
            height={100}
            width={100}
            className="w-11/12 object-cover absolute z-20 h-fit"
          />
          <Image
            src="/assets/images/banner2.svg"
            alt=""
            height={100}
            width={100}
            className="w-[400px] md:w-[871px] h-[400px] md:h-[871px] object-cover right-0 absolute z-10 top-5"
          />
        </div>
        <div>
          <Image
            src="/assets/images/banner3.svg"
            alt=""
            height={100}
            width={100}
            className="w-full"
          />
        </div>
      </div>
      <div className="text-white absolute top-1/2 z-50 left-36 -translate-y-3/4">
        <p className="uppercase text-[16px] font-semibold tracking-widest">
          statistical software systems
        </p>
        <h1 className="uppercase text-[48px] md:text-[160px] font-extrabold tracking-[30px] strk text-transparent -mt-10 -mb-10">
          Birkeland
        </h1>
        <p className="text-center">
          <span className="text-[24px] font-light">for</span>{" "}
          <span className="uppercase tracking-widest text-[40px] font-thin">
            intelligence
          </span>
        </p>
      </div>
      <div className="absolute bottom-9 z-50 left-36">
        <button className="flex items-center justify-between px-9 py-4 font-light border-[0.5px] border-white rounded-tr-[30px] rounded-bl-[30px] text-white text-xs hover:bg-white hover:text-black transition tracking-[5px] absolute bottom-9 z-50">
          <span>CONTACT</span>
          <span className="ml-4">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
