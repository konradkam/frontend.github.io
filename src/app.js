require('./styles.scss');

import SmoothScroll from "./vendor/smooth-scroll/smooth-scroll.js";
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
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

    AOS.init({
        once: 'true',
        disable: 'phone',
    });

    setTimeout(function () {
        myLoop();
    }, 1300);

    // Scroll to anchor
    let scroll = new SmoothScroll('a[href*="#"]', {
        topOnEmptyHash: true,
        updateURL: false,
        speed: 300
    });

});
