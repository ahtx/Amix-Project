// xeyes.js - Functions for managing the Xeyes application

let xeyesInstance = null;

function openXeyes() {
    if (xeyesInstance) return; // Prevent multiple instances

    const content = `<canvas id="xeyesCanvas"></canvas>`;
    xeyesInstance = createWindow({ title: 'Xeyes', content });

    const canvas = xeyesInstance.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    function drawEyes(mouseX, mouseY) {
        const eyeRadius = canvas.width * 0.15;
        const irisRadius = canvas.width * 0.075;
        const eyes = [
            { x: canvas.width / 3, y: canvas.height / 2 },
            { x: (2 * canvas.width) / 3, y: canvas.height / 2 }
        ];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        eyes.forEach(eye => {
            ctx.beginPath();
            ctx.ellipse(eye.x, eye.y, eyeRadius, eyeRadius * 1.5, 0, 0, 2 * Math.PI);
            ctx.stroke();

            const angle = Math.atan2(mouseY - eye.y, mouseX - eye.x);
            const irisX = eye.x + Math.cos(angle) * (eyeRadius - irisRadius);
            const irisY = eye.y + Math.sin(angle) * (eyeRadius - irisRadius);

            ctx.beginPath();
            ctx.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    function resizeCanvas() {
        canvas.width = xeyesInstance.offsetWidth * 0.95;
        canvas.height = xeyesInstance.offsetHeight * 0.95;
        drawEyes(canvas.width / 2, canvas.height / 2);
    }

    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        drawEyes(e.clientX - rect.left, e.clientY - rect.top);
    });

    xeyesInstance.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    xeyesInstance.querySelector('.close-button').addEventListener('click', () => {
        xeyesInstance = null; // Reset instance on close
    });
}
