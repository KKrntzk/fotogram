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

function renderImgOnload() {
  const CONTAINER_REF = document.getElementById("imgContainer");
  for (let counter = 0; counter < GALLERY.length; counter++) {
    CONTAINER_REF.innerHTML += `<div><img aria-haspopup="dialog" aria-controls="dialogImgPopup" onclick="openDialog(${counter})" class="ImgStyling" src="${GALLERY[counter]}" alt=""></div>`;
  }
}

const DIALOG_REF = document.getElementById("dialogImgPopup");

function openDialog(counterindex) {
  const DIALOG_IMG_BIG_REF = document.getElementById("DialogImgRenderedBig");
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${counterindex}" class="ImgBigStyling" src="${GALLERY[counterindex]}"></div>`;
  DIALOG_REF.showModal();
}

function closeDialog() {
  DIALOG_REF.close();
}

function goBack(counterindex) {
  const DIALOG_IMG_BIG_REF = document.getElementById("DialogImgRenderedBig");
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${
    counterindex - 1
  }" class="ImgBigStyling" src="${GALLERY[counterindex - 1]}"></div>`;
}

function goForth(counterindex) {
  const DIALOG_IMG_BIG_REF = document.getElementById("DialogImgRenderedBig");
  DIALOG_IMG_BIG_REF.innerHTML = "";
  DIALOG_IMG_BIG_REF.innerHTML = `<div class="ContainerImgBig"><img id="ImgBigId${
    counterindex + 1
  }" class="ImgBigStyling" src="${GALLERY[counterindex + 1]}"></div>`;
}

// const GALLERY_NAMES = [
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
//   "Edinborough Castle",
// ];

// function renderNamesOnOpenDialog(x) {
//   const DIALOG_IMG_NAME_REF = document.getElementById("dialogHeader");
//   for (let x = 0; x < GALLERY_NAMES.length; x++) {
//     DIALOG_IMG_NAME_REF.innerHTML = `<p>${GALLERY_NAMES[x]}</p>`;
//   }
// }
