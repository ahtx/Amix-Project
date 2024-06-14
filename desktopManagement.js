document.addEventListener('DOMContentLoaded', () => {
    const bgChooser = document.querySelector('.bg-chooser');
    const bgList = document.querySelector('.bg-chooser .list');
    const bgPreview = document.querySelector('.bg-chooser .preview');
    const applyBtn = document.querySelector('.bg-chooser .apply');
    const cancelBtn = document.querySelector('.bg-chooser .cancel');

    function setBackground() {
        console.log("Set background function called.");
        bgChooser.style.display = 'flex';
    }

    function setBackgroundImage(imageUrl) {
        console.log("Setting background image: ", imageUrl);
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
    }

    applyBtn.addEventListener('click', () => {
        console.log("Apply button clicked.");
        const selectedImage = bgImages.find(image => bgPreview.style.backgroundImage.includes(image.u));
        if (selectedImage) {
            setBackgroundImage(selectedImage.u);
            bgChooser.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        const backgroundImage = document.body.style.backgroundImage;
        if (backgroundImage) {
            const imageUrl = backgroundImage.slice(5, -2);
            setBackgroundImage(imageUrl);
        }
    });

    const toolchest = document.querySelector('.toolchest');
    const menu = document.querySelector('.menu');
    toolchest.addEventListener('click', () => {
        console.log("Toolchest clicked.");
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
        if (!contextMenu.contains(e.target)) {
            contextMenu.style.display = 'none';
        }
    });

    document.querySelector('.context-menu-item[data-action="arrangeIcons"]').addEventListener('click', () => {
        console.log("Arrange icons clicked.");
        const desktop = document.querySelector('.desktop');
        const icons = Array.from(document.querySelectorAll('.desktop-icon'));
        const iW = 70, iH = 70, dW = desktop.offsetWidth, dH = desktop.offsetHeight, cols = Math.floor(dW / iW);
        icons.forEach((icon, i) => {
            const row = Math.floor(i / cols), col = i % cols;
            icon.style.left = (col * iW + 10) + 'px';
            icon.style.top = (row * iH + 10) + 'px';
        });
    });

    function createFolder() {
        console.log("Creating new folder.");
        const folder = document.createElement('div');
        folder.className = 'desktop-icon';
        folder.innerHTML = `<img src='${ICONS.folder}' alt='Folder'><span>New Folder</span>`;
        folder.style.left = '50px';
        folder.style.top = '50px';
        document.querySelector('.desktop').appendChild(folder);
        makeElementDraggable(folder);
    }

    document.querySelector('.context-menu-item[data-action="createFolder"]').addEventListener('click', createFolder);

    // Populate background image list in the background chooser
    bgImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = image.n;
        item.addEventListener('click', () => {
            bgPreview.style.backgroundImage = `url('${image.u}')`;
        });
        bgList.appendChild(item);
    });

    cancelBtn.addEventListener('click', () => {
        console.log("Cancel button clicked.");
        bgChooser.style.display = 'none';
    });

    document.querySelector('.set-background').addEventListener('click', () => {
        console.log("Set background clicked.");
        setBackground();
    });
});
