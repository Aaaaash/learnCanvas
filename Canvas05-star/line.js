window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.lineWidth=10;
    context.strokeStyle="#058";
    // lineJoin        用于指定线条相交时的形态
    // miter  尖角（默认）
    // bevel  斜接
    // round  圆角
    context.lineJoin="miter";           //斜接
    // miterLimit指当lineJoin为miter时，所产生的内角与外角之间距离的最大值，默认值为10，一但超过10lineJoin将会自动变为bevel
    // miterLimit只有当lineJoin为miter才会有用
    context.miterLimit=20;
    drawStar(context,20,250,400,400,0);
    // 当内圆大小变得很小时，lineJoin自动变为bevel
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


// 总结  线条属性一共有四种

/*
    lineWidth:  线条宽度
    lineCap:    线条两端的形状（默认为butt,round为圆角，square为一个矩形）
    lineJoin:   线条相交时的形态（默认为miter尖角，bevel为斜接，round为圆角）
    miterLimit: 当lineJoin为miter时，两条相交的线条所产生的内角与外角之间距离的最大值（较宽的线条），
                （默认值为10），当最大值超过10，lineJoin会变为bevel
*/
