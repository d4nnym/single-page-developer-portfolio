//import { imgProfile } from "../../data/mediadata";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <main className="body pb-7">
          
          <Presentation />
          <Skills />
          <Projects />
        </main>
      </div>
    </>
  );
}
