import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Capabilities } from "./sections/Capabilities";
import "./Home.css";

export function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Work />
      <Capabilities />
    </main>
  );
}
