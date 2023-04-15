$(document).ready(function(){

    window.onresize = function(event)
    {
        document.location.reload(true);
    }
    
    var width = window.innerWidth;

    var controller = new ScrollMagic.Controller();
    
    //Spots Parallax

    var move = TweenMax.to(".anim", 1, {top: window.outerHeight, ease:Power4.easeNone});

    new ScrollMagic.Scene({
        triggerElement: ".container", 
        duration: "2000%",
        offset: 350
    })
    .setTween(move)
    .setPin(".anim", {pushFollowers: true})
    .addTo(controller);

    var move2 = TweenMax.to(".anim2", 1, {top: window.outerHeight, ease:Power4.easeNone});

    new ScrollMagic.Scene({
        triggerElement: ".anim2", 
        duration: "1000%",
        offset: -400
    })
    .setTween(move2)
    .addTo(controller);

    var move3 = TweenMax.to(".anim3", 1, {top: -window.outerHeight, ease:Power4.easeNone });

    new ScrollMagic.Scene({
        triggerElement: ".container", 
        duration: "1000%",
        offset: -200
    })
    .setTween(move3)
    .addTo(controller);
    
    var move4 = TweenMax.to(".anim4", 1, {top: -window.outerHeight, ease:Power4.easeNone });

    new ScrollMagic.Scene({
        triggerElement: ".anim4", 
        duration: "1500%",
        offset: -500
    })
    .setTween(move4)
    .addTo(controller);

    var move5 = TweenMax.to(".anim5", 1, {top: -window.outerHeight, ease:Power4.easeNone });

    new ScrollMagic.Scene({
        triggerElement: ".anim5", 
        duration: "1800%",
        offset: -1300
    })
    .setTween(move5)
    .addTo(controller);

    var move6 = TweenMax.to(".anim6", 1, {top: window.outerHeight, ease:Power4.easeNone });

    new ScrollMagic.Scene({
        triggerElement: ".anim6", 
        duration: "800%",
        offset: -400
    })
    .setTween(move6)
    .addTo(controller);

    var move7 = TweenMax.to(".anim7", 1, {top: -window.innerHeight, ease:Power4.easeNone });

    new ScrollMagic.Scene({
        triggerElement: ".anim7", 
        duration: "2000%",
        offset: -400
    })
    .setTween(move7)
    .addTo(controller);

    if(width <= 932){

        var remove = TweenMax.to(".anim", 1, {autoAlpha: 0});
        var remove2 = TweenMax.to(".anim2", 1, {autoAlpha: 0});
        var remove3 = TweenMax.to(".anim3", 1, {autoAlpha: 0});
        var remove4 = TweenMax.to(".anim4", 1, {autoAlpha: 0});
        var remove5 = TweenMax.to(".anim5", 1, {autoAlpha: 0});
        var remove6 = TweenMax.to(".anim6", 1, {autoAlpha: 0});
        var remove7 = TweenMax.to(".anim7", 1, {autoAlpha: 0});

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove2)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove3)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove4)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove5)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove6)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".container"
        })
        .setTween(remove7)
        .addTo(controller);
       
    }

    //Protractor Rotator
    var tween = TweenMax.to(".protractor", 1, {rotation: 360, ease: Linear.easeNone});

    new ScrollMagic.Scene({
        triggerElement: ".container",
        triggerHook: 0,
        duration: '190%'
    })
    .setTween(tween)
    .setPin('.protractor', {pushFollowers: true})
    .addTo(controller); 

    if(width > 932){
        //Mouse Body
        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 2750
        })
        .setPin('.mouse', {pushFollowers: true})
        .addTo(controller); 

        //Mouse Up/Down Arrow

        var change = new TimelineMax();

        var change1 = TweenMax.to(".arrow-down", 0.99, {autoAlpha: 0});
        var change2 = TweenMax.from(".arrow-up", 0.01, {autoAlpha: 0});

        change.add(change1)
            .add(change2); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 2750
        })
        .setTween(change)
        .setPin('.arrow-down', {pushFollowers: true})
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 2750
        })
        .setPin('.arrow-up', {pushFollowers: true})
        .addTo(controller); 
    }

    if(width > 824 && width <= 932){
        //Mouse Body
        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3200
        })
        .setPin('.mouse', {pushFollowers: true})
        .addTo(controller); 

        //Mouse Up/Down Arrow

        var change = new TimelineMax();

        var change1 = TweenMax.to(".arrow-down", 0.99, {autoAlpha: 0});
        var change2 = TweenMax.from(".arrow-up", 0.01, {autoAlpha: 0});

        change.add(change1)
            .add(change2); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3200
        })
        .setTween(change)
        .setPin('.arrow-down', {pushFollowers: true})
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3200
        })
        .setPin('.arrow-up', {pushFollowers: true})
        .addTo(controller); 
    }

    if(width > 482 && width <= 824){
        //Mouse Body
        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3500
        })
        .setPin('.mouse', {pushFollowers: true})
        .addTo(controller); 

        //Mouse Up/Down Arrow

        var change = new TimelineMax();

        var change1 = TweenMax.to(".arrow-down", 0.99, {autoAlpha: 0});
        var change2 = TweenMax.from(".arrow-up", 0.01, {autoAlpha: 0});

        change.add(change1)
            .add(change2); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3500
        })
        .setTween(change)
        .setPin('.arrow-down', {pushFollowers: true})
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 3500
        })
        .setPin('.arrow-up', {pushFollowers: true})
        .addTo(controller); 
    }

    if(width <= 483){
        //Mouse Body
        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 4000
        })
        .setPin('.mouse', {pushFollowers: true})
        .addTo(controller); 

        //Mouse Up/Down Arrow

        var change = new TimelineMax();

        var change1 = TweenMax.to(".arrow-down", 0.99, {autoAlpha: 0});
        var change2 = TweenMax.from(".arrow-up", 0.01, {autoAlpha: 0});

        change.add(change1)
            .add(change2); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 4000
        })
        .setTween(change)
        .setPin('.arrow-down', {pushFollowers: true})
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".head",
            triggerHook: 0,
            duration: 4000
        })
        .setPin('.arrow-up', {pushFollowers: true})
        .addTo(controller); 
    }


    //Nav Toggle
    new ScrollMagic.Scene({
        triggerElement: ".container",
        triggerHook:0
    })
    .setClassToggle("#listNav","active")
    .addTo(controller); 

});
