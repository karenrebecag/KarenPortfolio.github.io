// Skilltags
var skillTags = document.querySelectorAll('.skillTag');
// Función para cambiar el estilo de la etiqueta
function changeStyleOnHover(event) {
                                                  
 event.target.style.transform = 'scale(1.1)'; // Hacer que la etiqueta sea un poco más grande
}
function resetStyle(event) {
event.target.style.backgroundColor = ''; // Restablecer el color de fondo
event.target.style.transform = ''; // Restablecer la transformación
}
                                              
// Asignar eventos a cada etiqueta
skillTags.forEach(function(tag) {
tag.addEventListener('mouseenter', changeStyleOnHover);
tag.addEventListener('mouseleave', resetStyle);
});
                                              
// Function to update the position of the tags based on the cursor's position
function gravitateTowardsCursor(event) {
const skillTags = document.querySelectorAll('.skillTag');
skillTags.forEach(tag => {
const tagRect = tag.getBoundingClientRect();
const tagCenterX = tagRect.left + tagRect.width / 2;
const tagCenterY = tagRect.top + tagRect.height / 2;
                                                    
const distanceX = tagCenterX - event.clientX;
const distanceY = tagCenterY - event.clientY;
const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY); // Pythagorean theorem
                                                    
// The maximum distance at which the effect occurs
const maxDistance = 150;
                                                    
// If the cursor is within maxDistance, move the tag
if (distance < maxDistance) {
const force = (1 - distance / maxDistance) * 10; // Calculate "gravitational force"
const moveX = -force * (distanceX / distance);
const moveY = -force * (distanceY / distance);
// Apply the movement to the tag's transform property
tag.style.transform = `translate(${moveX}px, ${moveY}px)`;
} else {
// Reset the position if the cursor is too far away
tag.style.transform = 'translate(0, 0)';
}
});
}
        