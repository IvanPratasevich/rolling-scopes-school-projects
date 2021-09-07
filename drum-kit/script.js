const selfAssessment = `Total score: 30
- Repeat the original project (10/10)
- Mandatory additional functionality (10/10)
 [x] Playing sounds not only when pressing keys on the keyboard, but also when clicking with the mouse
- Additional functionality to choose from (10/10)
 [x] Pop-up musical notes when clicked
`

const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const kick = document.getElementById('kick');
const openhat = document.getElementById('openhat');
const boom = document.getElementById('boom');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tom = document.getElementById('tom');
const tink = document.getElementById('tink');

function getRandomImage(max) {
  const array = ['assets/images/music-note1.png', 'assets/images/music-note2.png', 'assets/images/music-note3.png',
    'assets/images/music-note4.png', 'assets/images/music-note6.png', 'assets/images/music-note7.png', 'assets/images/music-note8.png',
    'assets/images/music-note9.png'
  ];
  return array[Math.floor(Math.random() * max)];
}

function playSound(event) {
  let key = null;
  switch (event.keyCode) {
    case 65:
      clap.play();
      clap.currentTime = 0;
      key = document.getElementById('block-clap');
      key.classList.add('playing');
      break;
    case 83:
      hihat.play();
      hihat.currentTime = 0;
      key = document.getElementById('block-hihat');
      key.classList.add('playing');
      break;
    case 68:
      kick.play();
      kick.currentTime = 0;
      key = document.getElementById('block-kick');
      key.classList.add('playing');
      break;
    case 70:
      openhat.play();
      openhat.currentTime = 0;
      key = document.getElementById('block-openhat');
      key.classList.add('playing');
      break;
    case 71:
      boom.play();
      boom.currentTime = 0;
      key = document.getElementById('block-boom');
      key.classList.add('playing');
      break;
    case 72:
      ride.play();
      ride.currentTime = 0;
      key = document.getElementById('block-ride');
      key.classList.add('playing');
      break;
    case 74:
      snare.play();
      snare.currentTime = 0;
      key = document.getElementById('block-snare');
      key.classList.add('playing');
      break;
    case 75:
      tom.play();
      tom.currentTime = 0;
      key = document.getElementById('block-tom');
      key.classList.add('playing');
      break;
    case 76:
      tink.play();
      tink.currentTime = 0;
      key = document.getElementById('block-tink');
      key.classList.add('playing');
      break;
    default:
      break;
  }
}

function removeTransition(event) {
  let keys = document.querySelectorAll('.keys__block');
  for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i].classList.remove('playing')
  }
}

function playSoundClick(event) {
  let elem = document.querySelectorAll('.keys__block');
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('mousedown', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const musicalNote = document.createElement('div');
      musicalNote.classList.add('musicalNote_style');
      switch (i) {
        case 0:
          clap.play();
          clap.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 1:
          hihat.play();
          hihat.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 2:
          kick.play();
          kick.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 3:
          openhat.play();
          openhat.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 4:
          boom.play();
          boom.currentTime = 0;
          key = document.getElementById('block-boom');
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(assets/images/boom.png);
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 5:
          ride.play();
          ride.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 6:
          snare.play();
          snare.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 7:
          tom.play();
          tom.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        case 8:
          tink.play();
          tink.currentTime = 0;
          key = elem[i];
          key.classList.add('playing');
          keyCoordinate = key.getBoundingClientRect();
          xCoordinate = x - keyCoordinate.left - 18;
          yCoordinate = y - keyCoordinate.top - 16;
          musicalNote.style.cssText =
            `
          left : ${xCoordinate}px;
          top: ${yCoordinate}px;
          background-image: url(${getRandomImage(8)});
          `;
          key.append(musicalNote);
          setTimeout(() => musicalNote.remove(), 650);
          break;
        default:
          break;
      }
    });
  }
}
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);
playSoundClick();
window.addEventListener('mouseup', removeTransition);
console.log(selfAssessment);