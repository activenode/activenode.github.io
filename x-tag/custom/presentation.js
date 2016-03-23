xtag.register('x-twitter', {
    content: function(){/*

    */}
});

xtag.register('x-slide-item-code', {
    lifecycle: {
        created: function(){
            if (this.getAttribute('lang')=='html') {
                var htmlStr = '';
                for (var i=0; i<this.childNodes.length; i++) {
                    if (this.childNodes[i].nodeType==8) {
                        htmlStr = this.childNodes[i].nodeValue;
                        htmlStr = htmlStr.replace('<!--','');
                        htmlStr = htmlStr.replace('-->','');
                        htmlStr = htmlStr.replace(/</g,'&lt;');
                        htmlStr = htmlStr.replace(/>/g,'&gt;');
                        this.innerHTML = htmlStr;
                        break;
                    }
                }
            }

            var whitespaceBefore = this.innerHTML.match(/^[\s]+/);
            if (whitespaceBefore && whitespaceBefore.length) {
                whitespaceBefore = whitespaceBefore[0].replace("\n",'');

                var codeBefore = this.innerHTML;
                this.innerHTML = this.innerHTML.replace(whitespaceBefore, '');

                while (codeBefore!=this.innerHTML) {
                    codeBefore = this.innerHTML;
                    this.innerHTML = this.innerHTML.replace(whitespaceBefore, '');
                }

            }


            this.innerHTML =
                '<div class="codewrap"><code><pre>'
                + this.innerHTML
                + '</pre></code></div>';
        }
    }
})

xtag.register('x-giphy', {
    //http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat
});

xtag.register('x-presentation', {
    lifecycle: {
        created: function(){
            Array.prototype.slice.call(this.childNodes).forEach((node) => {
                if (node.nodeName != 'X-SLIDE') {
                    //removing invalid nodes from presentation
                    this.removeChild(node);
                }
            });
        }
    }
});

xtag.register('x-slide-item', {
    methods: {
        show: function(){
            this.classList.add('item-shown');
        },
        finish: function(){
            this.classList.add('item-finished');
        },
        reset: function(){
            this.classList.remove('item-shown');
            this.classList.remove('item-finished');
        }
    }
});

xtag.register('x-slide', {
    accessors: {
        testAccessor: {
            attribute: {},
            get: function(){
                top.alert('test-accessor was get()-called');
                return 'some value';
            }
        }
    },
    lifecycle: {
        created: function(){
            if (this.parentNode.nodeName!='X-PRESENTATION') {
                console.error('Wow, stop here Dude! This is not the way to happiness.');
                return false;
            }

            var slideNodeIndex = Array.prototype.indexOf.call(this.parentNode.childNodes, this);

            if (slideNodeIndex==0) {
                //is the first slide!
                this.classList.add('slide-intro');
            }
        }
    },
    events: {
        tap: function(event){
          console.log('@event', event);
            if (event.target.nodeName.toLowerCase()!='a') {
              this.nextAction();
            }
        },
        'keypress': function(event){
            top.alert('test');
        }
    },
    methods: {
        nextAction: function(){
            var remainingItems = xtag.query(this, 'x-slide-item:not(.item-shown)');
            var shown = xtag.query(this, 'x-slide-item.item-shown');
            if (remainingItems.length) {

                if (shown.length) {
                    shown[shown.length - 1].finish();
                }

                remainingItems[0].show();

            } else {
                //okay, went through this slide.
                //now we're adding this slide to the end
                shown.forEach((slideItem)=>{
                    slideItem.reset();
                });
                this.classList.remove('slide-intro');
                this.parentNode.appendChild(this);
                this.parentNode.children[0].nextAction();
            }
        }
    }
});
