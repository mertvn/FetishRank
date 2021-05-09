/* eslint-disable no-param-reassign */

const divMain = document.getElementById('divMain');
const emptyColor = 'white';

let fetishes = JSON.parse('[{"Lolicon":null},{"Lactation":null},{"Blond Hair":null},{"Guro":null},{"Giantess":null},{"Dark Hair":null},{"Christmas Cake":null},{"Masochism":null},{"Group Sex":null},{"Crippled Girls":null},{"Sadism":null},{"Bondage":null},{"Tsundere":null},{"Armpits":null},{"Yuri":null},{"Kuudere":null},{"Magical Girls":null},{"Yaoi":null},{"Yandere":null},{"Bishounen":null},{"Sluts":null},{"Yangire":null},{"Genki Girls":null},{"Pure Girls":null},{"Dandere":null},{"Short Hair":null},{"Glasses":null},{"Monster Girls":null},{"Long Hair":null},{"Pregnant Girls":null},{"Catgirls":null},{"Asses":null},{"Anal":null},{"Futa":null},{"Muscle Girls":null},{"Cumming Inside":null},{"Shotacon":null},{"Tattoos":null},{"Cumming Outside":null},{"Mothercon":null},{"Hand holding":null},{"Blowjobs":null},{"Big Tits":null},{"Cuckold":null},{"Body Hair":null},{"Flat Chests":null},{"Piss":null},{"Toddlercon":null},{"Traps":null},{"Scat":null},{"Rape":null},{"Reverse Traps":null},{"True Love":null},{"Exhibitionism":null},{"Tomboys":null},{"Ahoge":null},{"Murder":null},{"Vore":null},{"Stuttering":null},{"Feet":null},{"Dolls":null},{"Drug Users":null},{"Inflation":null},{"Kigurumi":null},{"Chuuni Girls":null},{"Maids":null},{"Torture":null},{"Pain":null},{"The Fang":null},{"Dry Humping":null},{"Kansai Dialect":null},{"Dark Skin":null},{"Unusual Clothing":null},{"Robots":null},{"3DPD":null},{"Age Progression/Regression":null},{"Hoodies":null},{"Ahegao":null},{"Normal Breasts":null},{"Red Hair":null},{"Pegging":null},{"Zettai Ryouiki":null},{"White Hair":null},{"Underboob/ Sideboob":null},{"Imouto":null},{"Blue Hair":null},{"Timestop":null},{"Onee-san":null},{"Purple Hair":null},{"Hypnosis":null},{"Straight Shota":null},{"Green Hair":null},{"School swimsuit":null},{"Femdom":null},{"Mind Break":null},{"Hips":null},{"Thighhighs":null},{"Corruption":null},{"Eyepatches":null},{"Twintails":null},{"Breast Expansion":null},{"Midriffs":null},{"Tanlines":null},{"Embarrassment":null},{"Thigh Sex":null},{"Missionary":null},{"Cowgirl":null},{"Naked Apron":null},{"Heterochromia":null},{"Paizuri":null},{"Cunnilingus":null},{"Tentacles":null},{"Uniforms":null},{"Facesitting":null},{"Healthy":null},{"Fat/BBW":null},{"Tall Girls":null},{"Weight Gain":null},{"Reverse Rape":null},{"Smoking":null},{"Collars":null},{"Nurses":null},{"Masturbation":null},{"Vaginabones":null},{"Drowning":null},{"Sweat":null},{"Drill Hair":null},{"Spanking":null},{"Shimapan":null},{"Incest":null},{"Tickling":null},{"Farts":null},{"Funny/Eccentric hats":null},{"Piercings":null},{"Normal Panties":null},{"Cosplay (non-3D)":null},{"Cosplay":null},{"Moe-Anthromorphization":null},{"Vibrators":null},{"Kidnapping":null},{"null":null},{"Corpses":null},{"Gokkun":null},{"Enormous breasts":null},{"Blindfold":null},{"Groping":null},{"Phone sex":null},{"Mexican Halfbreed Pregnancy":null},{"Blushing":null},{"Crying":null},{"Flowers in Hair":null},{"Nosehooks":null},{"Snot":null},{"Edging":null},{"Forced Orgasm":null},{"Handjob":null},{"Bukkake":null},{"Two Fangs":null},{"Drunk Girls":null},{"Gag":null},{"Pantyhose":null},{"Rimjob":null},{"Latex":null},{"Deflowering":null},{"Hotdogging":null},{"Superhuman Strength":null},{"Genderbend":null},{"Bodyswap":null}]');

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

function updateScoreBoxes(containerFetish) {
  const { score } = containerFetish.dataset;
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

  updateScoreBoxes(container);
}

function createElements(array) {
  divMain.innerHTML = '';

  array.forEach((entry, entryindex) => {
    // console.log(entry);
    // console.log(entryindex);
    const name = Object.keys(entry)[0];
    const score = Object.values(entry)[0];
    // console.log(score);
    // console.log(name);
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

    updateScoreBoxes(containerFetish);

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
  const reader = new FileReader();
  reader.onload = (event) => {
    const json = JSON.parse(event.target.result);
    fetishes = json;
    createElements(json);
  };
  reader.readAsText(file);
}

function saveImage() {

}

const buttonSaveJSON = document.getElementById('buttonSaveJSON');
buttonSaveJSON.addEventListener('click', saveJSON);

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  loadJSON(event.target.files[0]);
});

const buttonSaveImage = document.getElementById('buttonSaveImage');
buttonSaveImage.addEventListener('click', saveImage);

createElements(fetishes);
