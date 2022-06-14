import logo from "./logo.svg";
import "./App.css";
import Entry from "./components/entry";
import Screenone from "./components/screenone";
import Screentwo from "./components/screentwo";
import Screenthree from "./components/screenthree";
import Credits from "./components/credits";
import { useRef, useEffect } from "react";

function App() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;

    if (el != undefined) {
      const onWheel = (e) => {

        console.log(window.innerWidth)
        if (window.innerWidth > 500) {
          if (e.deltaY === 0) return;

          e.preventDefault();

          window.scrollTo(window.pageXOffset + e.deltaY / 13, 0);

          console.log(window.pageXOffset, e.deltaY);
        }
      };

      el.addEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div ref={scrollRef} className="App">
      <div className="sidescroll">
        <Entry />
        <Screenone />
        <Screentwo />
        <Screenthree />
        <Credits />
      </div>
    </div>
  );
}

export default App;
