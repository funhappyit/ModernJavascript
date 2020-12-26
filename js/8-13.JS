function say(greeting, honorifics) {
  console.log(greeting + "" + honorifics + this.name);
}
var tom = { name: "Tom Sawyer" };
var becky = { name: "Becky Thatcher" };
//apply와 call 매서드
say.apply(tom, ["Hello!", "Mr."]); //->"Hello Mr,Tom Sawyer"
say.apply(becky, ["Hi!", "Ms."]); //->"Hi! Ms,Becky Thatcher"
say.call(tom, "Hello", "Mr.");
say.call(becky, "Hi", "Ms.");
//bind 매서드
var sayToTom = say.bind(tom);
sayToTom("Hello", "Mr.");
