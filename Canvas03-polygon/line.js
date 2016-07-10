window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.lineWidth=10;
    drawRect(context,800,150,400,400,10,"#058","rgb(255, 0, 79)");
    drawRect2(context,700,50,300,300,5,"#058","rgba(0,255,0,0.5)");
    // canvas默认后面绘制的图形如果与较早绘制的图形发生重叠，那么后绘制的会遮挡前绘制的图形
    // 如果后绘制的图形填充色为半透明，相交部分则会与前绘制的图形发生混合
}
// 根据以上绘制矩形的过程，编写用于绘制矩形的方法
function drawRect(cxt,x,y,width,height,borderWidth,borderColor,fillColor){
    cxt.beginPath();
    cxt.rect(x,y,width,height);             //使用canvas自带的rect方法可以省略线段的路径
    cxt.closePath();
    cxt.lineWidth=borderWidth;
    cxt.fillStyle=fillColor;
    cxt.strokeStyle=borderColor;
    cxt.fill();
    cxt.stroke();
}
function drawRect2(cxt,x,y,width,height,borderWidth,borderColor,fillColor){
    cxt.lineWidth=borderWidth;
    cxt.fillStyle=fillColor;
    cxt.strokeStyle=borderColor;
    cxt.fillRect(x,y,width,height);             //用于填充
    cxt.strokeRect(x,y,width,height);           //用于边框
}
