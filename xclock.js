// xclock.js - Functions for managing the Xclock application

let xclockInstance = null;

function openXclock() {
    if (xclockInstance) return; // Prevent multiple instances

    const content = `<div id="xclockDisplay" class="xclock"></div>`;
    xclockInstance = createWindow({ title: 'Xclock', content });

    const display = xclockInstance.querySelector('#xclockDisplay');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        display.innerText = `${hours}:${minutes}:${seconds}`;
    }

    function resizeDisplay() {
        display.style.fontSize = `${xclockInstance.offsetWidth * 0.15}px`;
        display.style.display = 'flex';
        display.style.alignItems = 'center';
        display.style.justifyContent = 'center';
        display.style.height = '100%';
    }

    setInterval(updateClock, 1000);
    updateClock();
    xclockInstance.addEventListener('resize', resizeDisplay);
    resizeDisplay();

    xclockInstance.querySelector('.close-button').addEventListener('click', () => {
        xclockInstance = null; // Reset instance on close
    });
}
