noseY = 0;
noseX = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500 , 500);
    canvas = createCanvas(500 , 500);
    canvas.position(560 , 150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on(pose , gotPoses);
    video.position(20 , 150)
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + ", nose Y = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = Math.floor(rightWristX - leftWristX);
        console.log("Right Wrist X = " + rightWristX + ", Left Wrist X = " + leftWristX);
        console.log("difference = " + difference);
    }
}

function draw() {
    background="#cf9fed";
    document.getElementById("square_side").innerHTML = "Width and Height of the square is" + difference + "px";
    Fill("#6d68ed");
    stroke("#504ae8")
    square(noseX , noseY , difference);
}