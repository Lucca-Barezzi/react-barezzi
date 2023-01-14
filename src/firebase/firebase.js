import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDz768gGfVL2_80pRqeKusdLVNsN5FfUs",
  authDomain: "proyectoreactlucca.firebaseapp.com",
  projectId: "proyectoreactlucca",
  storageBucket: "proyectoreactlucca.appspot.com",
  messagingSenderId: "656000792769",
  appId: "1:656000792769:web:d13871774fccc20cc3bc40"
};

const app = initializeApp(firebaseConfig);

export const initFirestore =() =>app