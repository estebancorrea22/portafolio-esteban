const btnVolverArriba = document.getElementById('btn-volver-arriba');
        
        window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
            btnVolverArriba.style.display = 'block';
          } else {
            btnVolverArriba.style.display = 'none';
          }
        });
        
        btnVolverArriba.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });