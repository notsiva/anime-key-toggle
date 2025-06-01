(function () {
  const container = document.createElement("div");
  container.id = "anime-image-container";

  const image = document.createElement("img");
  image.id = "anime-image";
  container.appendChild(image);
  document.body.appendChild(container);

  let timeoutId;
  let toggle = true;

  function toggleImage() {
    const imageFile = toggle ? "assets/a.png" : "assets/b.png";
    image.src = chrome.runtime.getURL(imageFile);
    container.style.display = "block";

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      container.style.display = "none";
    }, 500);

    toggle = !toggle;
  }

  window.addEventListener("keydown", toggleImage, true);
})();
