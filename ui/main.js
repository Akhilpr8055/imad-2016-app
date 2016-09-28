console.log('Loaded!');
var element = document.getElementById('name1');

element.innerHTML='JOMON';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginleft + 'px';
}

img.onclick = function()
{
    var intervel = setInterval(moveRight, 10);
};
