console.log("Script.js running")
let greetingLoaded = document.getElementById("#greeting");

greetingLoaded&&greetingLoaded.addEventListener('click', ()=>{
    console.log("Hey")
    this.innerHTML = "Welcome Philipp"
})