// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseApiKey = process.env.FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  apiKey: "AIzaSyAjL4aDtWhHacDU6VoYFKxEJGoX5bclLRg",
  authDomain: "shecancode-website.firebaseapp.com",
  projectId: "shecancode-website",
  storageBucket: "shecancode-website.appspot.com",
  messagingSenderId: "483656872258",
  appId: "1:483656872258:web:b8699c8098a79ce4c898db",
  measurementId: "G-4TYBXD0DK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);