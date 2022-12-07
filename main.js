function preload(){

}

function setup(){
  canvas=createCanvas(550,550);
  canvas.position(560,90);

  video=createCapture(VIDEO);
  video.size(550,500);

  poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on("pose",getPoses);
}

function draw(){
  background("#FAEFAC");
}

function modelLoaded(){
  console.log("model loaded");
}

function getPoses(results){
  if(results.lenght>0){
    console.log(results);
  }
}
