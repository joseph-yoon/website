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


function cursor() {
    _cursor.style.top = getY(event) - 10 + "px";
	_cursor.style.left = getX(event) - 10 + "px";
    _cursorFollower.style.top = getY(event) - offset + "px";
    _cursorFollower.style.left = getX(event) - offset + "px";
}
