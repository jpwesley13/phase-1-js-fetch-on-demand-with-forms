const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //to access the input value from the event object, hone in on it from the event
    //event.target.children[1].value
    //or directly select the input element like so
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((resp) => resp.json())
    .then((data) => {
        //the below rewrite the "Title" and "Summary" parts of the HTML file as variables
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        
        title.innerText = data.title;
        summary.innerText = data.summary;
    })
    inputForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", init);