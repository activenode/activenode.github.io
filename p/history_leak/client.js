//let this list be on server-side to hide what is going on 
var list = [
    'https://ebay.de/',
    'https://github.com',
    'https://google.com',
    'https://news.google.de',
    'https://www.docker.com',
    'https://www.mydealz.de',
    'https://google.de',
    'http://www.banggood.com',
    'http://www.chefkoch.de',
    'https://www.alternativefuer.de',
    'https://www.otto.de',
    'http://www.tagesschau.de',
    'https://www.cdu.de',
    'https://facebook.github.io/react/',
    'https://vuejs.org',
    'http://www.youporn.com',
    'http://www.pornhub.com',
    'http://www.redtube.com',
    'http://www.golem.de',
    'https://www.docker.com',
    'https://www.youtube.com',
    'http://eatsmarter.de',
    'https://www.urlaubspiraten.de'
];

function* linkGenerator(list) {
    let l = [].concat(list);
    while (l.length) {
        yield l.shift();
    }
    return false;
}

var bCatchActions = false;

function startGame(){
    var sourceNode  = document.querySelector('a.link.skeleton');
    var skel        = sourceNode.cloneNode(true);
    skel.classList.remove('skeleton');
    var par         = sourceNode.parentNode;
    par.removeChild(sourceNode);
    document.body.classList.add('game-started');


    var linkList = linkGenerator(list);
    var current = linkList.next();
    while (current.value) {
        var clonedNode = skel.cloneNode(true);
        clonedNode.href = current.value;
        par.appendChild(clonedNode);
        current = linkList.next();
    }

    requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            par.querySelector(':first-child').classList.add('show');
        });
    });


    var index = 0;
    var indices_pushed = [];
    var action = function(upDown) {
        if (index>=list.length) {
            return;
        }
        if (upDown=='up') {
            document.querySelector('.ctrl.up').animate([
                {transform: 'scale(1)'},
                {transform: 'scale(0.6)'},
                {transform: 'scale(1)'}
            ], {duration: 160});
        } else {
            indices_pushed.push(index);
            document.querySelector('.ctrl.down').animate([
                {transform: 'scale(1)'},
                {transform: 'scale(0.6)'},
                {transform: 'scale(1)'}
            ], {duration: 160});
        }
        

        par.querySelector('a.link.show:nth-child('+(index+1)+')').classList.add('hide');
        var next = par.querySelector('a.link:nth-child('+(index+2)+')');
        if (next) {
            next.classList.add('show');
        } else {

            //alert('End Game');
            document.body.classList.add('game-end');
            indices_pushed.forEach(index=>{
                console.log(list[index]);
            });
        }

        index++;
    };

    
    document.addEventListener('keyup', (event)=>{
        var downKey     = 40;
        var upKey       = 38;

        if (event.keyCode==downKey || event.keyCode==upKey) {
            action(event.keyCode==downKey ? 'down' : 'up');
        }
    })
}
