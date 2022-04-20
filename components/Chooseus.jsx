import Image from "next/image";

const ChooseUs = () => {
  return (
    <section className="px-24 py-16">
      <div className="flex justify-between">
        <div className="space-y-7">
          <p className="text-gray-600 leading-8 text-xl">
            Blessing welcomed ladyship she met humoured sir <br /> breeding her.
            Six curiosity day assurance bed necessary.
          </p>
          <button className="px-12 shadow-2xl shadow-[#18A7B9] text-white font-bold py-4 bg-[#18A7B9] rounded-tl-[40px] rounded-br-[40px]">
            Explore
          </button>
        </div>
        <h1 className="text-5xl font-medium leading-normal">
          Why Choose us for <br /> best construction <br />
          experience
        </h1>
      </div>
      <div className="flex justify-between py-8 items-center">
        <Image src="/image.png" width={600} height={900} alt="" />
        <div className="space-y-16">
          <div className="space-x-10">
            <div className="relative">
              <h1 className="text-3xl font-bold">01</h1>
              <img
                src="/Rectangle 4304.svg"
                className="absolute -z-10 -top-0 -left-12"
              />
            </div>
            <p className="text-xl text-gray-600">
              And residence for met the estimable <br /> disposing. Mean if he
              they been no hold <br />
              mr. Is at much do made took held help.
            </p>
          </div>
          <div className="space-x-10">
            <div className="relative">
              <h1 className="text-3xl font-bold">02</h1>
              <img
                src="/Rectangle 4305.svg"
                className="absolute -z-10 -top-0 -left-12"
              />
            </div>
            <p className="text-xl text-gray-600">
              And residence for met the estimable <br /> disposing. Mean if he
              they been no hold <br />
              mr. Is at much do made took held help.
            </p>
          </div>
          <div className="space-x-10">
            <div className="relative">
              <h1 className="text-3xl font-bold">03</h1>
              <img
                src="/Rectangle 4306.svg"
                className="absolute -z-10 -top-0 -left-12"
              />
            </div>
            <p className="text-xl text-gray-600">
              And residence for met the estimable <br /> disposing. Mean if he
              they been no hold <br />
              mr. Is at much do made took held help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
