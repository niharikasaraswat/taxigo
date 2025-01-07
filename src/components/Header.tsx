import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-slate-950 border-cyan-200"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Smart solution for all your business mobility needs.
        </h2>
        <div className="mt-16">
          <a
            href="#ReachOut"
            className="border border-white px-8 py-3 rounded-full bg-red-700 text-white font-semibold"
          >
            Reach out to us on Whatsapp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
