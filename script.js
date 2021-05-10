/* eslint-disable no-param-reassign */

const divMain = document.getElementById('divMain');
const emptyColor = 'white';

const presets = {
  Default: '[{"Age Progression/Regression":null},{"Ahegao":null},{"Ahoge":null},{"Airhead":null},{"Aliens":null},{"Anal":null},{"Angels":null},{"Armpits":null},{"Asses":null},{"Atashi":null},{"Aunt":null},{"Bara":null},{"Big Tits":null},{"Bikinis":null},{"Bishounen":null},{"Blindfold":null},{"Blond Hair":null},{"Blowjobs":null},{"Blue Hair":null},{"Blushing":null},{"Body Hair":null},{"Bodyswap":null},{"Bokukko":null},{"Bondage":null},{"Breast Expansion":null},{"Bukkake":null},{"Catgirls":null},{"Chikan":null},{"Childhood friend":null},{"Choukyou":null},{"Christmas Cake":null},{"Chuuni Girls":null},{"Class president":null},{"Clothed sex":null},{"Collars":null},{"Condoms":null},{"Corpses":null},{"Corruption":null},{"Cosplay":null},{"Cousin":null},{"Cowgirl":null},{"Crippled Girls":null},{"Crying":null},{"Cumming Inside":null},{"Cumming Outside":null},{"Cunnilingus":null},{"Dandere":null},{"Dark Hair":null},{"Dark Skin":null},{"Deflowering":null},{"Delinquent":null},{"Dirty Talk":null},{"Doggy Style":null},{"Dolls":null},{"Drill Hair":null},{"Drug Users":null},{"Drunk Girls":null},{"Dry Humping":null},{"Edging":null},{"Elves":null},{"Embarrassment":null},{"Enormous breasts":null},{"Exhibitionism":null},{"Eyepatches":null},{"Facesitting":null},{"Famous":null},{"Farts":null},{"Fat":null},{"Feet":null},{"Femdom":null},{"Fisting":null},{"Flat Chests":null},{"Flowers in Hair":null},{"Food Play":null},{"Footjob":null},{"Forced Orgasm":null},{"Foreign exchange student":null},{"French Kiss":null},{"Funny/Eccentric hats":null},{"Futanari":null},{"Gag":null},{"Gamer":null},{"Genderbend (Historical)":null},{"Genderbend (Trans)":null},{"Genki Girls":null},{"Giantess":null},{"Glasses":null},{"Goddesses":null},{"Gokkun":null},{"Green Hair":null},{"Groping":null},{"Group Sex":null},{"Guro":null},{"Gyaru":null},{"Hand holding":null},{"Handjob":null},{"Hatesex":null},{"Heterochromia":null},{"Hips":null},{"Hoodies":null},{"Hypnosis":null},{"Ice Queen":null},{"Imouto":null},{"Inbreeding":null},{"Incest":null},{"Inflation":null},{"Intercrural":null},{"Kansai Dialect":null},{"Kidnapping":null},{"Kigurumi":null},{"Kissing":null},{"Knight":null},{"Kouhai":null},{"Kuudere":null},{"Lactation":null},{"Latex":null},{"Lazy":null},{"Lolicon":null},{"Long Hair":null},{"Magical Girls":null},{"Maids":null},{"Masochism":null},{"Masturbation":null},{"Midriffs":null},{"Mind Break":null},{"Missionary":null},{"Moaning":null},{"Moe-Anthromorphization":null},{"Monster Girls":null},{"Mothercon":null},{"Murder":null},{"Muscle Girls":null},{"Mutual Masturbation":null},{"Naizuri":null},{"Naked Apron":null},{"Netorare":null},{"Netori":null},{"Normal Breasts":null},{"Normal Panties":null},{"Nuns":null},{"Nurses":null},{"Ojou-sama":null},{"Onee-san":null},{"Oppai loli":null},{"Orcs":null},{"Orekko":null},{"Outdoor Sex":null},{"Paizuri":null},{"Pantyhose":null},{"Pegging":null},{"Perverted Girls":null},{"Petplay":null},{"Phone sex":null},{"Piercings":null},{"Piss":null},{"Pregnancy":null},{"Pure Girls":null},{"Purple Hair":null},{"Rape":null},{"Red Hair":null},{"Reverse Netorare":null},{"Reverse Rape":null},{"Reverse Traps":null},{"Rimjob":null},{"Robots":null},{"Ryona":null},{"Sadism":null},{"Scat":null},{"School swimsuit":null},{"Selfcest":null},{"Senpai":null},{"Sex in Front of an Audience":null},{"Shimapan":null},{"Short Hair":null},{"Sluts":null},{"Smoking":null},{"Snot":null},{"Spanking":null},{"Straight Shota":null},{"Strangulation":null},{"Stuttering":null},{"Sweat":null},{"Tall Girls":null},{"Tanlines":null},{"Tattoos":null},{"Teachers":null},{"Teasing":null},{"Tentacles":null},{"The Fang":null},{"Thighhighs":null},{"Third person speech":null},{"Tickling":null},{"Tomboys":null},{"Torture":null},{"Toys":null},{"Traps":null},{"True Love":null},{"Tsundere":null},{"Twins":null},{"Twintails":null},{"Two Fangs":null},{"Underboob/Sideboob":null},{"Uniforms":null},{"Vaginabones":null},{"Vampires":null},{"Vibrators":null},{"Vore":null},{"Ware":null},{"Watashi":null},{"Weight Gain":null},{"White Hair":null},{"X-ray":null},{"Yamato Nadeshiko":null},{"Yandere":null},{"Yangire":null},{"Yaoi":null},{"Youkai":null},{"Yuri":null},{"Zettai Ryouiki":null}]',
  UltimateFetishChart: '[{"Lolicon":null},{"Lactation":null},{"Blond Hair":null},{"Guro":null},{"Giantess":null},{"Dark Hair":null},{"Christmas Cake":null},{"Masochism":null},{"Group Sex":null},{"Crippled Girls":null},{"Sadism":null},{"Bondage":null},{"Tsundere":null},{"Armpits":null},{"Yuri":null},{"Kuudere":null},{"Magical Girls":null},{"Yaoi":null},{"Yandere":null},{"Bishounen":null},{"Sluts":null},{"Yangire":null},{"Genki Girls":null},{"Pure Girls":null},{"Dandere":null},{"Short Hair":null},{"Glasses":null},{"Monster Girls":null},{"Long Hair":null},{"Pregnant Girls":null},{"Catgirls":null},{"Asses":null},{"Anal":null},{"Futa":null},{"Muscle Girls":null},{"Cumming Inside":null},{"Shotacon":null},{"Tattoos":null},{"Cumming Outside":null},{"Mothercon":null},{"Hand holding":null},{"Blowjobs":null},{"Big Tits":null},{"Cuckold":null},{"Body Hair":null},{"Flat Chests":null},{"Piss":null},{"Toddlercon":null},{"Traps":null},{"Scat":null},{"Rape":null},{"Reverse Traps":null},{"True Love":null},{"Exhibitionism":null},{"Tomboys":null},{"Ahoge":null},{"Murder":null},{"Vore":null},{"Stuttering":null},{"Feet":null},{"Dolls":null},{"Drug Users":null},{"Inflation":null},{"Kigurumi":null},{"Chuuni Girls":null},{"Maids":null},{"Torture":null},{"Pain":null},{"The Fang":null},{"Dry Humping":null},{"Kansai Dialect":null},{"Dark Skin":null},{"Unusual Clothing":null},{"Robots":null},{"3DPD":null},{"Age Progression/Regression":null},{"Hoodies":null},{"Ahegao":null},{"Normal Breasts":null},{"Red Hair":null},{"Pegging":null},{"Zettai Ryouiki":null},{"White Hair":null},{"Underboob/ Sideboob":null},{"Imouto":null},{"Blue Hair":null},{"Timestop":null},{"Onee-san":null},{"Purple Hair":null},{"Hypnosis":null},{"Straight Shota":null},{"Green Hair":null},{"School swimsuit":null},{"Femdom":null},{"Mind Break":null},{"Hips":null},{"Thighhighs":null},{"Corruption":null},{"Eyepatches":null},{"Twintails":null},{"Breast Expansion":null},{"Midriffs":null},{"Tanlines":null},{"Embarrassment":null},{"Thigh Sex":null},{"Missionary":null},{"Cowgirl":null},{"Naked Apron":null},{"Heterochromia":null},{"Paizuri":null},{"Cunnilingus":null},{"Tentacles":null},{"Uniforms":null},{"Facesitting":null},{"Healthy":null},{"Fat/BBW":null},{"Tall Girls":null},{"Weight Gain":null},{"Reverse Rape":null},{"Smoking":null},{"Collars":null},{"Nurses":null},{"Masturbation":null},{"Vaginabones":null},{"Drowning":null},{"Sweat":null},{"Drill Hair":null},{"Spanking":null},{"Shimapan":null},{"Incest":null},{"Tickling":null},{"Farts":null},{"Funny/Eccentric hats":null},{"Piercings":null},{"Normal Panties":null},{"Cosplay (non-3D)":null},{"Cosplay":null},{"Moe-Anthromorphization":null},{"Vibrators":null},{"Kidnapping":null},{"-":null},{"Corpses":null},{"Gokkun":null},{"Enormous breasts":null},{"Blindfold":null},{"Groping":null},{"Phone sex":null},{"Mexican Halfbreed Pregnancy":null},{"Blushing":null},{"Crying":null},{"Flowers in Hair":null},{"Nosehooks":null},{"Snot":null},{"Edging":null},{"Forced Orgasm":null},{"Handjob":null},{"Bukkake":null},{"Two Fangs":null},{"Drunk Girls":null},{"Gag":null},{"Pantyhose":null},{"Rimjob":null},{"Latex":null},{"Deflowering":null},{"Hotdogging":null},{"Superhuman Strength":null},{"Genderbend":null},{"Bodyswap":null}]',

};

let fetishes = JSON.parse(presets.Default);

const colorTable = {
  1: 'black',
  2: 'darkred',
  3: 'red',
  4: 'tomato',
  5: 'gold',
  6: 'yellow',
  7: 'lightgreen',
  8: 'green',
  9: 'darkgreen',
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
  const date = new Date().toISOString().substring(0, 19);

  html2canvas(divMain).then((canvas) => {
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', canvas.toDataURL('image/png'));
    downloadAnchorNode.setAttribute('download', `FetishRank ${date}.png`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
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
