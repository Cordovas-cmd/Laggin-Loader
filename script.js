const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// start load off at 0 and we need to increment it every so often to both show load progress and reveal the background image.
let load = 0;


let int = setInterval(bgBlur, 30);

function bgBlur() {
    load++

    if(load > 99) {
       let btn= document.createElement('button', 'type=btn')
       btn.classList.add('enter-btn');
       btn.innerHTML="Enter"

       document.body.appendChild(btn);
    //    window.location.replace("http://www.w3schools.com");

        clearInterval(int);
    }

    loadText.innerText = `${load}%`  
    // need to map 0 to 100 to 1 to 0
    loadText.style.opacity = scale(load, 0, 100, 1.6, 0)
    bg.style.filter= `blur(${scale(load, 0, 100, 30, 0)}px`
      console.log(load)
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }