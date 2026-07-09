import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import CTA from "../../components/CTA/CTA";
function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <CTA/>
      
    </div>
  );
}

export default Home;