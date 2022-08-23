const BASE_URL = "http://localhost:8080/api/view";
const IMAGES_FOLDER = "images/";

const objUrlParams = new URLSearchParams(window.location.search);
imgId = objUrlParams.get('id');

let mode = "gallery"; // Default to gallery view
let uri = `${BASE_URL}`;
if (imgId) {
  // Single picture view
  mode = "single";
  uri = `${BASE_URL}/${imgId}`;
}

async function showGallery() {
  fetch(uri)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
     // Build the grid of thumbnails;
      const gridContainer = document.createElement("div");
      gridContainer.className = "grid_container";
      for (const item of data) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid_item";
        const link = document.createElement("a");
        link.href = "index.html?id=" + item.imageId;
        const image = document.createElement("img");
        image.className = "thumbnail";
        image.src = IMAGES_FOLDER + item.fileName;
        link.append(image)
        gridItem.append(link);
        gridContainer.append(gridItem);
      }
      const container = document.querySelector("#img_container");
      container.append(gridContainer);
    })
    .catch(err => console.error(err));
}

async function showPicture() {
  fetch(uri)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);

      // Display metadata & photo
      // Date
      const pDate = document.createElement("p");
      pDate.className = "metadata";
      const lblDate = document.createElement("span");
      lblDate.className = "label";
      lblDate.innerText = "Date Created: ";
      const txtDate = document.createElement("span");
      txtDate.className = "data";
      txtDate.innerText = data.dateCreated;
      pDate.append(lblDate);
      pDate.append(txtDate);

      // Description
      const pDesc = document.createElement("p");
      pDesc.className = "metadata";
      const lblDesc = document.createElement("span");
      lblDesc.className = "label";
      lblDesc.innerText = "Prompt: "
      const txtDesc = document.createElement("span");
      txtDesc.className = "data";
      txtDesc.innerText = data.description;
      pDesc.append(lblDesc);
      pDesc.append(txtDesc);

      // Video or Image + HD URL
      const imgPicture = document.createElement("img");
      imgPicture.className = "image";
      imgPicture.src = IMAGES_FOLDER + data.fileName;
      console.log(imgPicture.src);

      const container = document.querySelector("#img_container");
      container.append(pDate);
      container.append(pDesc);
      container.append(imgPicture);   

    })
    .catch(err => console.error(err));
}

window.addEventListener('load', () => {
  if (mode === "single") {
    showPicture();
  } else {
    showGallery();
  }
});
