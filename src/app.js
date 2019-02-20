require('./styles.scss');

import SmoothScroll from "./vendor/smooth-scroll/smooth-scroll.js";
import Two from "../node_modules/two.js/build/two.js";
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
    // Logo Animation
    const letters = document.getElementsByClassName('letter');
    const caret = document.getElementById('caret');

    const caretPositions = [-167, -156, -145, -133, -118, -95, -82, -70, -56, -45, -33, -22, -11, 0];
    let i = 0;

    function typingAnimation() {
        setTimeout(function() {
            letters[i].style.opacity = 1;
            caret.setAttribute('transform','translate(' + caretPositions[i] + ', 0)');
            i++;
            if (i < letters.length) {
                typingAnimation();
            }
        }, (Math.random() * 250))
    }

    setTimeout(function () {
        typingAnimation();
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
