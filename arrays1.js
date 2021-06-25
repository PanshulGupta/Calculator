var marks = [75,93,81,87,99];
console.log(marks);

function setup(){
    createCanvas(800,800);
    mean()
}

function draw(){
    background("cyan")

}

function mean(){
    var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
    var aver = sum/5;
    console.log(aver)
}

