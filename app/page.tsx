import SocialAndOccupation from "./components/SocialAndOccupation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div
      className={`h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth font-sf`}
    >
      <SocialAndOccupation />
      <Projects />
    </div>
  );
}
