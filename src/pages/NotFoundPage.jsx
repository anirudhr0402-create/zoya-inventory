import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}