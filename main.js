function preload() 
{
ball_touch_paddel = loadSound("ball_touch_paddel.wav");
setSprites();
MarioAnimation();
}

function setup() 
{
canvas=createCanvas(1240,336);
canvas.parent('canvas')
video=createCapture(VIDEO);
video.size(800,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
console.log('Model Loaded!');
}
function gotPoses()
{
if(results.length>0)
{
console.log(results)
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
}
}
function draw()
{
background(0); 
image(video, 0, 0, 700, 600); fill("black"); 
stroke("black"); 
rect(680,0,20,700); 
fill("black"); 
stroke("black"); 
rect(0,0,20,700);
}