var jim = {
  name: "Jim", 
  skills: ["JavaScript", "Ruby", "Dancing"],
  "favorite color": "green",
  greet: function (person) {
    console.log("Hello, I am " + this.name);
  }
};

var nick = {
  name: "Nick", 
  greet: jim.greet
};


// jim["favorite color"] = "blue";

// console.log(jim["name"]);
// console.log(jim["favorite color"]);

jim.name = "James";

jim.greet();
nick.greet();

jim["greet"]();

var jimGreet = jim.greet;

jimGreet();

function whatIsThis() {
  console.log(this);
}

window.name = "I'm a window";
whatIsThis();