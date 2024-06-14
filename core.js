// core.js - General utility functions and helpers

// Function to create a window with specified options
function createWindow({ title, content, width = 400, height = 300, resizable = true }) {
    const windowElement = document.createElement('div');
    windowElement.className = 'window';
    windowElement.style.width = `${width}px`;
    windowElement.style.height = `${height}px`;
    windowElement.innerHTML = `
        <div class="title-bar"><span>${title}</span><span class="close-button">X</span></div>
        <div class="window-content">${content}</div>
        ${resizable ? '<div class="resize-handle"></div>' : ''}
    `;
    document.body.appendChild(windowElement);
    makeElementDraggable(windowElement);
    if (resizable) {
        makeWindowResizable(windowElement);
    }
    addCloseButtonListener(windowElement);
    return windowElement;
}

// Function to make an element draggable
function makeElementDraggable(element, handle = element) {
    let offsetX = 0, offsetY = 0;
    handle.addEventListener('mousedown', startDragging);
    function startDragging(e) {
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);
    }
    function dragElement(e) {
        element.style.left = (e.clientX - offsetX) + 'px';
        element.style.top = (e.clientY - offsetY) + 'px';
    }
    function stopDragging() {
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);
    }
}

// Function to make a window resizable
function makeWindowResizable(windowElement) {
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    windowElement.appendChild(resizeHandle);
    let isResizing = false, lastX = 0, lastY = 0;
    resizeHandle.addEventListener('mousedown', startResizing);
    function startResizing(e) {
        isResizing = true;
        lastX = e.clientX;
        lastY = e.clientY;
        document.addEventListener('mousemove', resizeWindow);
        document.addEventListener('mouseup', stopResizing);
    }
    function resizeWindow(e) {
        if (!isResizing) return;
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        windowElement.style.width = windowElement.offsetWidth + deltaX + 'px';
        windowElement.style.height = windowElement.offsetHeight + deltaY + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
        windowElement.dispatchEvent(new Event('resize'));
    }
    function stopResizing() {
        isResizing = false;
        document.removeEventListener('mousemove', resizeWindow);
        document.removeEventListener('mouseup', stopResizing);
    }
}

// Function to add a close button listener to a window
function addCloseButtonListener(windowElement) {
    const closeButton = windowElement.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        windowElement.style.display = 'none';
    });
}

// Dummy functions to prevent errors for missing functions
function openNotepad() {
    console.error('openNotepad function is not defined');
}
function openXeyes() {
    console.error('openXeyes function is not defined');
}
function openXclock() {
    console.error('openXclock function is not defined');
}

// Assign these dummy functions to prevent errors
document.querySelector('.context-menu-item[onclick="openNotepad()"]').addEventListener('click', openNotepad);
document.querySelector('.context-menu-item[onclick="openXeyes()"]').addEventListener('click', openXeyes);
document.querySelector('.context-menu-item[onclick="openXclock()"]').addEventListener('click', openXclock);

