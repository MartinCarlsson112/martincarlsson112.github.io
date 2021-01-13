
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}

var moving = false;
var smooth = 1;
var target = document;

if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling



var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE


function scroll(e)
{    
    e.preventDefault();
    if(!e.repeat)
    {
        var delta = e.delta || e.wheelDelta;
        if (delta === undefined) { //we are on firefox
            delta = -e.detail;
        }
        delta = Math.max(-1, Math.min(1, delta)) * vh(100);
	    target.scrollTop += Math.min(-delta , target.scrollHeight - frame.clientHeight);
        //stop listener
    }
}

function init()
{
    document.addEventListener('mousewheel', scroll, { passive: false });
    document.addEventListener('DOMMouseScroll', scroll, { passive: false });
}

function update()
{
    
    //if reached_target_pos
        //add listener again.
    
}

$('#scroll-disable').each(function(){
    //init();
});



