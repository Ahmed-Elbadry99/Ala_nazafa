const p = document.getElementById("myParagraph");
const words = p.textContent.trim().split(/\s+/);

if (words.length >= 2) {
  words[1] = `<span>${words[1]}</span><br>`; // wrap the 2nd word
}

p.innerHTML = words.join(' ');
