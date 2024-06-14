// notepad.js - Functions for managing the Notepad application

function openNotepad() {
    const content = `
        <div class="notepad-buttons">
            <input type="text" placeholder="Filename" value="NewDocument.txt" class="filename-input" style="width: 95%;">
            <button class="save-button" style="width: 47%;">Save</button>
            <button class="cancel-button" style="width: 47%;">Cancel</button>
        </div>
        <textarea style="width: 95%; height: 80%;"></textarea>
    `;
    const notepad = createWindow({ title: 'Notepad', content });

    const textarea = notepad.querySelector('textarea');
    const initialWidth = notepad.offsetWidth;
    const initialHeight = notepad.offsetHeight;

    // Function to resize the textarea to fit the notepad window
    function resizeTextarea() {
        const width = notepad.offsetWidth - 20; // Subtract padding/margins
        const height = notepad.offsetHeight - 80; // Subtract header, footer, and padding/margins
        textarea.style.width = `${width}px`;
        textarea.style.height = `${height}px`;
    }

    // Resize textarea initially after a short delay
    setTimeout(() => {
        textarea.style.width = `${initialWidth - 20}px`;
        textarea.style.height = `${initialHeight - 80}px`;
    }, 100);

    // Resize textarea when the notepad window is resized
    notepad.addEventListener('resize', resizeTextarea);

    notepad.querySelector('.save-button').addEventListener('click', () => {
        const textContent = textarea.value;
        const fileNameInput = notepad.querySelector('.filename-input');
        const fileName = fileNameInput.value || 'NewDocument.txt';
        if (fileName) {
            const fileIcon = document.createElement('div');
            fileIcon.className = 'desktop-icon';
            fileIcon.innerHTML = `<img src='${ICONS.file}' alt='File'><span>${fileName}</span>`;
            fileIcon.dataset.content = textContent;
            fileIcon.addEventListener('dblclick', () => openFile(fileIcon));
            document.querySelector('.desktop').appendChild(fileIcon);
            makeElementDraggable(fileIcon);
            notepad.style.display = 'none';
        }
    });

    notepad.querySelector('.cancel-button').addEventListener('click', () => {
        notepad.style.display = 'none';
    });
}

function openFile(fileIcon) {
    const content = `
        <div class="notepad-buttons">
            <input type="text" placeholder="Filename" value="${fileIcon.querySelector('span').innerText}" class="filename-input" style="width: 95%;">
            <button class="save-button" style="width: 47%;">Save</button>
            <button class="cancel-button" style="width: 47%;">Cancel</button>
        </div>
        <textarea style="width: 95%; height: 80%;">${fileIcon.dataset.content}</textarea>
    `;
    const notepad = createWindow({ title: fileIcon.querySelector('span').innerText, content });

    const textarea = notepad.querySelector('textarea');

    // Function to resize the textarea to fit the notepad window
    function resizeTextarea() {
        const width = notepad.offsetWidth - 20; // Subtract padding/margins
        const height = notepad.offsetHeight - 80; // Subtract header, footer, and padding/margins
        textarea.style.width = `${width}px`;
        textarea.style.height = `${height}px`;
    }

    // Resize textarea initially after a short delay
    setTimeout(() => {
        textarea.style.width = `${notepad.offsetWidth - 20}px`;
        textarea.style.height = `${notepad.offsetHeight - 80}px`;
    }, 100);

    // Resize textarea when the notepad window is resized
    notepad.addEventListener('resize', resizeTextarea);

    notepad.querySelector('.save-button').addEventListener('click', () => {
        const textContent = textarea.value;
        const fileNameInput = notepad.querySelector('.filename-input');
        const fileName = fileNameInput.value || 'NewDocument.txt';
        if (fileName) {
            fileIcon.querySelector('span').innerText = fileName;
            fileIcon.dataset.content = textContent;
            notepad.style.display = 'none';
        }
    });

    notepad.querySelector('.cancel-button').addEventListener('click', () => {
        notepad.style.display = 'none';
    });
}
