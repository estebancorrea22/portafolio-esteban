const form = document.querySelector('.form-container');
    form.addEventListener('submit', (event) => {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;   
          const message = document.getElementById('message').value;   
          if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return;   
      
          }
          if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres.');
            return;
          }
          form.submit();
    });