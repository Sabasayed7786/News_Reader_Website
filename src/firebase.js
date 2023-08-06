import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBCVaqyPcvllH3m461RnpdU0Sk_p9fSHs",
  authDomain: "fir-auth-a81c3.firebaseapp.com",
  projectId: "fir-auth-a81c3",
  storageBucket: "fir-auth-a81c3.appspot.com",
  messagingSenderId: "1001729346593",
  appId: "1:1001729346593:web:f4719b4c15419246a66760",
  measurementId: "G-YN8F9S7V25"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app,auth };
