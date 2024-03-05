    // Obtén el modal
    var modal = document.getElementById("myModal");

// Obtén la imagen y la inserta dentro del modal - usa su atributo "alt" como caption
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName('gallery-image');

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.innerHTML = "<img src='" + this.src + "' alt='" + this.alt + "'>";
  }
}

// Cierra el modal al hacer clic en cualquier lugar fuera de la imagen
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
