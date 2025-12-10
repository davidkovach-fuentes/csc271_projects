
// David Kovach-Fuentes
// 11/23/25
// Assignment 12

// created a NavLik constructor
// implemented pulsate and color change functionality
// implement mouse focus and blur events

// AI Usage
// suggested !this.element conditional for non-existent element
// sugested link.element conditional
// suggested arrow-function syntax
// suggested separate functions for start, update, and stop colors


const colors = ['#ff9999', '#99ff99', '#9999ff'];
let colorIndex = 0;
let colorInterval;

// NavLink constructor function
function NavLink(title, url, active = false) {
    this.title = title;
    this.url = url;
    this.active = active; // assume link is not active
    this.element = document.getElementById(title); // DOM selector

    this.setupEventListeners = function () {
        if (!this.element) return; // element not found
        this.element.addEventListener('mouseenter', () => this.mouseFocus());
        this.element.addEventListener('mouseleave', () => this.mouseBlur());
    }; // initialize event listeners

    if (this.element) {
        if (!this.active) {
            this.element.classList.add('pulsating'); // pulse non-active links
        }
        this.setupEventListeners(); // initialize event listeners
    }

    // mouse focus
    this.mouseFocus = function () {
        if (this.active) { // highlight active link
            this.highlightActiveLink();
            this.changeColor('stop');
        } else { // change color on non-active links
            this.element.style.backgroundColor = '#99ccff';
        }
    };

    // mouse blur
    this.mouseBlur = function () {
        if (this.active) { // reset active link
            this.resetActiveLink();
            this.changeColor('start');
        } else { // reset non-active links
            this.element.style.backgroundColor = '';
            this.changeColor('start');
        }
    };

    // highlight active link
    this.highlightActiveLink = function () {
        if (this.element) {
            this.element.style.backgroundColor = '#fffbe6';
        } // change active link color if element exists
    };

    // reset active link
    this.resetActiveLink = function () {
        if (this.element) {
            this.element.style.backgroundColor = '';
        } // reset active link color if element exists
    };

    // start color animation
    this.startColorAnimation = function () {
        if (colorInterval) clearInterval(colorInterval);
        colorInterval = setInterval(updateLinkColors, 1000);
    };

    // update colors for all links
    function updateLinkColors() {
        for (var i = 0; i < navLinks.length; i++) {
            var link = navLinks[i];
            if (!link.active && link.element) {
                link.element.style.backgroundColor = colors[colorIndex];
            } // change color on non-active links
        }
        colorIndex = (colorIndex + 1) % colors.length; // update color index
    }

    // change colors
    this.changeColor = function (shouldAnimate) {
        if (!this.element || this.active) return; // ignore active links
        if (shouldAnimate) {
            this.startColorAnimation(); // start animation
        } else {
            clearInterval(colorInterval); // stop animation
        }
    }

    // pulsate links
    this.pulsate = function (shouldPulsate = true) {
        if (!this.element || this.active) return; // ignore active links

        if (shouldPulsate) {
            this.element.classList.add('pulsating');
        } else {
            this.element.classList.remove('pulsating');
        } // pulse non-active links
    };
};

const navLinks = [
    new NavLink('home', 'index.html', document.getElementById('home')?.classList.contains('active')),
    new NavLink('about', 'about.html', document.getElementById('about')?.classList.contains('active')),
    new NavLink('projects', 'projects.html', document.getElementById('projects')?.classList.contains('active'))
];

// start color animation for all non-active links
for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    if (!link.active && link.element) {
        link.changeColor(true);
    }
}

const title = document.getElementsByTagName("h1")[0];
const form = document.querySelector('form'); // get form
if (form) {
    form.addEventListener('submit', function () {
        const name = form.querySelector('input[name="name_field"]').value;
        const email = form.querySelector('input[name="email_field"]').value;
        const message = form.querySelector('textarea[name="message_field"]').value;
        // extract parameters

        if (!name || !email || !message) {
            alert('incomplete form');
            console.log('error');
            return false;
        } // missing form marks as error, failed submission

        title.log('success');
        alert('form submitted successfully'); // successful submission
    });
}


