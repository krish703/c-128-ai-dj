song="";
leftwristX=0;
leftwristy=0;
rightwristX=0;
rightwristy=0;

function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,450);
}

function preload(){
song=loadSound("music.mp3");
}

function playSound(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}

function modelLoaded(){
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}
else{
    console.log(error);
}
leftwristX=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
console.log("leftWristx= "+leftwristX+"leftwristy= "+leftwristy);
rightwristX=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
console.log("rightWristx= "+rightwristX+"rightwristy= "+rightwristy);
}
