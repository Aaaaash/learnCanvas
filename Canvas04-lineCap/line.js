window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.lineWidth=50;
    context.strokeStyle="#058";

    //lineCap用于设定一条线段起点与终点的样式
    // 默认为butt
    // round为凸出一个圆角
    // square为凸出的一个小矩形
    // lineCap只能用于线段的开始与结尾处（无论多少条折线）
    context.beginPath();
    context.moveTo(100,200);
    context.lineTo(700,200);
    context.lineCap="butt";
    context.stroke();

    context.beginPath();
    context.moveTo(100,400);
    context.lineTo(700,400);
    context.lineCap="round";
    context.stroke();

    context.beginPath();
    context.moveTo(100,600);
    context.lineTo(700,600);
    context.lineCap="square";
    context.stroke();

    // 基线
    context.lineWidth=1;
    context.strokeStyle="#27a";
    context.moveTo(100,100);
    context.lineTo(100,700);
    context.moveTo(700,100);
    context.lineTo(700,700);
    context.stroke();
}
