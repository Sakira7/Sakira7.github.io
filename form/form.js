
(function(){
    emailjs.init({
    publicKey: "KxAGafE4IBMV4QZ67",
    });
})();
    
    emailjs.sendForm('contact_service', 'template', '#myform').then(
  (response) => {
    alert('SUCCESS!', response.status, response.text);
  },
  (error) => {
    alert('FAILED...', error);
  },
);
