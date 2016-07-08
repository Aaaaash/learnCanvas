window.onload=function(){
    //context.arc方法用于绘制弧线
    /*
        context.arc(
            centerx,centery,radius,             圆心的x,y坐标以及半径
            startingAngle,endingAngle,          弧度值起始位置与结束位置
            anticlockwise=false                 顺时针或逆时针，默认false为顺时针
        )
    */
    var canvas=document.getElementById('canvas');
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    context.lineWidth=3;
    context.strokeStyle="#005588";
    context.arc(300,300,200,0,1.5*Math.PI);
    // 圆心坐标为300,300，半径为200，起始位置为0，结束为止为1.5pi,默认绘制方向为顺时针
    context.stroke();
    // 使用for循环绘制10段弧
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(50+i*100,60,40,0,2*Math.PI*(i+1)/10);
        //context.closePath();            //closePath会自动封闭路径
        // 不使用closePath结束路径则不会自动封闭
        context.fillStyle="#005588";
        context.fill();
        context.stroke();
    }
}
