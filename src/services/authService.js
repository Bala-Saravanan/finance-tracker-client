// services/authService.js
import {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
} from "@/config/firebase";

export const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user.getIdToken();
};

export const signUpWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user.getIdToken();
};
