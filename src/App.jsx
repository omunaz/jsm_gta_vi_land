import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./section/NavBar";
import Hero from "./section/Hero";
import FirstVideo from "./section/FirstVideo";
import Jason from "./section/Jason";
import SecondVideo from "./section/SecondVideo";
import Lucia from "./section/Lucia";
import PostCard from "./section/PostCard";
import Final from "./section/Final";
import Outro from "./section/Outro";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
      <Final />
      <Outro />
    </main>
  );
};

export default App;
