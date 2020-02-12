var offset = 50;
var halfWidth = window.innerWidth / 2;
var halfHeight = window.innerHeight / 2;

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = e.pageY - 20 + "px";
        document.getElementById('cursor').style.left = e.pageX - 20 + "px";
        var midX = (e.pageX - halfWidth) * -.8;
        var midY = (e.pageY - halfHeight) * -.8;
        $('#projects').css('transform', 'translateX(' + midX + 'px) translateY(' + midY + 'px)');
    }
})

$win.on('scroll', function(){
    console.log(window.innerWidth);
    if ($win.scrollTop() < window.innerHeight && window.innerWidth > 1000) {
        $('#image').css('margin-top', parseInt($win.scrollTop()/2.5, 10) + 'px');
    }
});
