import Header from "./components/Header";
import About from "./components/About";
import BookNow from "./components/BookNow";
import Blogs from "./components/Blogs";
import Partner from "./components/Partner";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Partner />
      <BookNow />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
