import Image from "next/image";

const OurEnginners = () => {
  return (
    <section className="px-24 py-16">
      <h2 className="text-center text-2xl font-bold">Our Best Enginners</h2>
      <p className="text-lg mt-4 text-gray-500 text-center">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        <br />
        curiosity day assurance bed necessary.
      </p>
      <div className="flex justify-between py-10">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <article className="max-w-[350px] rounded-md flex flex-col items-center w-full shadow-xl p-8">
      <div className="flex w-full justify-between">
        <Image src="/Group 596.svg" width={30} height={30} />
        <Image src="/Group(1).svg" width={30} height={30} />
      </div>
      <Image
        src="https://i.pravatar.cc/150?img=56"
        className="rounded-full py-4"
        width={80}
        height={80}
      />
      <h3 className="text-2xl font-bold">Chris Evans</h3>
      <p className="text-gray-500">Michigan, TX</p>

      <div className="py-10">
        <p className="text-center text-gray-400">989-546-2847</p>
        <p className="text-[#18A7B9]">ChrisEvans@let.com</p>
      </div>
    </article>
  );
};

export default OurEnginners;
