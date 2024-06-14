function createWindow({ title, content }) {
    const windowDiv = document.createElement('div');
    windowDiv.className = 'window';
    windowDiv.innerHTML = `
        <div class="title-bar"><span>${title}</span><span class="size-indicator">(0,0)</span><span class="close-button">X</span></div>
        <div class="window-content">${content}</div>
        <div class="resize-handle"></div>
    `;
    document.querySelector('.desktop').appendChild(windowDiv);

    makeElementDraggable(windowDiv);
    makeWindowResizable(windowDiv);

    windowDiv.querySelector('.close-button').addEventListener('click', () => {
        windowDiv.style.display = 'none';
    });

    windowDiv.addEventListener('resize', () => {
        const sizeIndicator = windowDiv.querySelector('.size-indicator');
        sizeIndicator.textContent = `(${windowDiv.offsetWidth}, ${windowDiv.offsetHeight})`;
    });

    return windowDiv;
}

function makeElementDraggable(element) {
    let offsetX = 0, offsetY = 0;
    element.querySelector('.title-bar').addEventListener('mousedown', startDragging);

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

function makeWindowResizable(window) {
    const resizeHandle = window.querySelector('.resize-handle');
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
        window.style.width = window.offsetWidth + deltaX + 'px';
        window.style.height = window.offsetHeight + deltaY + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
        window.dispatchEvent(new Event('resize'));
    }

    function stopResizing() {
        isResizing = false;
        document.removeEventListener('mousemove', resizeWindow);
        document.removeEventListener('mouseup', stopResizing);
    }
}
