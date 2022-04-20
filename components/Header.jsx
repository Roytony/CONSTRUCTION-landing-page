/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const Header = () => {
  return (
    <header className="px-24 py-16">
      <div className="relative">
        <img
          src="/Rectangle4302.svg"
          alt=""
          className="absolute top-16 right-[32%]"
        />
        <img
          src="/building.svg"
          className="absolute rounded-bl-[300px] top-0 right-0 -z-10"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-semibold text-[#18A7B9] uppercase">
          Construction
        </h2>
        <nav className="list-none flex space-x-10 mr-10">
          <li>
            <a className="font-bold" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </nav>
      </div>
      <div className="px-3 py-10">
        <h1 className="text-7xl font-bold leading-normal">
          <span className="text-[#18A7B9]">Masters </span> of <br />
          Consistency and <br />
          <span className="text-[#18A7B9]">Quality</span>
        </h1>
        <p className="text-xl py-10 text-gray-600 leading-normal">
          Blessing welcomed ladyship she met humoured sir <br /> breeding her.
          Six curiosity day assurance bed necessary.
        </p>
        <div className="space-x-8">
          <button className="w-[200px] h-[60px]  shadow-xl shadow-[#18A7B9] bg-[#18A7B9] rounded-tr-[40px] rounded-tl-[5px] rounded-br-[5px] rounded-bl-[40px] text-white font-bold">
            Explore
          </button>
          <button className="w-[200px] h-[60px] text-[#18A7B9] border border-[#18A7B9] rounded-tr-[40px] rounded-tl-[5px] rounded-br-[5px]  font-bold rounded-bl-[40px]">
            Contact us
          </button>
        </div>
        <div className="flex py-20 space-x-10 relative">
          <img
            src="/Vector 11.svg"
            alt=""
            className="absolute -top-10 left-0"
          />
          <div className="relative">
            <div className="h-10 w-10 -z-10 -top-4 -left-2 rounded-tl-full rounded-br-full bg-orange-500 absolute " />
            <h2 className="text-3xl font-bold ">25,541</h2>
            <p className="text-xl py-2 text-gray-500">Projects Done</p>
          </div>
          <div className="relative">
            <div className="h-10 w-10 -z-10 -top-4 -left-2 rounded-tl-full rounded-br-full bg-green-500 absolute " />

            <h2 className="text-3xl font-bold">1500+</h2>
            <p className="text-xl py-2 text-gray-500">Buildings Done</p>
          </div>
          <div className="relative">
            <div className="h-10 w-10 -z-10 -top-4 -left-2 rounded-tl-full rounded-br-full bg-[#18A7B9] absolute " />

            <h2 className="text-3xl font-bold">350+</h2>
            <p className="text-xl py-2 text-gray-500">Total Employees</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] flex px-4 items-center justify-between h-48 rounded-3xl mx-auto my-10 bg-[#FAFAFA]">
        <Image src="/LOGO-1.svg" width={200} height={200} alt="" />
        <Image src="/LOGO-2.svg" width={200} height={200} alt="" />
        <Image src="/LOGO-3.svg" width={200} height={200} alt="" />
        <Image src="/LOGO-4.svg" width={200} height={200} alt="" />
      </div>
    </header>
  );
};

export default Header;
