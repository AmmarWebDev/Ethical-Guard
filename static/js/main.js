// Changing the cursor //

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a').forEach((e) => {
  e.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  e.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});



// Making the waves effect //


const wavePath = document.getElementById("wave");
const width = 1000; // SVG width
const height = 200; // SVG height
const points = 10; // Number of points in the wave
let phase = 0;

function generateWavePath(phase) {
  const pathData = [];
  const segmentWidth = width / (points - 1);

  for (let i = 0; i < points; i++) {
    const x = i * segmentWidth;
    const y = Math.sin((i + phase) * 0.5) * 30 + height / 2;
    pathData.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }

  return pathData.join(" ") + ` L ${width} ${height} L 0 ${height} Z`;
}

function animateWave() {
  phase += 0.1;
  wavePath.setAttribute("d", generateWavePath(phase));
  requestAnimationFrame(animateWave);
}

// Initialize the animation
animateWave();
