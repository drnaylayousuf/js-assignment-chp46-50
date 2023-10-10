// Chapter 46, 48 (Events)



// Q11  answer in js
function hideElement(element) {
    element.style.display = "none";
  }
  


// Q12  answer in js

  function openNewWindow() {
    // get the mouse position
    var x = Event.clientX;
    var y = Event.clientY;
    // open a new window with the mouse position as width and height
    var newWindow = window.open("", "newWindow", "width=" + x + ",height=" + y);
    // write some HTML content to the new window
    newWindow.document.write("<h1>This is a new window</h1>");
    newWindow.document.write("<button onclick='window.close()'>Close this window</button>");
  }
  


//   Chapter 49, 50 (Reading and Setting field values)

// Q1 ANSWER IN JS


// Q3 ANSWER IN JS


// Q7 ANSWER

// ====================Login  form function Js==============
function login() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    if (name.value && email.value) {
        console.log(name.value);
        console.log(email.value);
    }
    else {
        alert("First Fill The Entire Field..");
    }
}
// 



