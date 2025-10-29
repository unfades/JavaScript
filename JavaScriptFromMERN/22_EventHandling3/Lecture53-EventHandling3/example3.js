let listItems = document.querySelectorAll("li");

let colors = ["blue", "red", "limegreen", "purple", "gold"];

//the drawback is if it is called 50 times,
//then the client machine will have to make 50 listeners, bad
//the second drawback is -
//if another item is added, then this is not applied to tht element
//therefore it is not the right way to addEventListeners to all elements

listItems.forEach((li) =>{
    li.addEventListener("click", () =>{
        li.style.color = colors[0];
    });
});

//to overcome this we must learn 1 event bubbling, 2 event delegation
//see example6 in EventExamples2 for the drawbacks