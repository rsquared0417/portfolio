import { Hero } from "./sections/Hero";
import "./Home.css";
import Work from "./sections/Work";

export function Home() {
  return (
    <main className="home-page container">
      <Hero />
      <div className="spacer"></div>
      <Work />
    </main>
  );
}
