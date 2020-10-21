document.body.onkeyup = function(e) {
  if (e.key == "d") {
    document.body.classList.toggle("dark");
  }
  // by setting the event "e" key equal to d, it will go into the document, specififying the body and its classlist, and by pressing "d" it will create the class "dark"
  // but also need to create the class "dark" in css for it to toggle to
}