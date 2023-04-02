//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAupVKj18zpp1KSXl1JIg24_ejHyIFO9-Y",
      authDomain: "class-test-85860.firebaseapp.com",
      databaseURL: "https://class-test-85860-default-rtdb.firebaseio.com",
      projectId: "class-test-85860",
      storageBucket: "class-test-85860.appspot.com",
      messagingSenderId: "152823772812",
      appId: "1:152823772812:web:b6e39e9b14a941da36eda9",
      measurementId: "G-V4TVZHJD5P"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
} 

