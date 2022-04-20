import Blogs from "../components/Blogs";
import CeoMessage from "../components/CeoMessage";
import ChooseUs from "../components/Chooseus";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import OurEnginners from "../components/OurEnginners";

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <ChooseUs />
        <OurEnginners />
        <CeoMessage />
        <Contact />
        <Blogs />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
