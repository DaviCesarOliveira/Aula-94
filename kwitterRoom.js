var firebaseConfig = {
    apiKey: "AIzaSyBKyUehTv252VzUzBmOLZu79ARKMKZ_r_o",
    authDomain: "aula94-565b0.firebaseapp.com",
    databaseURL: "https://aula94-565b0-default-rtdb.firebaseio.com",
    projectId: "aula94-565b0",
    storageBucket: "aula94-565b0.appspot.com",
    messagingSenderId: "254741702272",
    appId: "1:254741702272:web:354e2ff0c91429accc2865",
    measurementId: "G-NEETVPYS85"
  };


firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div>"
        document.getElementById("output").innerHTML += row;        
    });
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function sair() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}