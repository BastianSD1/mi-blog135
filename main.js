x = 0;
y = 0;
function setup(){
    Video=createcapture(VIDEO);
    video.size(550, 500);
    
    Canvas.createcanvas(55,500);
    canvas.position(560,150);
    
    posenet= m15(video, modelloaded)
    ><
    }
function canvas {
    Canvas.createcanvas(55,500);
    canvas.position(560,150);
    
}

function modelloaded(){
    console.log(modelocargado)

}
function gotposes(){
if(results.leght>0){
console.log(results);

noseX=results[0].pose.nose.x ;
noseY=results[0].pose.nose.x ;
console.log("noseX =" + noseX +" noseY +" +noseY)
leftwristX=results[0].pose.leftwrist.x;
rightwristX=results[0].pose.rightwrist.x;
difference =floor("leftwrist.x-rightwrist.x")
console.log(" leftwristX=" + leftwristX +" rightwristY +" +rightwristY +" difference= "+ difference)





}
}