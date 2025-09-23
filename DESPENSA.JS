// Efecto de desplazamiento suave para los enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Funcionalidad para añadir al carrito
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const countElement = document.querySelector('.cart-count');
                let count = parseInt(countElement.textContent);
                count++;
                countElement.textContent = count;
                
                // Efecto visual
                const originalText = this.textContent;
                this.innerHTML = '<i class="fas fa-check"></i> Añadido';
                this.style.background = '#27ae60';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 2000);
            });
        });
        
        // Funcionalidad para favoritos
        document.querySelectorAll('.favorite-btn').forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.style.color = '#e74c3c';
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.style.color = '#ddd';
                }
            });
        });
        
        // Funcionalidad para el formulario
        document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`¡Gracias por suscribirte con ${email}! Pronto recibirás nuestras ofertas.`);
            this.reset();
        });