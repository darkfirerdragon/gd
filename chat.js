//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBx_oDiRkTWZ6g31PJeGSiI-hl2mThaR3M",
    authDomain: "kwitter-17cfa.firebaseapp.com",
    projectId: "kwitter-17cfa",
    storageBucket: "kwitter-17cfa.appspot.com",
    messagingSenderId: "123694073615",
    appId: "1:123694073615:web:554548123a804b4d66207a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
