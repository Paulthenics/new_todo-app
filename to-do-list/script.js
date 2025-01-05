// DATE AND TIME
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	m = checkTime(m);
	timeEl.innerHTML = "Time" + ":" + "  " + h + ":" + m;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} // Add zero in front of numbers < 10
	return i;
}

function getTodayDate() {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
	const yyyy = today.getFullYear();

	return yyyy + "/" + mm + "/" + dd;
}

dateEl.innerHTML = "Date" + ":" + " " + getTodayDate();

// QUOTE GENERATOR
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const getQuote = () => {
	fetch("https://quotes-api-self.vercel.app/quote")
		.then((response) => response.json())
		.then((data) => {
			quoteEl.textContent = data.quote;
			authorEl.textContent = data.author;
		})
		.catch((error) => {
			// Handle any errors
			console.log(error);
			quoteElement.textContent = "Failed to fetch a quote.";
			authorElement.textContent = "";
		});
};


// TO-DO LIST
const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
const noTasks = document.getElementById("no-tasks");

function addTask() {
	if (inputTask.value === "") {
		window.alert("Please Enter a Task");
	} else {
		let listItem = document.createElement("li");
		listItem.textContent = inputTask.value;
		listContainer.appendChild(listItem);
		let span = document.createElement("delete");
		span.textContent = "";
		listItem.appendChild(span);
	}
	inputTask.value = "";
	save();
}

listContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		save();
	} else if (e.target.tagName === "DELETE") {
		e.target.parentElement.remove();
		save();
	}
});

inputTask.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addTask();
	}
});

function save() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}

function checkTasks() {
	if (listContainer.children.length > 1) {
		noTasks.style.display = "none";
	} else {
		noTasks.style.display = "block";
	}
}

showTask();
