
var loop = 2;
var x, y;

function init() {
    c = document.getElementById("convas").getContext("2d");
    window.sun();
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight;
    setInterval(increase, 100);
}

function increase() {

    loop = loop - .1;
    rotate(loop);


}


function rotate(loop)
{  
   window.clearFrame();
   window.frame();
   window.earth(loop);
   window.moon(loop); 
   window.moon(loop);
   window.sun();
}
function clearFrame()
{
    c.clearRect(0, 0, 500, 500);
}

function frame()
{   
    c.beginPath();
    c.fillStyle = "#000000";
    c.fillRect(0,0,500,500);
    c.strokeRect(0, 0, 500, 500);
    c.closePath();
    c.stroke();
    c.fill();
}


function earth(a) {
 

    x = 200 + (150 * Math.cos(a + 30));
    y = 250 + (120 * Math.sin(a + 10));
    var img = new Image();
    img.src = "images/Earth_anim.gif";
    c.beginPath();
    c.drawImage(img,x,y,30,30);
    c.closePath();
    c.stroke();
    c.fill();

}

function sun() {

    var img = new Image();
    img.src = "images/sun.png";
    c.beginPath();
    c.drawImage(img,200,200,64,64);
    c.closePath();
    c.stroke();
    c.fill();

}

function moon(a) {
   
 
    x = 210 + (160 * Math.cos(a + 30));
    y = 260 + (140 * Math.sin(10 + a));

    if (x > 200|| y > 280)
     {
        var img = new Image();
        img.src = "images/moon.png";
        c.beginPath();
        c.drawImage(img, x, y, 10, 10);
        c.closePath();
        c.stroke();
        c.fill();
    }
}



