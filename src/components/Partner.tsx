import { motion } from "framer-motion";
import React from "react";
import { toast } from "react-toastify";

const Partner = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "35793cee-a5f1-48fb-bed3-5255ef356b9f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data: { success: boolean; message?: string } = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset(); // Type assertion
    } else {
      console.error("Error:", data);
      toast.error(data.message);
      setResult(data.message || "An error occurred"); // Set a default error message
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Partner"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {" "}
        Partner{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us{" "}
        </span>
      </h1>
      <p className="text-pretty text-gray-500 mb-12 max-w-80 mx-auto">
        Are you a transportation agency looking to expand your business by
        offering your cabs and drivers for hire? We invite you to partner with
        us and take advantage of this exciting opportunity to grow together.
        Interested? Contact us today to learn more about how you can become a
        part of our growing network.
      </p>
      <div className="bg-blue-200 rounded-lg">
        <form
          onSubmit={onSubmit}
          className="max-w-fit mx-auto text-gray-600 pt-8"
          action=""
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              Your Name
              <input
                className="w-full border border-gray-300 roundedn py-3 px-4 mt-2"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                className="w-full border border-gray-300 roundedn py-3 px-4 mt-2"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              Company Name
              <input
                className="w-full border border-gray-300 roundedn py-3 px-4 mt-2"
                type="text"
                name="CompName"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Phone
              <input
                className="w-full border border-gray-300 roundedn py-3 px-4 mt-2"
                type="number"
                name="Phone"
                placeholder="Your Phone"
                required
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="Message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button className="bg-blue-800 text-white py-2 px-12 mb-10 rounded">
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Partner;
