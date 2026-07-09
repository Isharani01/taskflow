import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <CTA/>
        <Footer/>
      
    </div>
  );
}

export default Home;