function setBackground() {
    console.log("Set background function called.");
    const bgChooser = document.querySelector('.bg-chooser');
    if (!bgChooser) {
        console.error("Background chooser element not found");
        return;
    }
    console.log("Background chooser element found:", bgChooser);
    if (bgChooser.style.display === 'flex') {
        bgChooser.style.display = 'none';
    } else {
        bgChooser.style.display = 'flex';
        bgChooser.style.zIndex = '9999';
        bgChooser.style.top = '50px';
        bgChooser.style.left = '50px';
        bgChooser.style.opacity = '1';
        bgChooser.style.visibility = 'visible';
        console.log("Background chooser set to display:flex and debug styles applied");
    }
}


function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
}

window.addEventListener('load', () => {
    const toolchest = document.querySelector('.toolchest');
    const menu = document.querySelector('.menu');

    toolchest.addEventListener('click', () => {
        console.log("Toolchest clicked");
        if (!menu) {
            console.error("Menu element not found");
            return;
        }
        console.log("Menu element found:", menu);
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            const toolchestRect = toolchest.getBoundingClientRect();
            menu.style.display = 'block';
            menu.style.left = '0px';
            menu.style.top = `${toolchestRect.bottom}px`;
            menu.style.zIndex = '9999'; // Ensure it's on top
            menu.style.opacity = '1'; // Ensure it's fully opaque
            menu.style.visibility = 'visible'; // Ensure it's visible

            console.log(`Menu set to display:block and positioned at top: ${menu.style.top}`);
        }
    });

    // Other event listeners...
});


    document.querySelector('.set-background').addEventListener('click', () => {
        console.log("Set background clicked");
        setBackground();
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

    document.querySelectorAll('.context-menu-item').forEach(item => {
        item.addEventListener('click', e => {
            const action = item.getAttribute('data-action');
            if (action) {
                switch (action) {
                    case 'openXeyes':
                        openXeyes();
                        break;
                    case 'openXclock':
                        openXclock();
                        break;
                    case 'createFolder':
                        createFolder();
                        break;
                    case 'openNotepad':
                        openNotepad();
                        break;
                    case 'setBackground':
                        setBackground();
                        break;
                    default:
                        console.log('Unknown action:', action);
                }
                contextMenu.style.display = 'none';
            }
        });
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
            setBackgroundImage(selectedImage.u);
            bgChooser.style.display = 'none';
        }
    });

    cancelBtn.addEventListener('click', () => {
        bgChooser.style.display = 'none';
    });

    window.addEventListener('resize', () => {
        const backgroundImage = document.body.style.backgroundImage;
        if (backgroundImage) {
            const imageUrl = backgroundImage.slice(5, -2);
            setBackgroundImage(imageUrl);
        }
    });
});
