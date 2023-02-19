//js


document.getElementById("demo").innerHTML = 
"Screen width is " + screen.width;

document.getElementById("whitebutton").onclick=whitebutton;
document.getElementById("bluebutton").onclick=bluebutton;
document.getElementById("greenbutton").onclick=greenbutton;
document.getElementById("redbutton").onclick=redbutton;

function whitebutton()
{
    document.getElementsByTagName('body')[0].style.backgroundColor='antiquewhite';
    document.getElementsByTagName('body')[0].style.color='black';
}

function bluebutton()
{
    document.getElementsByTagName('body')[0].style.backgroundColor='aqua';
    document.getElementsByTagName('body')[0].style.color='white';
}
function greenbutton()
{
    document.getElementsByTagName('body')[0].style.backgroundColor='rgb(47, 255, 50)';
    document.getElementsByTagName('body')[0].style.color='black';
}
function redbutton()
{
    document.getElementsByTagName('body')[0].style.backgroundColor='#ff4000e8';
    document.getElementsByTagName('body')[0].style.color='white';
}

