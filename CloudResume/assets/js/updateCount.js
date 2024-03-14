// Update Viewer Count
const counter = document.querySelector(".websiteviews");
async function updateCounter() {
	let response = await fetch("https://hxvubt6bmijehanmbo6dcozcsa0uxfkw.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Website Views: ${data}`;
}

updateCounter();