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
}

function closeDialog() {
  DIALOG_REF.close();
}

function goBack(counterindex) {
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${
    counterindex - 1
  }" class="ImgBigStyling" src="${GALLERY[counterindex - 1]}"></div>`;
  BACK_BTN_CONTAINER_REF.innerHTML = `  <button onclick="goBack(${
    counterindex - 1
  })" class="DialogBtns" id="goBackBtn">
              <img src="./img/arrowleft.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[counterindex - 1]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${
    counterindex + 1 - 1
  } /12</p>`;
}

function goForth(counterindex) {
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${
    counterindex + 1
  }" class="ImgBigStyling" src="${GALLERY[counterindex + 1]}"></div>`;
  FORTH_BTN_CONTAINER_REF.innerHTML = ` <button onclick="goForth(${
    counterindex + 1
  })" class="DialogBtns" id="goForthBtn">
              <img src="./img/arrowright.png" alt="" />
            </button>`;
  DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[counterindex + 1]}</p>`;
  DIALOG_IMG_COUNTER_CONTAINER_REF.innerHTML = `<p>${
    counterindex + 1 + 1
  } /12</p>`;
}
