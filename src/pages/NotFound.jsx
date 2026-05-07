import { Link } from "react-router";

export function NotFound() {
  return (
    <main style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </main>
  );
}
