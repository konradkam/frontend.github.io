require('./styles.scss');

import SmoothScroll from "./vendor/smooth-scroll/smooth-scroll.js";
import Two from "../node_modules/two.js/build/two.js";
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
    // Logo Animation
    const letters = document.getElementsByClassName('letter');
    const caret = document.getElementById('caret');

    let i = 0;

    function myLoop () {
        setTimeout(function () {
            letters[i].style.opacity = 1;
            i++;
            switch (i) {
                case 1:
                    caret.setAttribute('transform','translate(-167, 0)');
                    break;
                case 2:
                    caret.setAttribute('transform','translate(-156, 0)');
                    break;
                case 3:
                    caret.setAttribute('transform','translate(-145, 0)');
                    break;
                case 4:
                    caret.setAttribute('transform','translate(-133, 0)');
                    break;
                case 5:
                    caret.setAttribute('transform','translate(-118, 0)');
                    break;
                case 6:
                    caret.setAttribute('transform','translate(-95, 0)');
                    break;
                case 7:
                    caret.setAttribute('transform','translate(-82, 0)');
                    break;
                case 8:
                    caret.setAttribute('transform','translate(-70, 0)');
                    break;
                case 9:
                    caret.setAttribute('transform','translate(-56, 0)');
                    break;
                case 10:
                    caret.setAttribute('transform','translate(-45, 0)');
                    break;
                case 11:
                    caret.setAttribute('transform','translate(-33, 0)');
                    break;
                case 12:
                    caret.setAttribute('transform','translate(-22, 0)');
                    break;
                case 13:
                    caret.setAttribute('transform','translate(-11, 0)');
                    break;
                default:
                    caret.setAttribute('transform','translate(0, 0)');
            }
            if (i < letters.length) {
                myLoop();
            }
        }, (Math.random() * 250))
    }

    setTimeout(function () {
        myLoop();
    }, 1300);

    //Setup of Animate On Scroll Library
    AOS.init({
        once: 'true',
        disable: 'phone',
    });

    // Scroll to anchor
    let scroll = new SmoothScroll('a[href*="#"]', {
        topOnEmptyHash: true,
        updateURL: false,
        speed: 300
    });

    // Backgroud animation
    const box = document.getElementById('section-two');

    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    const toRadian = Math.PI / 180;
    function angleInRadians(a) {
        return a * toRadian;
    }
    let angle = 0;

    const points = [
        new Two.Vector(0, boxHeight),
        new Two.Vector(boxWidth, boxHeight),
        new Two.Vector(boxWidth, 0),
        new Two.Vector(boxWidth * 0.75, boxHeight/2),
        new Two.Vector(boxWidth * 0.5, boxHeight * 0.5),
        new Two.Vector(boxWidth * 0.25, 60)
    ];

    const elem = document.getElementById('two');
    const params = {
        type: Two.Types.svg,
        width: boxWidth,
        height: boxHeight };
    const two = new Two(params).appendTo(elem);

    const path =  two.makePath(points, close);

    path.fill = '#f1f1f1';
    path.noStroke();
    path.translation.set = (0, 0);

    function move(point, offset, in_min, in_max, out_min, out_max) {
        if (angle > 360) {
            angle = 0;
        }
        point.y = (Math.sin(angleInRadians(angle + offset)) - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        angle += 0.25;
    }

    two.bind('update', function(frameCount) {
        move(points[3], 0, -1, 1, boxHeight/2.5 * -1, boxHeight/7);
        move(points[5], 50, -1, 1, boxHeight/7 * -1, boxHeight/2.5);
    }).play();

    //Reloading page to update background animation on screen resize
    window.addEventListener("resize", function(event)
    {
        location.reload();
    });
});
