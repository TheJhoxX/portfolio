import SocialAndOccupation from "./components/SocialAndOccupation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className={`font-sf`}>
      <SocialAndOccupation />
      <Projects />
    </div>
  );
}
