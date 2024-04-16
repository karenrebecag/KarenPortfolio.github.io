const firebaseConfig = {
    apiKey: "AIzaSyDJGeGcL4YfZWtGwuE5YN9VVrWFZEy7NTo",
    authDomain: "contactform-73a21.firebaseapp.com",
    databaseURL: "https://contactform-73a21-default-rtdb.firebaseio.com",
    projectId: "contactform-73a21",
    storageBucket: "contactform-73a21.appspot.com",
    messagingSenderId: "142682147814",
    appId: "1:142682147814:web:3de2b120f2b0d089cfe427"
  };
//Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for database
  var contactFormDB = firebase.database().ref("contactform")

  document.getElementById('contactform').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var firstName = getElementVal ('firstName');
    var lastName = getElementVal ('lastName');
    var email = getElementVal ('email');
    var country = getElementVal ('country');
    var phoneNumber = getElementVal ('phoneNumber');
    var message = getElementVal ('message');

    saveMessages(firstName, lastName, email, country, phoneNumber, message);

// Mostrar la alerta con efecto fade-in
document.querySelector(".alert").style.opacity = '1';
document.querySelector(".alert").style.display = 'block'; // Asegura que el elemento es 'block' para permitir la visibilidad

// Ocultar la alerta con efecto fade-out después de 3 segundos
setTimeout(() => {
  document.querySelector(".alert").style.opacity = '0';
  // Esperar que termine la transición antes de cambiar el display a 'none'
  setTimeout(() => {
    document.querySelector(".alert").style.display = 'none';
  }, 500); // Ajustado para coincidir con la duración de la transición
}, 3000);


  //reset form
  document.getElementById('contactform').reset();

}
  const saveMessages = (firstName, lastName, email, country, phoneNumber, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        firstName : firstName,
        lastName : lastName,
        email : email,
        country : country,
        phoneNumber : phoneNumber,
        message : message,
    })
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }