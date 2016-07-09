window.onload=function(){
    var canvas=document.getElementById('canvas');
    // canvas本身只有三个api，真正canvas的所有功能再context对象里
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    // console.log(canvas);
    // console.log(context);
    context.lineWidth=10;           //指定线条宽度（共用）
    context.beginPath();            //使用beginPath和closePath两个方法将多边形的路径包起来
    context.moveTo(100,350);            //基于状态的绘制   moveTo用于指定线条起点
    context.lineTo(500,350);
    context.lineTo(500,200);
    context.lineTo(700,400);
    context.lineTo(500,600);
    context.lineTo(500,450);
    context.lineTo(100,450);
    // context.lineTo(100,350);             同时如果使用了closePath，最后闭合的路径lineTo可以省略
    // closePath将会自动把最后一个路径的lineTo与起点moveTo链接起来
    context.closePath();
    context.strokeStyle="#058";
    context.fillStyle="yellow";         //指定填充背景色
    context.fill();                     //执行填充
    context.stroke();
    // fill和stroke调换顺序将会改变多边形线段的宽度
    // 也就是说当我们需要绘制一个有描边并且填充背景色的多边形时，需要把背景色fill方法放在绘制stroke方法前面


    //矩形绘制方法
    drawRect(context,800,150,400,400,10,"#058","#ff004f");
}
// 根据以上绘制矩形的过程，编写用于绘制矩形的方法
function drawRect(cxt,x,y,width,height,borderWidth,borderColor,fillColor){
    cxt.beginPath();
    cxt.moveTo(x,y);
    cxt.lineTo(x+width,y);
    cxt.lineTo(x+width,y+height);
    cxt.lineTo(x,y+height);
    cxt.closePath();

    cxt.lineWidth=borderWidth;
    cxt.fillStyle=fillColor;
    cxt.strokeStyle=borderColor;
    cxt.fill();
    cxt.stroke();
}
