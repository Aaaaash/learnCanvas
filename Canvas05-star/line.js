window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.lineWidth=10;
    context.strokeStyle="#058";
    drawStar(context,100,250,400,400,30);
}

function drawStar(cxt,r,R,x,y,rot){
    cxt.beginPath();
    for(var i=0;i<5;i++){
        cxt.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,-Math.sin((18+i*72-rot)/180*Math.PI)*R+x);
        cxt.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+y,-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
    }
    cxt.closePath();
    cxt.stroke();
}
