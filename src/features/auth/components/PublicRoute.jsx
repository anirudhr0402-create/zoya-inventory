// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import {
//   getCurrentUser,
//   subscribeAuth
// } from "../services/authService";

// export default function PublicRoute({
//   children
// }) {
//   const [loading, setLoading] =
//     useState(true);

//   const [user, setUser] =
//     useState(getCurrentUser());

//   useEffect(() => {
//     const unsubscribe =
//       subscribeAuth(currentUser => {
//         setUser(currentUser);
//         setLoading(false);
//       });

//     return unsubscribe;
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-950">

//         <div className="text-center">

//           <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />

//           <p className="mt-6 text-lg text-white">
//             Loading AIMS...
//           </p>

//         </div>

//       </div>
//     );
//   }

//   if (user) {
//     return (
//       <Navigate
//         to="/dashboard"
//         replace
//       />
//     );
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children
}) {
  const loggedIn =
    localStorage.getItem("aims_auth") ===
    "true";

  if (loggedIn) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
}