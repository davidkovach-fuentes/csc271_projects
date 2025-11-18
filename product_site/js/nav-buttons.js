
// David Kovach-Fuentes
// 11/17/25
// event listeners for navigation links

// AI Usage

// assisted with setInterval and pulse animation in CSS file
// assisted with form structure in HTML file, and CSS border-collapse


const navItems = ['home', 'about', 'projects'];
const colors = ['#ff9999', '#99ff99', '#9999ff'];
let colorIndex = 0;
let isHovering = false; // default
let curr = null; // hovered element

function changeColors() {
    // check if hovering and element
    if (isHovering && curr) {
        // check if active link
        if (curr.classList.contains('active')) {
            for (let i = 0; i < navItems.length; i++) { // cycle through links
                const element = document.getElementById(navItems[i]);
                if (element) element.style.backgroundColor = '#fffbe6'; // highlight active link 
            }
        } else { // change non-hovered element
            curr.style.backgroundColor = '#99ccff';
        }
        return;
    }
    for (let i = 0; i < navItems.length; i++) { // non-active link
        const element = document.getElementById(navItems[i]);
        if (element && !element.classList.contains('active')) { // check for non-active links
            element.style.backgroundColor = colors[colorIndex]; // select one color
        }
    }
    colorIndex = (colorIndex + 1) % 3; // iterate through array and resest if out-of-bounds
}

setInterval(changeColors, 1000); // start color animation

// loop through all navigation items
for (let i = 0; i < navItems.length; i++) {
    const id = navItems[i]; // select link
    const element = document.getElementById(id); // select DOM
    if (element && !element.classList.contains('active')) { // check for inactive links
        element.classList.add('pulsating'); // add pulse
        element.addEventListener('mouseenter', () => {
            isHovering = true;
            curr = element;
        }); // if hovering, change boolean and update element
        element.addEventListener('mouseleave', () => {
            isHovering = false;
            curr = null;
        }); // reset
    } else if (element && element.classList.contains('active')) { // check for active link
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = '#fffbe6'; // highlight active link
            clearInterval(changeColors);
            for (let j = 0; j < navItems.length; j++) {
                const id = navItems[j];
                const _element = document.getElementById(id);
                if (_element && _element !== element) clearInterval(changeColors);
            } // iterate through links and stop animation
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = '';
            for (let j = 0; j < navItems.length; j++) {
                const id = navItems[j];
                const _element = document.getElementById(id);
                if (_element && _element !== element) setInterval(changeColors, 1000);
            } // iterate through links and start animation
        });
    }
}

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

        console.log('success');
        alert('form submitted successfully'); // successful submission
    });
}


