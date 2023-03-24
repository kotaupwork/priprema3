for (var i = 0; i <4; i++)
{
  var subtitle = document.getElementsByClassName("card-subtitle")[i];
  
    //window.alert(subtitle.getElementsByTagName("span").length);
    //za svaki span se stvore dva tj span i /span
  var createWord = (text, index) => {
  
  var word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

var addWord = (text, index) => subtitle.appendChild(createWord(text, index));

var createSubtitle = text => text.split(" ").map(addWord);
switch (i) {
  case 0:
    createSubtitle("Website design");
    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("New line");
    break;
  case 1:
    createSubtitle("Menu, Banner and Visit card design");
    break;
  case 2:
    createSubtitle("Linkedin banner design");

    var icon = document.createElement("img");
    icon.classList.add("ikona");
    icon.src="slike/ikonice/linkedin.png"
    subtitle.appendChild(icon);
    
    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("Instagram ...");

    var icon = document.createElement("img");
    icon.classList.add("ikona");
    icon.src="slike/ikonice/instagram.png"
    subtitle.appendChild(icon);

    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("Twitter ...");

    var icon = document.createElement("img");
    icon.classList.add("ikona");
    icon.src="slike/ikonice/twitter.png"
    subtitle.appendChild(icon);

    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("Email ...");

    var icon = document.createElement("img");
    icon.classList.add("ikona");
    icon.src="slike/ikonice/mail-white.png"
    subtitle.appendChild(icon);
    break;
  default:
    createSubtitle("NFC tag setup, QR code print");
}
}