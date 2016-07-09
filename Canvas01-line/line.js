window.onload=function(){
    var canvas=document.getElementById('canvas');
    // canvas本身只有三个api，真正canvas的所有功能再context对象里
    canvas.width=1280;
    canvas.height=720;
    var context=canvas.getContext('2d');
    // console.log(canvas);
    // console.log(context);


    context.lineWidth=10;           //指定线条宽度（共用）

    context.beginPath();
    context.moveTo(100,100);            //基于状态的绘制   moveTo用于指定线条起点
    context.lineTo(1000,100);
    context.lineTo(1000,700);
    context.lineTo(100,700);
    context.lineTo(100,95);
    context.strokeStyle="#ff004f";         //指定绘制颜色
    context.stroke();

    context.beginPath();
    context.moveTo(200,200);        //重新调用moveTo可以绘制一条新的线段
    context.lineTo(900,200);
    context.lineTo(900,600);
    context.lineTo(200,600);
    context.lineTo(200,195);
    context.strokeStyle="#000";         //指定绘制颜色
    context.stroke();


    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(800,300);
    context.lineTo(800,500);
    context.lineTo(300,500);
    context.lineTo(300,295);
    context.strokeStyle="#058";         //指定绘制颜色
    context.stroke();                   //绘制

    // 以上都是设置了绘制图形的状态，仅用以上代码并不会绘制图形
    //使用beginPath()将会重新开始一段线条的绘制，如果一些没有修改则会共用（以上的lineWidth将会被共用）
    // 同时使用了beginPath以后，moveTo可以改写为lineTo，因为beginPath将自动把第一个lineTo作为起点
}
