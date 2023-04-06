//console.log('%c HI', 'color: firebrick')
//index.js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById("image-container");
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
      });
    })
    .catch((error) => console.log(error));
});
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById("image-container");
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
      });
    })
    .catch((error) => console.log(error));

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedList = document.getElementById("dog-breeds");
      let breedArray = Object.keys(data.message);

      // Render all dog breeds
      breedArray.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);

        // Change font color of li when clicked
        li.addEventListener("click", (event) => {
          event.target.style.color = "blue";
        });
      });

      // Filter breeds by letter
      const dropdown = document.getElementById("breed-dropdown");
      dropdown.addEventListener("change", (event) => {
        const letter = event.target.value;
        breedList.innerHTML = "";

        breedArray.filter((breed) => breed.startsWith(letter)).forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);

          // Change font color of li when clicked
          li.addEventListener("click", (event) => {
            event.target.style.color = "blue";
          });
        });
      });
    })
    .catch((error) => console.log(error));
});
