
const firebaseConfig = {
    apiKey: "AIzaSyCEWN9tGIN1LoLVbmDXjbsE_TCu3RTSpQ8",
    authDomain: "c-93-99516.firebaseapp.com",
    databaseURL:"https://c-93-99516-default-rtdb.firebaseio.com/",
    projectId: "c-93-99516",
    storageBucket: "c-93-99516.appspot.com",
    messagingSenderId: "1095275945788",
    appId: "1:1095275945788:web:a20ab7015fb21720fc4839"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
user_name=document.getElementById("user_name").value ;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}