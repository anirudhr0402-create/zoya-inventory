import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isAuthenticated } = useAuth();

  const from = location.state?.from?.pathname || "/dashboard";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    navigate(from, { replace: true });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");

      await signIn(username, password);

      navigate(from, {
        replace: true
      });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-3xl font-bold">
          AIMS
        </h1>

        <p className="mb-6 text-gray-500">
          Inventory Management System
        </p>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="mb-2 block">
            Username
          </label>

          <input
            className="w-full rounded border p-3"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block">
            Password
          </label>

          <input
            type="password"
            className="w-full rounded border p-3"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}