// appManagement.js - Initializes and ties together individual app scripts

document.querySelector('.desktop-icon img[alt="Text Editor"]').parentElement.addEventListener('dblclick', openNotepad);

document.querySelector('.context-menu-item[onclick="openXeyes()"]').addEventListener('click', openXeyes);
document.querySelector('.context-menu-item[onclick="openXclock()"]').addEventListener('click', openXclock);

// Event listener for the "System" menu item
document.querySelector('.menu-item[onclick="openAmixSystem()"]').addEventListener('click', openAmixSystem);

function openAmixSystem() {
    // Assuming the Amix Applications window should open here
    const content = `
        <div class="app-icon">
            <img src="https://i.postimg.cc/9rs20hBc/image-44.png" alt="File Manager">
            <span>File Manager</span>
        </div>
        <div class="app-icon">
            <img src="https://i.postimg.cc/QFBMYmfd/image-81.png" alt="Terminal">
            <span>Terminal</span>
        </div>
        <div class="app-icon">
            <img src="https://i.postimg.cc/wtHSRTRY/image-55.png" alt="Text Editor">
            <span>Text Editor</span>
        </div>
        <div class="app-icon">
            <img src="https://i.postimg.cc/PNxnMx3t/image-50.png" alt="Web Browser">
            <span>Web Browser</span>
        </div>
        <div class="app-icon">
            <img src="https://i.postimg.cc/N0QbC79g/image-67.png" alt="Mail">
            <span>Mail</span>
        </div>
    `;
    createWindow({ title: 'Amix System', content });
}
