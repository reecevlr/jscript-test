const container = document.querySelector('#container');

// Init variables
const text = document.createElement('p');
const heading = document.createElement('h3');
const customDiv = document.createElement('div');
const divH1 = document.createElement('h1');
const divText = document.createElement('p');

textStyle = text.style;
headingStyle = heading.style;
customDivStyle = customDiv.style;

// Set content
text.textContent = 'Hey, I\'m red!';
heading.textContent = 'I\'m a blue h3!';
divH1.textContent = 'I\'m in a div';
divText.textContent = 'ME TOO!'

// Set CSS (cssText method)
textStyle.cssText = 'color: red;';
headingStyle.cssText = 'color: blue;';
customDivStyle.cssText = 'border-color: black; background-color: pink;';

// Get CSS 
console.log(textStyle);
console.log(headingStyle);
console.log(customDivStyle);

// Add to HTML
customDiv.append(divH1);
customDiv.append(divText);

container.append(text);
container.append(heading);
container.append(customDiv);
