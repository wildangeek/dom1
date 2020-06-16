const spanBaru = document.createElement("span");
const nama = document.createTextNode("Wildan");
newSpan.appendChild(nama);

const spanLama = document.querySelector("h1 span");
const h1 = document.getElementsByTagName("h1");
h1[0].replaceChild(spanBaru, spanLama);