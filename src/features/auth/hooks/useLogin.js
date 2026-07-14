// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// import {
//   getAuth,
//   browserLocalPersistence,
//   browserSessionPersistence,
//   setPersistence,
//   signInWithEmailAndPassword
// } from "firebase/auth";

// export default function useLogin() {
//   const navigate = useNavigate();

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   async function login({
//     email,
//     password,
//     remember
//   }) {
//     setLoading(true);
//     setError("");

//     try {
//       const auth = getAuth();

//       await setPersistence(
//         auth,
//         remember
//           ? browserLocalPersistence
//           : browserSessionPersistence
//       );

//       await signInWithEmailAndPassword(
//         auth,
//         email.trim(),
//         password
//       );

//       toast.success(
//         "Welcome back!"
//       );

//       navigate("/dashboard", {
//         replace: true
//       });
//     } catch (err) {
//       console.error(err);

//       let message =
//         "Unable to sign in.";

//       switch (err.code) {
//         case "auth/user-not-found":
//           message =
//             "No account found with this email.";
//           break;

//         case "auth/wrong-password":
//           message =
//             "Incorrect password.";
//           break;

//         case "auth/invalid-credential":
//           message =
//             "Invalid email or password.";
//           break;

//         case "auth/invalid-email":
//           message =
//             "Invalid email address.";
//           break;

//         case "auth/too-many-requests":
//           message =
//             "Too many attempts. Please try again later.";
//           break;

//         default:
//           message =
//             err.message ||
//             "Login failed.";
//       }

//       setError(message);
//       toast.error(message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return {
//     login,
//     loading,
//     error
//   };
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogin() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function login({
    email,
    password
  }) {
    setLoading(true);
    setError("");

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    if( (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) || (
      email === "manager@gmail.com" &&
      password === "manager123"
    ) ){
      localStorage.setItem(
        "aims_auth",
        "true"
      );

      toast.success(
        "Welcome back!"
      );

      navigate("/dashboard");
    } else {
      setError(
        "Invalid username or password."
      );

      toast.error(
        "Invalid username or password."
      );
    }

    setLoading(false);
  }

  return {
    login,
    loading,
    error
  };
}