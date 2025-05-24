const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.textContent= "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const headThree = document.createElement("h3");
headThree.textContent = "I'm blue h3!";
headThree.style.color = "blue";
container.appendChild(headThree);

const contentTwo = document.createElement("div");
contentTwo.setAttribute("style", "border: solid black; background: pink;");
const headOne = document.createElement("h1");
headOne.textContent = "I'm in a div";
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";
contentTwo.appendChild(headOne);
contentTwo.appendChild(paraTwo);
container.appendChild(contentTwo);

