let excuses = document.getElementById("excuse");
let who = ["The dog", "My grandma", "The Mailman", "My bird"];
window.addEventListener("load", generator);
function generator() {
  for(let i in who){
  excuses.append(i);
}
}
