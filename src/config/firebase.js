import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const currentApps = getApps();
let auth;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
}

export { auth };
// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // ⚠️ Only call getAuth on the client
// let auth;
// if (typeof window !== "undefined") {
//   auth = getAuth(app);
// }
// // const analytics = getAnalytics(app);
// // const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export {
//   auth,
//   provider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
// };
