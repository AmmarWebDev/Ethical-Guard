//! Function //

String.prototype.capitalize = function () {
  return this.split(' ')
  .map((e) => e.replace(/^./, e[0].toUpperCase())).join(' ');
}

Array.max = (e) => Math.max(...e);


//! Adjusting the head //

// editing the document title
document.title = `Internet Guardians | ${document.title.capitalize()}`;


//! Creating the header //

const header = document.createElement('header');
document.body.prepend(header);

header.innerHTML= `
  <header>
    <div class="container">
      <div class="logo">
        <a href="../index.htm">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="200.000000pt"
            height="200.000000pt"
            viewBox="0 0 200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#fff" stroke="none">
            <path d="M1140 1753 c-84 -8 -221 -46 -290 -81 -64 -32 -75 -41 -78 -65 -3
            -26 -5 -27 -17 -11 -12 17 -15 17 -49 -6 -41 -28 -41 -30 -21 -70 18 -36 10
            -38 -22 -8 l-23 22 -51 -50 c-51 -50 -139 -174 -178 -252 l-22 -43 23 -20 23
            -20 -27 4 c-29 4 -44 -13 -25 -32 8 -8 7 -11 -5 -11 -11 0 -19 -17 -26 -57
            -17 -88 -25 -200 -17 -220 4 -10 9 -43 10 -73 4 -63 25 -141 40 -143 6 -1 11
            17 13 41 2 29 9 46 23 55 16 10 19 23 19 93 0 171 59 313 180 434 124 125 262
            183 435 183 109 0 196 -21 289 -68 38 -20 69 -35 70 -33 2 2 9 21 17 43 13 35
            32 52 153 134 l139 94 -24 20 c-13 10 -49 32 -81 48 -51 26 -57 27 -69 12 -12
            -14 -14 -13 -19 8 -5 21 -18 27 -90 46 -47 12 -104 22 -127 22 -47 1 -42 8
            -61 -94 l-10 -50 -1 40 c-2 55 -11 85 -26 85 -7 0 -15 7 -19 15 -3 8 -9 14
            -13 13 -4 0 -24 -3 -43 -5z"/>
            <path d="M968 1340 c-159 -25 -317 -139 -395 -287 -31 -56 -63 -163 -63 -209
            0 -14 47 -58 165 -152 91 -73 166 -132 168 -132 2 0 -4 24 -14 53 -44 132 -30
            295 34 380 86 113 251 129 363 34 31 -26 35 -27 173 -27 165 0 163 -1 105 96
            -46 76 -85 117 -158 165 -104 68 -251 99 -378 79z"/>
            <path d="M1071 796 c2 -2 59 -49 127 -105 l122 -101 0 -78 0 -78 67 -55 c37
            -30 89 -71 115 -92 l48 -39 0 276 0 276 -242 0 c-133 0 -239 -2 -237 -4z"/>
            <path d="M514 724 c4 -33 13 -64 19 -70 20 -19 479 -306 483 -301 6 6 -34 40
            -280 242 l-229 188 7 -59z"/>
            </g>
          </svg>
          <span>Internet Guardians</span>
        </a>
      </div>
      <nav>
        <div class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="overflow-hidden">
          <ul>
            <li><a href="../index.htm">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">articles</a></li>
            <li><a href="#">search</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
`;

// Making the header nav clickable
const menuIcon = document.querySelector('.menu-icon');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('active');
}


//! Creating the footer //

const thisScript = document.querySelector('script');
const footer = document.createElement('footer');
thisScript.before(footer);

footer.innerHTML = `
  <svg class="wave-effect" viewBox="0 0 1000 200">
    <path id="wave" fill="#000"></path>
  </svg>
  <div class="content">
    <div class="container">
      <a class="logo" href="../index.htm">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200.000000pt"
          height="200.000000pt"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          fill="#fff" stroke="none">
          <path d="M1140 1753 c-84 -8 -221 -46 -290 -81 -64 -32 -75 -41 -78 -65 -3
          -26 -5 -27 -17 -11 -12 17 -15 17 -49 -6 -41 -28 -41 -30 -21 -70 18 -36 10
          -38 -22 -8 l-23 22 -51 -50 c-51 -50 -139 -174 -178 -252 l-22 -43 23 -20 23
          -20 -27 4 c-29 4 -44 -13 -25 -32 8 -8 7 -11 -5 -11 -11 0 -19 -17 -26 -57
          -17 -88 -25 -200 -17 -220 4 -10 9 -43 10 -73 4 -63 25 -141 40 -143 6 -1 11
          17 13 41 2 29 9 46 23 55 16 10 19 23 19 93 0 171 59 313 180 434 124 125 262
          183 435 183 109 0 196 -21 289 -68 38 -20 69 -35 70 -33 2 2 9 21 17 43 13 35
          32 52 153 134 l139 94 -24 20 c-13 10 -49 32 -81 48 -51 26 -57 27 -69 12 -12
          -14 -14 -13 -19 8 -5 21 -18 27 -90 46 -47 12 -104 22 -127 22 -47 1 -42 8
          -61 -94 l-10 -50 -1 40 c-2 55 -11 85 -26 85 -7 0 -15 7 -19 15 -3 8 -9 14
          -13 13 -4 0 -24 -3 -43 -5z"/>
          <path d="M968 1340 c-159 -25 -317 -139 -395 -287 -31 -56 -63 -163 -63 -209
          0 -14 47 -58 165 -152 91 -73 166 -132 168 -132 2 0 -4 24 -14 53 -44 132 -30
          295 34 380 86 113 251 129 363 34 31 -26 35 -27 173 -27 165 0 163 -1 105 96
          -46 76 -85 117 -158 165 -104 68 -251 99 -378 79z"/>
          <path d="M1071 796 c2 -2 59 -49 127 -105 l122 -101 0 -78 0 -78 67 -55 c37
          -30 89 -71 115 -92 l48 -39 0 276 0 276 -242 0 c-133 0 -239 -2 -237 -4z"/>
          <path d="M514 724 c4 -33 13 -64 19 -70 20 -19 479 -306 483 -301 6 6 -34 40
          -280 242 l-229 188 7 -59z"/>
          </g>
        </svg>
        <span>internet guardians</span>
      </a>
      <div class="social-media">
      <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-github"></i></a>
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
      <div class="copyright">
        <span>copyright ${new Date().getFullYear()}</span>
        <i class="fa-regular fa-copyright"></i>
      </div>
    </div>
  </div>
`;


//! Changing the cursor //

const cursor = document.createElement('div');
cursor.className = 'cursor';

document.body.prepend(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

[
  ...document.querySelectorAll('a'),
  ...document.querySelectorAll('button'),
  ...document.querySelectorAll('input[type=button]'),
  ...document.querySelectorAll('input[type=submit]'),
  ...document.querySelectorAll('input[type=reset]'),
].forEach((e) => {
  e.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  e.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

document.querySelectorAll('input').forEach((e) => {
  e.addEventListener('mouseenter', () => {
    cursor.classList.add('typing');
  });
  e.addEventListener('mouseleave', () => {
    cursor.classList.remove('typing');
  });
});


//! Making the waves effect //

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
