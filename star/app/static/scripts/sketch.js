let star;
let shadesSlider;
let shadesRadiusSlider;

const width = 800;
const height = 800;

const xPos = width / 2;
const yPos = height / 2;
const radius = 200;

const minShades = 1;
const maxShades = 600;
const minRadius = 10;
const maxRadius = 400;

function setup() {
    createCanvas(width, height);
    shadesSlider = createSlider(minShades, maxShades, minShades, 1);
    shadesRadiusSlider = createSlider(minRadius, maxRadius, minRadius, 1);
}

function draw() {
    background(28, 241, 255);
    fill(255, 255, 0);
    strokeWeight(0);
    star = new Star(xPos, yPos, radius, shadesSlider.value(), shadesRadiusSlider.value());
    star.display();
}