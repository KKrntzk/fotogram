const gallery = [
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
  const containerRef = document.getElementById("imgContainer");
  for (let counter = 0; counter < gallery.length; counter++) {
    containerRef.innerHTML += `<div><img onclick="openDialog()" class="ImgStyling" src="${gallery[counter]}" alt=""></div>`;
  }
}

const dialogRef = document.getElementById("dialog");

function openDialog() {
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}
