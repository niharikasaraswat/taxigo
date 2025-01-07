import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const BookNow = () => {
  const [currentIndex, setCurrentindex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToshow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToshow();
    window.addEventListener("resize", updateCardsToshow);
    return () => window.removeEventListener("resize", updateCardsToshow);
  }, []);
  const nextproject = () => {
    setCurrentindex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevproject = () => {
    setCurrentindex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="BookNow"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Book Now{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          your ride{" "}
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Global mobility ecosystem driving communities forward
      </p>
      <h2 className="text-xl sm:text-4xl font-bold mb-2">
        There's an ride for everyone
      </h2>
      {/* Slider Buttons*/}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevproject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous"
        >
          <img src={assets.left_arrow} alt="" />
        </button>
        <button
          onClick={nextproject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next"
        >
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-30screen h-full mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BookNow;
