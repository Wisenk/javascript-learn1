	alert ("hey what's up?");
		document.write ("This is our javascript being written first before anything else");
		
		console.log ("this is text that will be sent directly to the console to let us know that our program completed successfully");
		
		
		var lives = 3;
		var example = "I am a variable";
		document.write (example);
		
		example = "This is another example for the same variable";
		
		document.write (example);
		
		
		alert ("WELCOME!!");
		
		var VisitorName = prompt ("what is your name?");
		var FavColour = prompt ("what is your favourite colour?");
		
		document.write ("Hello " + VisitorName + "Your Favourite Colour is " + FavColour);
		
		console.log ("program completed!");
		
		
		
		
	
	
	const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
