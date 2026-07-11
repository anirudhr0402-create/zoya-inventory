import { useNavigate } from "react-router-dom";
import useAuth from "../../features/auth/hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();

  const {
    user,
    signOut
  } = useAuth();

  function logout() {
    signOut();
    navigate("/login", {
      replace: true
    });
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white bg-white px-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-80 rounded-lg border px-4 py-2"
      />

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="font-semibold">
            {user?.name}
          </div>

          <div className="text-xs text-gray-500">
            {user?.role}
          </div>
        </div>

        <button
          onClick={logout}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
}