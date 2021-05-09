/* eslint-disable no-param-reassign */

const divMain = document.getElementById('divMain');
const emptyColor = 'white';

const fetishes = JSON.parse('[{"imouto":"10"},{"lactation":"10"},{"lolicon":"10"},{"tsundere": "10"},{"kuudere": "10"},{"yandere": "10"},{"yangire": "10"}]');

console.log(fetishes);

const colorTable = {
  1: 'black',
  2: 'red',
  3: 'tomato',
  4: 'tomato',
  5: 'yellow',
  6: 'yellow',
  7: 'lightgreen',
  8: 'lightgreen',
  9: 'green',
  10: 'purple',
};

function updateScoreBoxes(containerFetish, score) {
  const color = colorTable[score];

  // lol
  Array.from(containerFetish.children[1].children).forEach((boxScore, index) => {
    boxScore.style.background = emptyColor;

    if (index >= score) return;

    boxScore.style.background = color;
  });
}

function clickboxScore(container, index, entryindex) {
  // ???
  fetishes[entryindex][container.dataset.name] = index;
  container.dataset.score = index;

  updateScoreBoxes(container, index);
}

function createElements(array) {
  divMain.innerHTML = '';

  array.forEach((entry, entryindex) => {
    console.log(entry);
    console.log(entryindex);
    const name = Object.keys(entry)[0];
    const score = Object.values(entry)[0];
    console.log(score);
    console.log(name);
    const containerFetish = document.createElement('container');
    containerFetish.className = 'containerFetish';

    const boxName = document.createElement('div');
    boxName.className = 'boxName';
    boxName.textContent = name;
    containerFetish.appendChild(boxName);

    const containerScoreBoxes = document.createElement('container');
    containerScoreBoxes.className = 'containerScoreBoxes';
    for (let index = 1; index <= 10; index += 1) {
      const boxScore = document.createElement('div');
      boxScore.className = 'boxScore';
      boxScore.addEventListener('click', clickboxScore.bind(this, containerFetish, index, entryindex));

      containerScoreBoxes.appendChild(boxScore);
    }
    containerFetish.appendChild(containerScoreBoxes);

    containerFetish.dataset.name = name;
    containerFetish.dataset.score = score;

    divMain.appendChild(containerFetish);
  });
}

// https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
function saveJSON() {
  const date = new Date().toISOString().substring(0, 19);
  const exportName = `FetishRank ${date}.json`;
  const exportObj = fetishes;

  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(exportObj))}`;
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', exportName);
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function loadJSON(file) {
  console.log(file);
  const reader = new FileReader();
  let test = '';
  reader.addEventListener('load', (event) => {
    test = event.target.result;
  });
  reader.readAsText(file);
  const json = JSON.parse(test);
  console.log(json);
  // createElements();
}

const buttonSave = document.getElementById('buttonSave');
buttonSave.addEventListener('click', saveJSON);
// const buttonLoad = document.getElementById('buttonLoad');
// buttonLoad.addEventListener('click', loadJSON.bind(this));
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  loadJSON(event.target.files[0]);
});

createElements(fetishes);
