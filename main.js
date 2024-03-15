const canvas = document.querySelector( 'canvas' );
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'red'
// c.fillRect(300, 100, 100, 100)

// c.moveTo(100, 100)
// c.lineTo(400, 500)
// c.strokeStyle = 'green'
// c.stroke();

// c.arc(x, y, radius, start, end, false)


// for(i=0; i<20; i++){
//     const x = Math.random() * window.innerHeight;
//     const y =  Math.random() * window.innerWidth;
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI*2, false)
//     c.strokeStyle = 'blue'
//     c.stroke()
// }
class Circle{
    constructor(x,y,radius,dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        c.strokeStyle = 'blue'
        c.fillStyle = this.color
        c.fill()
        c.stroke()

        this.update()
    }
    update(){
        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x+= this.dx
        this.y+= this.dy
    }
}
// const circle = new Circle(150,200,60, 10, 10)

// let x = Math.random() * innerWidth ;
// let y = Math.random() * innerHeight ;
// let dx = (Math.random() - 0.5) *10;
// let dy = (Math.random() - 0.5) *10;
// let radius = 60;

const circlesArray = []
const colorsArray = ['red', 'purple','green', 'yellow', 'orange','pink','cyan','magenta','brown']
function randomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

for(let i =0; i<1000;i++){
    let radius = 10;
    let x = Math.random() * (innerWidth - radius * 2) + radius ;
    let y = Math.random() * (innerHeight - radius * 2) + radius ;
    let dx = (Math.random() - 0.5) *2;
    let dy = (Math.random() - 0.5) *2;
    
    const colorIndex = randomInteger(1, colorsArray.length - 1)
    circlesArray.push(new Circle(x,y,radius,dx,dy, colorsArray[colorIndex]))
}

function animate(){

    requestAnimationFrame(animate)
    c.clearRect(0,0, window.innerWidth, window.innerHeight)
    for(let i =0; i<circlesArray.length; i++){
        circlesArray[i].draw()
    }
//     c.beginPath()
//     c.arc(x, y, radius, 0, Math.PI*2, false)
//     c.strokeStyle = 'blue'
//     c.stroke()

//     if(x + radius > window.innerWidth || x - radius < 0){
//         dx = -dx
//     }
//     if(y + radius > window.innerHeight || y - radius < 0){
//         dy = -dy
//     }
//     x+= dx
//     y+= dy
// }
}

animate()
