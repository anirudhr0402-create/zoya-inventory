import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("aims_auth");

    toast.success("Logged out successfully.");

    navigate("/login", {
      replace: true
    });
  }

  return {
    logout
  };
}