(function () {
  const container = document.createElement("div"); //creating a container
  container.id = "anime-image-container";

  const image = document.createElement("img"); //creating a img element
  image.id = "anime-image";

  container.appendChild(image); //insert a child inside the container
  document.body.appendChild(container); //insert the container inside the body of the html

  let timeoutId;
  let toggle = true; //set the default toggle as true

  function toggleImage() {
    const imageFile = toggle ? "assets/a.png" : "assets/b.png"; //toggle the image to a if not false and vice versa
    image.src = chrome.runtime.getURL(imageFile);
    container.style.display = "block"; // set the image style to block

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      container.style.display = "none";
    }, 500);

    toggle = !toggle;
  }

  window.addEventListener("keydown", toggleImage, true);
})();
