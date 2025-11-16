import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./section/NavBar";
import Hero from "./section/Hero";
import FirstVideo from "./section/FirstVideo";
import Jason from "./section/Jason";
import SecondVideo from "./section/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
    </main>
  );
};

export default App;
