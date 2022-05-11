import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

export default ()=>{
    const firebaseConfig = {
          apiKey: "AIzaSyD7sblgk9Hz6Ny-rxknDe5d3x47xfnp6Hk",
          authDomain: "dropbox-clone-581d4.firebaseapp.com",
          databaseURL: "https://dropbox-clone-581d4-default-rtdb.firebaseio.com",
          projectId: "dropbox-clone-581d4",
          storageBucket: "dropbox-clone-581d4.appspot.com",
          messagingSenderId: "35292174429",
          appId: "1:35292174429:web:75f4f2e96a8083af4bd5b4"
        };
      
        // Initialize Firebase
        firebase = initializeApp(firebaseConfig);
}