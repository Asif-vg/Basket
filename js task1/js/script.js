let btn = document.getElementById("btn");
let ul = document.getElementById("oha")


const ls = JSON.parse(localStorage.getItem("all"));

btn.addEventListener("click", (e) => {

	let li = document.createElement("li");

	li.classList.add("item")

	let a = document.createElement("a");
	a.textContent = document.getElementById("input").value;

	li.appendChild(a);


	ul.appendChild(li);

	document.getElementById("input").value = " ";

})


function localstorage() {
	var all = [];
	let li = document.querySelectorAll("li");
	all.push(() => {
		text: li.innerText

	})

	localStorage.setItem("", JSON.stringify())
}