import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-24 py-16 ">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#18A7B9]">Construction</h2>
          <p className="text-xl text-gray-400 leading-8 py-4">
            You'll find your next Home <br /> loan valu you prefer.
          </p>
          <div className="flex space-x-5">
            <div className="h-10 w-10 grid place-items-center bg-[#18A7B9] rounded-xl">
              <Image src="/Union.svg" width={20} height={20} />
            </div>
            <div className="h-10 w-10 grid place-items-center bg-[#18A7B9] rounded-xl">
              <Image src="/Vector.svg" width={20} height={20} />
            </div>
            <div className="h-10 w-10 grid place-items-center bg-[#18A7B9] rounded-xl">
              <Image src="/Vector-1.svg" width={20} height={20} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Resources</h2>
          <div className="py-4 space-y-4">
            <p className="text-xl text-gray-400">Our Agents</p>
            <p className="text-xl text-gray-400">Member Stories</p>
            <p className="text-xl text-gray-400">Video</p>
            <p className="text-xl text-gray-400">Free Trial</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Company</h2>
          <div className="py-4 space-y-4">
            <p className="text-xl text-gray-400">Partnership</p>
            <p className="text-xl text-gray-400">Terms Of Use</p>
            <p className="text-xl text-gray-400">Privacy</p>
            <p className="text-xl text-gray-400">Sitemap</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <input
            placeholder="Enter you email"
            className="px-8 my-2 py-4 bg-gray-300"
          />
        </div>
      </div>

      <div className="border-t mt-4 border-gray-300">
        <h2 className="text-center py-4 text-xl text-gray-500 font-semibold">
          Copyright Arindam.com, All rights reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
