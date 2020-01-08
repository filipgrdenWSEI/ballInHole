document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
 generHoles();
 console.log(window)
}

function generHoles() {
    for(let i = 1; i < 11; i++) {
        new Hole(i);
    }
}
