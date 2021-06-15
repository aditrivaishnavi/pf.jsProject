function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 200, 130, 230, 230);
    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(50, 70, 80);
    circle(50, 430, 80);
    circle(600, 70, 80);
    circle(600, 430, 80);

    fill(0, 200, 0);
    stroke(0, 200, 0);
    rect(90, 60, 470, 20);
    rect(90, 420, 470, 20);
    rect(40, 100, 20, 290);
    rect(590, 100, 20, 290);
}
function take_snapshot() {
    save('mySelfie.png');
}