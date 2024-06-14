function openXclock() {
    const xclock = createWindow({ title: 'Xclock', content: '<div id="xclockDisplay" class="xclock"></div>' });
    const display = xclock.querySelector('#xclockDisplay');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        display.innerText = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    function resizeDisplay() {
        display.style.fontSize = `${xclock.clientWidth * 0.15}px`;
        display.style.lineHeight = `${xclock.clientHeight}px`;
        display.style.display = 'flex';
        display.style.height = '100%';
        display.style.width = '100%';
    }

    // Attach resize event listener to the window
    xclock.addEventListener('resize', resizeDisplay);

    // Call resizeDisplay initially to set the initial size
    resizeDisplay();
}


