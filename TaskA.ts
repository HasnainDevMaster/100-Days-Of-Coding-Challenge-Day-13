// 100 Days Of Coding Challenge!

/** Question 37:
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

//------------------------------------------------------------------------------------------------------------------------------

// Using make_shirt function to have a default size of “large,Medium” and a default message of “I love TypeScript”
function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(`Shirt size: ${size}`);
  console.log(`Message printed on the shirt: "${message}"`);
}

// Large and Medium sized shirts printed with default message
// Small sized shirt with a custom message printed on it
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "TypeScript is Awesome!"); // Small shirt with a custom message
