const firebaseConfig = {
    apiKey: "AIzaSyAgHK6NF2UC2H7nEvDcvAwEzEN93Wtmi-4",
    authDomain: "contactmain-b302a.firebaseapp.com",
    databaseURL: "https://contactmain-b302a-default-rtdb.firebaseio.com",
    projectId: "contactmain-b302a",
    storageBucket: "contactmain-b302a.appspot.com",
    messagingSenderId: "388487649438",
    appId: "1:388487649438:web:7afb8297ebc80bf006038f"
  };
  
//Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for database
  var contactFormDB = firebase.database().ref("contactform2")

  document.getElementById('contactform2').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var email2 = getElementVal ('email2');


    saveMessages(email2);

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
  document.getElementById('contactform2').reset();

}
  const saveMessages = (email2) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        email2 : email2,
    })
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }