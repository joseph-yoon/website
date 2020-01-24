window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');
var _cursorFollower = document.getElementById('cursorFollower');

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
    else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
    else
    {
        return event.clientY;
    }
}

var offset = 50;
var halfWidth = window.innerWidth / 2;
var halfHeight = window.innerHeight / 2;

function cursor() {
    if (window.innerWidth > 1000) {
        var midX = (getX(event) - halfWidth) * -.8;
        var midY = (getY(event) - halfHeight) * -.8;
        _cursor.style.top = getY(event) - 20 + "px";
        _cursor.style.left = getX(event) - 20 + "px";
        _cursorFollower.style.top = getY(event) - offset + "px";
        _cursorFollower.style.left = getX(event) - offset + "px";
        $('#projects').css('transform', 'translateX(' + midX + 'px) translateY(' + midY + 'px)');
    }
}

$win.on('scroll', function(){
    console.log(window.innerWidth);
    if ($win.scrollTop() < window.innerHeight && window.innerWidth > 1000) {
        $('#image').css('margin-top', parseInt($win.scrollTop()/2.5, 10) + 'px');
    }
});