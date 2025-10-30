const addForm = document.addfrm;
const textItem = addForm.add;
const ul = document.querySelector(".todos");
const addItem = (item) => {
	//html hack with javascript to apply all css classed and justadd the element
	//based on the input we gave...
	//apply the html to a string, pass the item added within, then
	//add the string to the innerhtml of the list ul or ol or whatever
	//you need to add it to, took the element logic and applied it
	//to the object that we needed to...
	let str = `<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<span>${item}</span>
					<i class="far fa-trash-alt delete"></i>
				</li>`;
	ul.innerHTML += str;
};
ul.addEventListener("click", (e) => {
	if (e.target.nodeName === "I") {
		e.target.parentElement.remove();
	}
});
addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(textItem.value);
	if (textItem.value.length !== 0) {
		addItem(textItem.value);
	}
	textItem.value = "";
});
const searchList = (str) => {
	let all_li = ul.children;
	for (let li of all_li) {
		if (li.innerText.toLowerCase().includes(str) === false) {
			li.classList.add("filtered");
		} else {
			li.classList.remove("filtered");
		}
	}
};
let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
	searchList(searchText.value.toLowerCase().trim());
});
