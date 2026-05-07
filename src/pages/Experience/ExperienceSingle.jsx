import { useParams, Link } from "react-router";

export function ExperienceSingle() {
  const { slug } = useParams();

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
}
