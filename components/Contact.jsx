import Image from "next/image";

const Contact = () => {
  return (
    <section className="px-24 py-32">
      <h2 className="text-3xl font-bold text-center">Contact us</h2>
      <p className="tetx-xl py-4 text-gray-400 text-center">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        <br />
        curiosity day assurance bed necessary.
      </p>
      <div className="flex items-center justify-between">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            className="px-10 py-4 bg-gray-200"
            placeholder="name"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-10 py-4 bg-gray-200"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-10 py-4 bg-gray-200"
          />
          <textarea
            type="text"
            rows={6}
            placeholder="Message"
            className="px-10 py-4 bg-gray-200"
          />
          <button className="bg-[#18A7B9] w-52 h-16 text-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-[5px] rounded-bl-[5px] shadow-xl shadow-[#18A7B9]">
            Submit
          </button>
        </form>
        <Image src="/Group 597.svg" alt="" width={800} height={800} />
      </div>
    </section>
  );
};

export default Contact;
