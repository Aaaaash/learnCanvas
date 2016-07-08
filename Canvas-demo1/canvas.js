window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    if(canvas.getContext('2d')){
        var context=canvas.getContext('2d');
    }else{
        alert('当前浏览器不支持canvas！');
    }
    // 画一条直线
    context.moveTo(100,100);            //定义起点
    context.lineTo(700,500);            //定义终点
    // moveTo和lineTo用于设置绘制的状态
    context.stroke();                   //绘制
}
