const panels = document.querySelectorAll('.panel');


// you can loop through a node list like you can with an array.
panels.forEach(panel =>  {

    if(!panel.classList.contains('.active')){
        panel.classList.add('inactive');
        panel.classList.remove('active');
    } else {
    }
panel.addEventListener('click', () => {
    removeActiveClasses()
    
    if(panel.classList.contains('.active') || !panel.classList.contains('inactive')) {
        removeActiveClasses()
        panel.classList.remove('inactive');
    }
    else {
        panel.classList.add('active')
        panel.classList.remove('inactive')
    }
})
})

function removeActiveClasses() {
    panels.forEach(panel => {
        if(panel.classList.contains('active')) {
        panel.classList.remove('active') 
        panels.classList.add('inactive')
        // panel.classList.add('inactive')
    } 
    else{
    // (!panel.classList.contains('inactive'))
    
        panel.classList.add('inactive')}
    //     else {
    //         return;
    //     }

        // else {
        //     panel.classList.add('active');
        // }
        // if(panel.matches('.active')) {
        //     panel.classList.remove('inactive');
        // }
    })
}