import { Button } from "./ui/button";

function Form() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <h3 className="absolute top-28 md:top-32 uppercase font-medium tracking-[10px] text-lg md:text-xl lg:text-2xl text-gray-400">
        Contact
      </h3>

      <form className="space-y-5 w-full px-8 sm:max-w-screen-sm mx-auto">
        <div className="flex flex-col space-y-2">
          <label htmlFor="fullName" className="text-lg text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            className="h-14 w-full border border-orange-500/30 focus:border-orange-500 rounded outline-none bg-transparent px-4"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="phoneNumber" className="text-lg text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            className="h-14 w-full border border-orange-500/30 focus:border-orange-500 rounded outline-none bg-transparent px-4"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            className="h-14 w-full border border-orange-500/30 focus:border-orange-500 rounded outline-none bg-transparent px-4"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg text-gray-300">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full border border-orange-500/30 focus:border-orange-500 rounded outline-none bg-transparent px-4 py-2"
          ></textarea>
        </div>
        <Button className="w-full h-16 bg-orange-500 text-lg uppercase hover:bg-orange-600 duration-300">
          Send
        </Button>
      </form>
    </section>
  );
}
export default Form;
