//console.log("testScript.js running, probably being imported");

export default function testFunction() {
  const greeting = document.createElement("p");
  greeting.textContent = " ";
  greeting.id = "#greeting";

  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(greeting);
    const greetingElement = document.getElementById("#greeting");
    if (greetingElement) {
      greetingElement.innerHTML = "Click me";
      greetingElement.addEventListener("click", function(){ //function(){} <- ohne diese Syntax funktioniert das this. keyword hier nicht (Kontext fehlt)
        this.innerHTML = "Welcome Philipp";
      });
    }
  });
}
