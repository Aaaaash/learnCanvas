window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.fillStyle="#4b4b4b";
    context.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<200;i++){
        var r=Math.random()*10+10;
        var x=Math.abs(Math.random()*canvas.width-40)+20;
        var y=Math.abs(Math.random()*canvas.height-40)+20;
        drawStar(context,r/2.0,r,x,y,0);
    }
}

function drawStar(cxt,r,R,x,y,rot){
    cxt.beginPath();
    for(var i=0;i<5;i++){
        cxt.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,-Math.sin((18+i*72-rot)/180*Math.PI)*R+y);
        cxt.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+x,-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
    }
    cxt.closePath();
    cxt.fillStyle="#fb3";
    cxt.strokeStyle="#fd5";
    // cxt.lineWidth=3;
    cxt.lineJoin="round";
    cxt.fill();
    cxt.stroke();
}


// 总结  线条属性一共有四种

/*
    lineWidth:  线条宽度
    lineCap:    线条两端的形状（默认为butt,round为圆角，square为一个矩形）
    lineJoin:   线条相交时的形态（默认为miter尖角，bevel为斜接，round为圆角）
    miterLimit: 当lineJoin为miter时，两条相交的线条所产生的内角与外角之间距离的最大值（较宽的线条），
                （默认值为10），当最大值超过10，lineJoin会变为bevel
*/
