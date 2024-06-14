document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.desktop-icon img[alt="Text Editor"]').parentElement.addEventListener('dblclick', openNotepad);

    document.querySelector('.context-menu-item[data-action="openXeyes"]').addEventListener('click', openXeyes);
    document.querySelector('.context-menu-item[data-action="openXclock"]').addEventListener('click', openXclock);

    document.querySelector('.menu-item[data-action="openAmixSystem"]').addEventListener('click', openAmixSystem);

    function openAmixSystem() {
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
});
