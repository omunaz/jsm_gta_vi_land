import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-indigo-500">Welcome to GTA and Gsap!</h1>
      </div>
    </main>
  );
};

export default App;
