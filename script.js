//#region GLOBAL VARIABLES

const DIALOG_REF = document.getElementById("dialogImgPopup");
const DIALOG_IMG_BIG_REF = document.getElementById("DialogImgRenderedBig");
const BACK_BTN_CONTAINER_REF = document.getElementById("backBtnContainer");
const FORTH_BTN_CONTAINER_REF = document.getElementById("forthBtnContainer");
const DIALOG_IMG_NAME_REF = document.getElementById("dialogHeader");
const DIALOG_IMG_COUNTER_CONTAINER_REF = document.getElementById(
  "dialogImgCounterContainer"
);

let actualImgIndex = 0;

//#endregion

//#region ARRAYS

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

//#endregion

//#region FUNCTIONS

/* Funktion rendert alle Bilder aus dem Array GALLERY onload */

function renderImgOnload() {
  const CONTAINER_REF = document.getElementById("imgContainer");
  for (let counter = 0; counter < GALLERY.length; counter++) {
    CONTAINER_REF.innerHTML += `<div><img aria-haspopup="dialog" aria-controls="dialogImgPopup" onclick="openDialog(${counter})" class="img-styling" src="${GALLERY[counter]}" alt=""></div>`;
  }
}

/* Funktion öffnet ein Dialog onclick und rendert dann img, btns und 'Img-Zähler' in das Dialogfeld */

function openDialog(counterindex) {
  const openedDialog = document.getElementById("dialogImgPopup");
  openedDialog.classList.add("dialog-opened");
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="container-img-big"><img id="ImgBigId${counterindex}" class="img-big-styling" src="${GALLERY[counterindex]}"></div>`;
  DIALOG_REF.showModal();
  BACK_BTN_CONTAINER_REF.innerHTML = `<button role="go-backwards-through-gallery" onclick="goBack(${counterindex})" class="dialog-btns" id="goBackBtn">
              <img class="btn-img" src="./img/arrowleft.png" alt="" />
            </button>`;
  FORTH_BTN_CONTAINER_REF.innerHTML = ` <button role="go-forwards-through-gallery" onclick="goForth(${counterindex})" class="dialog-btns" id="goForthBtn">
              <img class="btn-img" src="./img/arrowright.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[counterindex]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${counterindex + 1} / ${
    GALLERY.length
  }</p>`;
  actualImgIndex = counterindex;
}

/* Funktion schliesst das Dialogfeld */

function closeDialog() {
  const openedDialog = document.getElementById("dialogImgPopup");
  openedDialog.classList.remove("dialog-opened");
  DIALOG_REF.close();
}

/* Funktion checkt, ob der Index des Arrays GALLERY unter null ist, um dann zu loopen. Funktion bewegt sich onclick rückwerts durch das Array GALLERY. */

function goBack() {
  if (actualImgIndex - 1 < 0) {
    actualImgIndex = GALLERY.length - 1;
  } else {
    actualImgIndex--;
  }
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="container-img-big"><img id="ImgBigId${actualImgIndex}" class="img-big-styling" src="${GALLERY[actualImgIndex]}"></div>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[actualImgIndex]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${actualImgIndex + 1} / ${
    GALLERY.length
  }</p>`;
}

/* Funktion checkt, ob der Index des Arrays GALLERY länger is als die Länge des Arrays, um dann zu loopen. Funktion bewegt sich onclick vorwärts durch das Array GALLERY. */

function goForth() {
  if (actualImgIndex + 1 > GALLERY.length - 1) {
    actualImgIndex = 0;
  } else {
    actualImgIndex++;
  }
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="container-img-big"><img id="ImgBigId${actualImgIndex}" class="img-big-styling" src="${GALLERY[actualImgIndex]}"></div>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[actualImgIndex]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${actualImgIndex + 1} / ${
    GALLERY.length
  }</p>`;
}

//#endregion
