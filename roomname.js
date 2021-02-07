//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBx_oDiRkTWZ6g31PJeGSiI-hl2mThaR3M",
    authDomain: "kwitter-17cfa.firebaseapp.com",
    databaseURL: "https://kwitter-17cfa-default-rtdb.firebaseio.com",
    projectId: "kwitter-17cfa",
    storageBucket: "kwitter-17cfa.appspot.com",
    messagingSenderId: "123694073615",
    appId: "1:123694073615:web:554548123a804b4d66207a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
});
  }