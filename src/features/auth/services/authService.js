import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged
} from "firebase/auth";

const auth = getAuth();

export async function login({
  email,
  password,
  remember = true
}) {
  await setPersistence(
    auth,
    remember
      ? browserLocalPersistence
      : browserSessionPersistence
  );

  const credential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return credential.user;
}

export async function logout() {
  await signOut(auth);
}

export function getCurrentUser() {
  return auth.currentUser;
}

export function subscribeAuth(callback) {
  return onAuthStateChanged(
    auth,
    callback
  );
}

export { auth };