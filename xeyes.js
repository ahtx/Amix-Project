function openXeyes() {
    const xeyes = createWindow({ title: 'Xeyes', content: '<canvas id="xeyesCanvas"></canvas>' });
    const canvas = xeyes.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    function drawEyes(mouseX, mouseY) {
        const eyeRadiusX = canvas.width * 0.15;
        const eyeRadiusY = canvas.height * 0.3;
        const irisRadiusX = canvas.width * 0.075;
        const irisRadiusY = canvas.height * 0.15;
        const eyes = [
            { x: canvas.width / 3, y: canvas.height / 2 },
            { x: (2 * canvas.width) / 3, y: canvas.height / 2 }
        ];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        eyes.forEach(eye => {
            ctx.beginPath();
            ctx.ellipse(eye.x, eye.y, eyeRadiusX, eyeRadiusY, 0, 0, 2 * Math.PI);
            ctx.stroke();

            const angle = Math.atan2(mouseY - eye.y, mouseX - eye.x);
            const irisX = eye.x + Math.cos(angle) * (eyeRadiusX - irisRadiusX);
            const irisY = eye.y + Math.sin(angle) * (eyeRadiusY - irisRadiusY);

            ctx.beginPath();
            ctx.ellipse(irisX, irisY, irisRadiusX, irisRadiusY, 0, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    function resizeCanvas() {
        canvas.width = xeyes.clientWidth;
        canvas.height = xeyes.clientHeight;
        drawEyes(canvas.width / 2, canvas.height / 2);  // Draw eyes in the center of the canvas initially
    }

    // Attach global mousemove event listener
    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        drawEyes(mouseX, mouseY);
    });

    // Attach resize event listener to the window
    xeyes.addEventListener('resize', resizeCanvas);

    // Call resizeCanvas initially to set the initial size
    resizeCanvas();
}
