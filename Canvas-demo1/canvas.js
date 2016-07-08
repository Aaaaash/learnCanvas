window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    if(canvas.getContext('2d')){
        var context=canvas.getContext('2d');
        // context提供了canvas绘制的api
    }else{
        alert('当前浏览器不支持canvas！');
    }
    // 画一个矩形
    context.beginPath();        //定义声明一段新的路径
    context.moveTo(100,100);            //定义起点
    context.lineTo(100,600);            //定义终点
    context.lineTo(1000,600);
    context.lineTo(1000,100);
    context.lineTo(100,100);        //最后一个lineTo与moveTo一样则会使图形闭合
    context.lineWidth=2;
    context.strokeStyle="#000";
    // moveTo和lineTo用于设置绘制的状态
    context.stroke();                   //绘制（线条）
    context.fillStyle="#ff004f";        //设置颜色
    context.fill();                     //着色
    // 画布左上角为X轴原点
    context.closePath();            //结束一段路径

    
}
