let numbers = [5, 4, 9, 2, 5, 2, 9, 2, 4, 3]
let outputObj = document.getElementById("output");
let output = numbers[0];

for (number in numbers) {
	if (number > output) output = number;
}

outputObj.innerText = output;