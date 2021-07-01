

	var path = new Path();
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	path.moveTo(start);
	path.lineTo(start + [ 100, -50 ]);

    var keydata = {
        a: {
            color: "blue",
            sound: new Howl({
                  src: ['music/bubbles.mp3']
            })
        },
        s: {
            color: "pink",
            sound: new Howl({
                  src: ['music/clay.mp3']
            })
        },
        d: {
            color: "red",
            sound: new Howl({src: ['music/confetti.mp3']})
        },	
        f: {
            color: "green",
            sound: new Howl({
                  src: ['music/corona.mp3']
            })	
        },
        g: {
            color: "#ff00ff",
            sound: new Howl({
                  src: ['music/dotted-spiral.mp3']
            })
        },
        h: {
            color: "#00ffff",
            sound: new Howl({
                  src: ['music/flash-1.mp3']
            })
        },
        j: {
            color: "#ffff00",
            sound: new Howl({
                  src: ['music/flash-2.mp3']
            })
        },
        k: {
            color: "#ffcc00",
            sound: new Howl({
                  src: ['music/flash-3.mp3']
            })
        },
        l: {
            color: "#ccffff",
            sound: new Howl({
                  src: ['music/glimmer.mp3']
            })
        },
        q: {
            color: "#00ddff",
            sound: new Howl({
                  src: ['music/moon.mp3']
            })
        },
        w: {
            color: "#ff66ff",
            sound: new Howl({
                  src: ['music/pinwheel.mp3']
            })
        },
        e: {
            color: "#ffccff",
            sound: new Howl({
                  src: ['music/piston-1.mp3']
            })
        },
        r: {
            color: "#0066ff",
            sound: new Howl({
                  src: ['music/piston-2.mp3']
            })
        },
        t: {
            color: "#00cccc",
            sound: new Howl({
                  src: ['music/piston-3.mp3']
            })
        },
        y: {
            color: "#ffff99",
            sound: new Howl({
                  src: ['music/prism-1.mp3']
            })
        },
        u: {
            color: "#00cc00",
            sound: new Howl({
                  src: ['music/prism-2.mp3']
            })
        },
        i: {
            color: "#9933ff",
            sound: new Howl({
                  src: ['music/prism-3.mp3']
            })
        },
        o: {
            color: "#ff3300",
            sound: new Howl({
                  src: ['music/splits.mp3']
            })
        },
        p: {
            color: "#66ffcc",
            sound: new Howl({
                  src: ['music/squiggle.mp3']
            })
        },
        z: {
            color: "#000ccc",
            sound: new Howl({
                  src: ['music/strike.mp3']
            })
        },
        x: {
            color: "#ff0099",
            sound: new Howl({
                  src: ['music/suspension.mp3']
            })
        },
        c: {
            color: "#006600",
            sound: new Howl({
                  src: ['music/timer.mp3']
            })
        },
        v: {
            color: "#ffff66",
            sound: new Howl({
                  src: ['music/ufo.mp3']
            })
        },
        b: {
            color: "#9900cc",
            sound: new Howl({
                  src: ['music/veil.mp3']
            })
        },
        n: {
            color: "#ff0099",
            sound: new Howl({
                  src: ['music/wipe.mp3']
            })
        },
        m: {
            color: "#ffff22",
            sound: new Howl({
                  src: ['music/zig-zag.mp3']
            })
        }											
    
    }
    var sound = new Howl({
      src: ['music/clay.mp3']
    });
    
    
        var circle = [];
         
        function onKeyDown(event) {
            var maxpoint = new Point(view.size.width, view.size.height);
            var randompoint = Point.random();
            var point = maxpoint * randompoint;
            var newcircle = new Path.Circle(point,500);
            newcircle.fillColor = keydata[event.key].color;
            keydata[event.key].sound.play();
            circle.push(newcircle);
        }
    
    
    function onFrame(event) {
        for (var i = 0; i < circle.length; i++) {
            circle[i].fillColor.hue += 1;
            circle[i].scale(.9);
             if(circle[i].area < 1){
                circle[i].remove(); // remove the circle from the canvas
                circle.splice(i, 1); // remove the circle from the array
                  console.log(circle);
            }
    
        }
       }
    
                            