const loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');
// start load off at 0 and we need to increment it every so often to both show load progress and reveal the background image.
let load = 0;

// need to add products and catalogue to page.
let int = setInterval(bgBlur, 30);

function bgBlur() {
    load++

    if(load > 99) {
       let btn= document.createElement('button', 'type=btn')
       btn.classList.add('enter-btn');
       btn.innerHTML="Enter"
    //    btn.style.opacity= 0

       document.body.appendChild(btn);

       header = document.createElement('h1');
       header.classList.add('header');
       header.innerHTML="Laugh and the world laughs with you..."
       document.body.appendChild(header);
       //    window.location.replace("http://www.w3schools.com");
       
       clearInterval(int);
       btn.addEventListener('mouseenter', function () { 
        console.log(bg)
        flipBg(bg)
        console.log("hello!");
    //     setTimeout(() => {
    //         bg.style.transform = "";
    //       }, 500);   
    })

    btn.addEventListener('mouseleave', function () {
        bg.style.transform = "";})

        btn.addEventListener('click', function () {
            window.location.href = 'Portfolio.html';
    });
    
    loadText.innerText = `${load}%`  
    // need to map 0 to 100 to 1 to 0
    loadText.style.opacity = scale(load, 0, 100, 1.6, 0)
    bg.style.filter= `blur(${scale(load, 0, 100, 30, 0)}px`
    //   console.log(load)
}
}
// let button= document.querySelector('button')


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function flipBg(element) {
    element.style.transform = 'scale(-1)';
    console.log("hello world")

}

// button.addEventListener('mouseover', () => { flipBg()})
// btn.addEventListener('mouseover', () => { flipBg()})