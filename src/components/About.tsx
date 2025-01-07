import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Whether you are looking for a quick ride to the airport or a leisurely
        tour of the city,our cab services are the perfect siolution.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full">
        <img
          src={assets.brand_img}
          alt=""
          className="w-screen h-auto sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">250+</p>
              <p>Cities Covered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">55 Cr+</p>
              <p>Yearly rides</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12 Cr+</p>
              <p>Distance covered</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Movement is what we power. It’s our lifeblood. It runs through our
            veins. It’s what gets us out of bed each morning. It pushes us to
            constantly reimagine how we can move better. For you. For all the
            places you want to go. For all the things you want to get. For all
            the ways you want to earn. Across the entire world. In real time. At
            the incredible speed of now.
          </p>
          <button className="bg-blue-900 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
