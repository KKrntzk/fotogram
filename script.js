const GALLERY = [
  "./img/castle-7728772_1280.png",
  "./img/edinburgh-view-4959200_1280.png",
  "./img/eilean-donan-castle-4785333_1280.png",
  "./img/landscape-5071102_1280.png",
  "./img/neist-point-540119_1280.png",
  "./img/road-4955680_1280.png",
  "./img/scotland-2790177_1280.png",
  "./img/scotland-4862039_1280.png",
  "./img/sea-192989_1280.png",
  "./img/skye-5066493_1280.png",
  "./img/waterfall-4949231_1280.png",
  "./img/waterfall-9828788_1280.png",
];

const GALLERY_NAMES = [
  "Edinborough Castle",
  "Edinborough from afar",
  "Elein Dolan Castle",
  "Scottish Landscape",
  "Isle of Skye",
  "Scottish scenery",
  "Highlands",
  "Scottish Castle",
  "Duncansby Head",
  "Scotland in Winter",
  "Kilt Rock",
  "Isle of Fairy Pools",
];

function renderImgOnload() {
  const CONTAINER_REF = document.getElementById("imgContainer");
  for (let counter = 0; counter < GALLERY.length; counter++) {
    CONTAINER_REF.innerHTML += `<div><img aria-haspopup="dialog" aria-controls="dialogImgPopup" onclick="openDialog(${counter})" class="ImgStyling" src="${GALLERY[counter]}" alt=""></div>`;
  }
}

const DIALOG_REF = document.getElementById("dialogImgPopup");
const DIALOG_IMG_BIG_REF = document.getElementById("DialogImgRenderedBig");
const BACK_BTN_CONTAINER_REF = document.getElementById("backBtnContainer");
const FORTH_BTN_CONTAINER_REF = document.getElementById("forthBtnContainer");
const DIALOG_IMG_NAME_REF = document.getElementById("dialogHeader");
const DIALOG_IMG_COUNTER_CONTAINER_REF = document.getElementById(
  "dialogImgCounterContainer"
);
let ACTUAL_IMG_INDEX = 0;

function openDialog(counterindex) {
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${counterindex}" class="ImgBigStyling" src="${GALLERY[counterindex]}"></div>`;
  DIALOG_REF.showModal();
  BACK_BTN_CONTAINER_REF.innerHTML = `<button onclick="goBack(${counterindex})" class="DialogBtns" id="goBackBtn">
              <img src="./img/arrowleft.png" alt="" />
            </button>`;
  FORTH_BTN_CONTAINER_REF.innerHTML = ` <button onclick="goForth(${counterindex})" class="DialogBtns" id="goForthBtn">
              <img src="./img/arrowright.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[counterindex]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${counterindex + 1} /12</p>`;
  ACTUAL_IMG_INDEX = counterindex;
}

function closeDialog() {
  DIALOG_REF.close();
}

function goBack() {
  if (ACTUAL_IMG_INDEX - 1 < 0) {
    ACTUAL_IMG_INDEX = GALLERY.length - 1;
  } else {
    ACTUAL_IMG_INDEX--;
  }
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${ACTUAL_IMG_INDEX}" class="ImgBigStyling" src="${GALLERY[ACTUAL_IMG_INDEX]}"></div>`;
  BACK_BTN_CONTAINER_REF.innerHTML = `  <button onclick="goBack()" class="DialogBtns" id="goBackBtn">
              <img src="./img/arrowleft.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[ACTUAL_IMG_INDEX]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${ACTUAL_IMG_INDEX} /12</p>`;
}

function goForth() {
  if (ACTUAL_IMG_INDEX + 1 > GALLERY.length - 1) {
    ACTUAL_IMG_INDEX = 0;
  } else {
    ACTUAL_IMG_INDEX++;
  }
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${ACTUAL_IMG_INDEX}" class="ImgBigStyling" src="${GALLERY[ACTUAL_IMG_INDEX]}"></div>`;
  FORTH_BTN_CONTAINER_REF.innerHTML = ` <button onclick="goForth()" class="DialogBtns" id="goForthBtn">
              <img src="./img/arrowright.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[ACTUAL_IMG_INDEX]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${
    ACTUAL_IMG_INDEX + 1
  } /12</p>`;
}
