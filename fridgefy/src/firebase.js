import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: "AIzaSyDKCCVZQ0vhh5nC202rvofdjvCUkawhoTs",
  authDomain: "fridgefy-8e6da.firebaseapp.com",
  projectId: "fridgefy-8e6da",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
