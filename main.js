// Skript pro načtení fotografií z JSON souboru a zobrazení jejich miniatur

const photoGrid = document.getElementById("photo-grid");

fetch("photos.json")
  .then(response => response.json())
  .then(photos => {
    photos.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.thumbnail;
      img.alt = photo.title;
      photoGrid.appendChild(img);
    });
  });

// Skript pro odeslání formuláře pomocí Fetch API

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  fetch("send-form.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      alert(result);
    });
});
