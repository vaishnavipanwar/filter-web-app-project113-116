nose_x=0;
nose_y=0;


function preload() {
mustache=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(300, 300);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on('pose', gotResult);
}

function draw() {
    image(camera, 0, 0, 300, 300);
    image(mustache,nose_y-5,nose_x-5,40,20);
}

function images() {
    save("filter.jpg");
}

function modelLoaded() {
    console.log("posenet is iniciated");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x =" + nose_x);
        console.log("nose y =" + nose_y);

    }
}
