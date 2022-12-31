import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurMethod from "./components/OurMethod";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <div className=" h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <OurMethod />
      <MobileApp />
    </div>
  );
}

export default App;
