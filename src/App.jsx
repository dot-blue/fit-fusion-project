import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurMethod from "./components/OurMethod";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <OurMethod />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
