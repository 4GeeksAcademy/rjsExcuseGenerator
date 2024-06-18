let excuses = document.getElementById("excuse");
let who = ["The dog ", "My grandma ", "The Mailman ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the phone ", "the car ", "my computer "];
let when = [
  "before the class ",
  "when I was sleeping ",
  "while I was exercising ",
  "during my lunch ",
  "while I was bird watching",
];
let x = Math.floor(Math.random() * 4);

window.addEventListener("load", generator);
function generator() {
  document.body.append(who[x] + action[x] + what[x] + when[x]);
}
