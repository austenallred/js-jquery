var personPrototype = {
  name: 'Anonymous',
  greet: function (name, mood) {
    name = name || "You";
    mood = mood || "good";

    console.log("Hello, " + name +
                "I am " + this.name +
                "and I am in a " + mood + " mood!");
    
  },
  species: 'Homo Sapien'
}

