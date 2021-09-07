const mark = `Оценка - 45 баллов (максимальный балл за таск – 30)
ТЗ:
Частично выполненные пункты:
2) Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания. (5 баллов)
+ Добавьте в приложение минимум два дополнительных фильтра и пресеты - фото, к которым применён наборы фильтров.
- При выборе миниатюры пресета такие же фильтры применяются к основному фото.
Выполненные пункты:
1) Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение. Правки и изменения допускаются и приветствуются, если они не ухудшают внешний вид и функционал исходного проекта. За недостатки, которые присутствуют в исходном проекте, баллы не снимаются. (10 баллов)
3) Дополнительный фукционал на выбор это одно или несколько улучшений, которые вы можете добавить в свой проект. Для каждого проекта предлагаются несколько возможных вариантов его улучшения. Вы можете реализовать одно или несколько из них, или добавить в проект свои собственные улучшения. Каждое качественно выполненное улучшение из предложенных в задании или своё собственное, аналогичное им по сложности, оценивается в 10 баллов. Количество улучшений не ограничено. При этом максимальный балл за таск - 30. Даже если от исходного проекта ничего не осталось и обязательный дополнительный функционал не выполнен, автор работы может получить максимальный балл за таск только за счёт дополнительного функционала на выбор, если по качеству выполнения и/или сложности он не уступает исходному проекту и обязательному дополнительному фукционалу.
+ Перелистывание фото. (10 баллов)
+ Сброс фильтров кликом на кнопку. (10 баллов)
+ Отображение и сохранение css кода добавленного фильтра. (10 баллов)
`
const defaultFilters = {
  0: 100,
  1: 100,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 100,
};
const imgLinks = ['assets/images/monster.webp', 'assets/images/monster2.webp',
  'assets/images/monster3.webp', 'assets/images/monster4.webp', 'assets/images/monster5.webp',
  'assets/images/monster6.webp', 'assets/images/monster7.webp', 'assets/images/monster8.webp',
];
let currentImg = 1;
let range = document.querySelectorAll('.range');
let img = document.querySelector('img');
let brightnessCSS = document.getElementById('brightness');
let inputCSS = document.getElementById("inputCSS");
let blur = "";
let brightnessCSSText = "";
let changeImgBtn = document.getElementById('chngbtn');
let copyBtn = document.getElementById('copy-btn');
let variable1 = defaultFilters[2];
let variable2 = defaultFilters[0];
let variable3 = defaultFilters[0];
let variable4 = defaultFilters[2];
let variable5 = defaultFilters[4];
let variable6 = defaultFilters[5];
let variable7 = defaultFilters[6];

function addAnimation() {
  this.classList.add('playing-animation');
  this.style.cssText = `animation: scrolling-x 15s linear infinite; animation-fill-mode: forwards`;
}

function stopAnimation() {
  this.style.cssText = `animation: scrolling-x 15s linear infinite; animation-play-state: paused;`;
}

function handleUpdateRange(event) {
  let suffix = this.getAttribute('data-sizing');
  document.documentElement.style.setProperty(`--${this.getAttribute('data-filter')}`, this.value +
    suffix);
}

function outputUpdate(event) {
  let suffix = this.getAttribute('data-sizing');
  let input = event.target;
  let outputValue = `${this.getAttribute('data-filter')}`;
  let output = document.getElementById(`${outputValue}`);
  switch (outputValue) {
    case 'blur':
      variable1 = input.value;
      break;
    case 'brightness':
      variable2 = input.value;
      break;
    case 'contrast':
      variable3 = input.value;
      break;
    case 'hue-rotate':
      variable4 = input.value;
      break;
    case 'sepia':
      variable5 = input.value;
      break;
    case 'invert':
      variable6 = input.value;
      break;
    case 'saturate':
      variable7 = input.value;
      break;
    default:
      break;
  }
  output.innerHTML = input.value + suffix;
  inputCSS.value = 'blur(' + variable1 + 'px' + ')' + ' ' + 'brightness(' + variable2 + '%' + ')' +
    ' ' + 'contrast(' + variable3 + '%' + ')' + ' ' + 'hue-rotate(' + variable4 + 'deg' + ')' + ' ' +
    'sepia(' + variable5 + '%' + ')' + ' ' + 'invert(' + variable6 + '%' + ')' + ' ' + 'saturate(' +
    variable7 + '%' + ')';
}

function resetFilter() {
  document.documentElement.style = " ";
  let suffix = "";
  let outputValue = "";
  let output = "";
  range.forEach(function(item, i, arr) {
    item.value = defaultFilters[i];
    suffix = item.getAttribute('data-sizing')
    outputValue = `${item.getAttribute('data-filter')}`;
    output = document.getElementById(`${outputValue}`);
    output.innerHTML = item.value + suffix;
  });
  inputCSS.value =
    "blur(0px) brightness(100%) contrast(100%) hue-rotate(0deg) sepia(0%) invert(0%) saturate(100%)";
  variable1 = 0;
  variable2 = 100;
  variable3 = 100;
  variable4 = 0;
  variable5 = 0;
  variable6 = 0;
  variable7 = 100;
}

function copyCSS() {
  let copyText = document.getElementById("inputCSS");
  copyText.select();
  document.execCommand("copy");
  blockCopyBtn()
}
function blockCopyBtn() {
  copyBtn.disabled = !copyBtn.disabled;
  copyBtn.style.cssText = `color: green; border: 1px solid red; background: white; `;
  copyBtn.innerHTML = 'Copied ✔️';
  setTimeout(activateCopyBtn, 2000);
}
function activateCopyBtn() {
  copyBtn.disabled = false;
  copyBtn.style.cssText = ` `;
  copyBtn.innerHTML = 'Copy CSS';
}
function changeImgAnimation() {
  img.style.cssText = `animation: img-animation 2.5s linear; `;
  blockBtn()
  setTimeout(changeImg, 2500);
  setTimeout(activateBtn, 5000);
}

function blockBtn() {
  changeImgBtn.disabled = !changeImgBtn.disabled;
  changeImgBtn.style.cssText = `color: red; border: 1px solid red; background: white; `;
  changeImgBtn.innerHTML = 'Wait ❌';
}

function activateBtn() {
  changeImgBtn.disabled = false;
  changeImgBtn.style.cssText = ` `;
  changeImgBtn.innerHTML = 'Next Image';
}

function changeImg() {
  img.style.cssText = `animation: img-animation2 2.5s linear;`;
  img.src = imgLinks[currentImg];
  currentImg++
  if (currentImg == imgLinks.length) {
    currentImg = 0;
  }
}
range.forEach(input => input.addEventListener('input', outputUpdate));
range.forEach(input => input.addEventListener('mousedown', addAnimation));
range.forEach(input => input.addEventListener('mouseup', stopAnimation));
range.forEach(input => input.addEventListener('input', handleUpdateRange));
console.log(mark)