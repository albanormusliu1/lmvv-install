import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyBYOdk2coeBtgSfbNYYLcjBXHzuUURWZsw",

authDomain: "firma-ngrohje.firebaseapp.com",

projectId: "firma-ngrohje",

storageBucket: "firma-ngrohje.firebasestorage.app",

messagingSenderId: "915107400678",

appId: "1:915107400678:web:8c6cfda6aa7b163f65e427",

measurementId: "G-5ZN25D71F9"

};



const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


export { db };
