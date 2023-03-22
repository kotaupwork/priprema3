const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h2").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


//https://www.htmlcssbuttongenerator.com/css-button-generator.html
//https://codepen.io/Hyperplexed/pen/rNrJgrd
//https://taylorvowell.com/
//https://www.rubens.design/
//https://jopecuro.com/#Home
//https://baloo.rs/?gclid=CjwKCAjwq-WgBhBMEiwAzKSH6MvQvScmsaNBaFG7ObfNBDEH7DzNoBVV4Rff_rIqKxfwbpleF9OF7xoCoIsQAvD_BwE