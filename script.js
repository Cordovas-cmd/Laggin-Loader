const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// start load off at 0 and we need to increment it every so often to both show load progress and reveal the background image.
let load = 0;


let int = setInterval(bgBlur, 30);

function bgBlur() {
    load++

    if(load > 99) {
        clearInterval(int);
    }

      console.log(load)
}
