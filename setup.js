// setup.js - Initialization script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize desktop management
    initializeDesktop();

    // Initialize app management
    initializeApps();

    // Set up event handlers
    setupEventHandlers();
});

// Initialization functions for desktop management
function initializeDesktop() {
    // Implement necessary setup for desktop management
    // For example: load initial icons, set up background, etc.
    // This function can call other functions in desktopManagement.js
    const bgChooser = document.querySelector('.bg-chooser');
    const bgList = bgChooser.querySelector('.list');
    const bgPreview = bgChooser.querySelector('.preview');
    const applyBtn = bgChooser.querySelector('.apply');
    const cancelBtn = bgChooser.querySelector('.cancel');

    bgImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = image.n;
        item.addEventListener('click', () => {
            bgPreview.style.backgroundImage = `url('${image.u}')`;
        });
        bgList.appendChild(item);
    });

    applyBtn.addEventListener('click', () => {
        const selectedImage = bgImages.find(image => bgPreview.style.backgroundImage.includes(image.u));
        if (selectedImage) {
            document.body.style.backgroundImage = `url('${selectedImage.u}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center';
            bgChooser.style.display = 'none';
        }
    });

    cancelBtn.addEventListener('click', () => {
        bgChooser.style.display = 'none';
    });

    document.querySelector('.set-background').addEventListener('click', () => {
        bgChooser.style.display = 'flex';
    });

    document.querySelectorAll('.desktop-icon').forEach(icon => {
        let oX = 0, oY = 0;
        icon.addEventListener('mousedown', e => {
            oX = e.clientX - icon.getBoundingClientRect().left;
            oY = e.clientY - icon.getBoundingClientRect().top;
            document.addEventListener('mousemove', moveIcon);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveIcon);
            });
        });
        const moveIcon = e => {
            icon.style.left = (e.clientX - oX) + 'px';
            icon.style.top = (e.clientY - oY) + 'px';
        };
    });

    document.querySelectorAll('.window').forEach(win => {
        makeElementDraggable(win, win.querySelector('.title-bar'));
        makeWindowResizable(win);
    });

    const toolchest = document.querySelector('.toolchest');
    const menu = document.querySelector('.menu');
    toolchest.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        menu.style.left = '0px';
        menu.style.top = (toolchest.getBoundingClientRect().top - menu.offsetHeight) + 'px';
    });

    const contextMenu = document.querySelector('.context-menu');
    document.querySelector('.desktop').addEventListener('contextmenu', e => {
        e.preventDefault();
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
    });
    document.addEventListener('click', e => {
        if (!contextMenu.contains(e.target) && e.target !== document.querySelector('.desktop')) {
            contextMenu.style.display = 'none';
        }
    });

    document.querySelector('.arrange-icons').addEventListener('click', () => {
        const desktop = document.querySelector('.desktop');
        const icons = Array.from(document.querySelectorAll('.desktop-icon'));
        const iW = 70, iH = 70, dW = desktop.offsetWidth, dH = desktop.offsetHeight, cols = Math.floor(dW / iW);
        icons.forEach((icon, i) => {
            const row = Math.floor(i / cols), col = i % cols;
            icon.style.left = (col * iW + 10) + 'px';
            icon.style.top = (row * iH + 10) + 'px';
        });
    });
}

// Initialization functions for app management
function initializeApps() {
    // Implement necessary setup for app management
    // For example: initialize app icons, set up initial app windows, etc.
    // This function can call other functions in appManagement.js

    document.querySelector('.desktop-icon img[alt="Text Editor"]').parentElement.addEventListener('dblclick', openNotepad);
}

// Setup global event handlers
function setupEventHandlers() {
    // Implement global event handlers
    // This function can call other functions in eventHandlers.js
    // Currently handled within the initializeDesktop function for simplicity
}