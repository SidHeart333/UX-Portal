$(document).ready(function(){

    window.onresize = function(event)
    {
        document.location.reload(true);
    }
    
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".subNav",
        triggerHook: 0
    })
    .setClassToggle(".subNav","sticky")
    .setPin('.subNav', {pushFollowers: true})
    .addTo(controller); 

    new ScrollMagic.Scene({
        triggerElement: ".principles",
        triggerHook: 0,
        duration: 1950
    })
    .setClassToggle(".nav1","active")
    .addTo(controller); 

    new ScrollMagic.Scene({
        triggerElement: ".process",
        triggerHook: 0,
        offset: -50
    })
    .setClassToggle(".nav2","active")
    .addTo(controller); 

    var bounce1 = TweenMax.to(".bounce1", 1, {opacity : 1, scale: 1, ease: Back.easeOut.config(1.7)});

    new ScrollMagic.Scene({
        triggerElement: ".principles",
        triggerHook: 0,
        reverse: false
    })
    .setTween(bounce1)
    .addTo(controller); 

    var bounce2 = TweenMax.to(".bounce2", 1, {opacity : 1, scale: 1, ease: Back.easeOut.config(1.7)});

    new ScrollMagic.Scene({
        triggerElement: ".bounce1",
        triggerHook: 0.3,
        offset: -150,
        reverse: false
    })
    .setTween(bounce2)
    .addTo(controller); 

    var bounce3 = TweenMax.to(".bounce3", 1, {opacity : 1, scale: 1, ease: Back.easeOut.config(1.7)});

    new ScrollMagic.Scene({
        triggerElement: ".bounce2",
        triggerHook: 0.3,
        offset: -150,
        reverse: false
    })
    .setTween(bounce3)
    .addTo(controller); 

    var bounce4 = TweenMax.to(".bounce4", 1, {opacity : 1, scale: 1, ease: Back.easeOut.config(1.7)});

    new ScrollMagic.Scene({
        triggerElement: ".bounce3",
        triggerHook: 0.3,
        offset: -150,
        reverse: false
    })
    .setTween(bounce4)
    .addTo(controller); 


    var width = window.innerWidth;

    if (width > 740){

        new ScrollMagic.Scene({
            triggerElement: ".vline1",
            triggerHook: 0,
            offset: -500,
            reverse: false
        })
        .setClassToggle(".vline1","leftSwipe1")
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".vline2",
            triggerHook: 0,
            offset: -600,
            reverse: false
        })
        .setClassToggle(".vline2","rightSwipe1")
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".vline3",
            triggerHook: 0,
            offset: -600,
            reverse: false
        })
        .setClassToggle(".vline3","leftSwipe2")
        .addTo(controller); 

        new ScrollMagic.Scene({
            triggerElement: ".vline4",
            triggerHook: 0,
            offset: -600,
            reverse: false
        })
        .setClassToggle(".vline4","rightSwipe2")
        .addTo(controller); 
    }

});

$(function () { 

    var roadPath = {
        entry : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: 0,	y: 0},
                    {x: $(window).width()*0.46, y: 0}
                ]
        },
        looping : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: $(window).width()*0.52, y: $(window).width()*0.02},
                    {x: $(window).width()*0.575, y: $(window).width()*0.115},
                    {x: $(window).width()*0.52,	y: $(window).width()*0.212},
                    {x: $(window).width()*0.465, y: $(window).width()*0.228}
                ]
        },
        looping2 : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: $(window).width()*0.40,	y: $(window).width()*0.25},
                    {x: $(window).width()*0.35,	y: $(window).width()*0.35},
                    {x: $(window).width()*0.405, y: $(window).width()*0.445},
                    {x: $(window).width()*0.47, y: $(window).width()*0.465}
                ]
        },
        looping3 : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: $(window).width()*0.525, y: $(window).width()*0.485},
                    {x: $(window).width()*0.575, y: $(window).width()*0.575},
                    {x: $(window).width()*0.525, y: $(window).width()*0.672},
                    {x: $(window).width()*0.465, y: $(window).width()*0.695}
                ]
        },
        looping4 : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: $(window).width()*0.395, y: $(window).width()*0.72},
                    {x: $(window).width()*0.35, y: $(window).width()*0.82},
                    {x: $(window).width()*0.42, y: $(window).width()*0.915},
                    {x: $(window).width()*0.46, y: $(window).width()*0.926}
                ]
        },
        leave : {
            curviness: 1.5,
            autoRotate: true,
            values: [
                    {x: $(window).width()*0.52,	y: $(window).width()*0.926},
                    {x: $(window).width()*0.92,	y: $(window).width()*0.926}
                ]
         }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
        .add(TweenMax.to($(".car"), 1, {css:{bezier:roadPath.entry}, ease:Power1.easeInOut}))
        .add(TweenMax.to($(".car"), 2, {css:{bezier:roadPath.looping}, ease:Power1.easeInOut}))
        .add(TweenMax.to($(".car"), 3, {css:{bezier:roadPath.looping2}, ease:Power1.easeInOut}))
        .add(TweenMax.to($(".car"), 3, {css:{bezier:roadPath.looping3}, ease:Power1.easeInOut}))
        .add(TweenMax.to($(".car"), 2, {css:{bezier:roadPath.looping4}, ease:Power1.easeInOut}))
        .add(TweenMax.to($(".car"), 1, {css:{bezier:roadPath.leave}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".process", duration: $(window).width()*0.974, triggerHook: 0})
        .setTween(tween)
        .addTo(controller);
})

