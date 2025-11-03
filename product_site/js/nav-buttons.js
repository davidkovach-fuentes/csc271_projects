
// David Kovach-Fuentes
// 11/02/25
// pulsing animation for inactive nav-links

// AI Usage

// assisted with setInterval and pulse animation in CSS file


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


for (let i = 0; i < navItems.length; i++) {
    const id = navItems[i]; // select link
    const element = document.getElementById(id); // select DOM
    if (element && !element.classList.contains('active')) {
        element.classList.add('pulsating'); // pulse animation
        element.addEventListener('mouseenter', () => {
            isHovering = true;
            curr = element;
        }); // if hovering, change boolean and update element
        element.addEventListener('mouseleave', () => {
            isHovering = false;
            curr = null;
        }); // reset
    }
}

// color cycling
setInterval(changeColors, 1000);


