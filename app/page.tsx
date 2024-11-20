import SocialAndOccupation from "./components/SocialAndOccupation";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className={`h-screen overflow-y-auto snap-y scroll-smooth font-sf`}>
      <SocialAndOccupation />
      <Projects />
      <AboutMe />
    </div>
  );
}
