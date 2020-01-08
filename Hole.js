class Hole {
    constructor(holeInner) {
        this.x = Math.floor((Math.random()) * window.outerWidth);
        this. y = Math.floor((Math.random()) * window.outerHeight);
        this.holeInner = holeInner;
        this.makeNewHole(this.holeInner);
        this.setHoleCentre();
    }
    //getBoundingClientRect
    makeNewHole(holeInner) {
        const hole = document.createElement("div");
        const holeWidth = 100;
        const holeHeight = 100;

        hole.style.height = holeWidth + "px";
        hole.style.width = holeHeight + "px";
        hole.style.position = "absolute";
        hole.innerHTML = `<p>${holeInner}</p>`


        if(this.x + holeWidth > window.outerWidth) {
            hole.style.left = (this.x - 100) + "px";
        }
        else {
            hole.style.left = this.x + "px";
        }

        if(this.y + holeHeight > window.outerHeight) {
            hole.style.top = (this.y - 100) + "px";
        } else {
            hole.style.top = this.y + "px";
        }
               
        document.querySelector("#holes-container").appendChild(hole);
    }
    setHoleCentre() {
        
    }
}