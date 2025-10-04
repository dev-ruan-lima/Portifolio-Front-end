        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });

        const animateElements = document.querySelectorAll('.animate');
        
        function checkScroll() {
            const triggerBottom = window.innerHeight * 0.8;
            
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < triggerBottom) {
                    element.classList.add('active');
                }
            });
        }
        
 
        window.addEventListener('load', checkScroll);
        window.addEventListener('scroll', checkScroll);

        const testimonials = document.querySelectorAll('.testimonial');
        const controls = document.querySelectorAll('.testimonial-control');
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            controls.forEach(control => control.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            controls[index].classList.add('active');
            currentTestimonial = index;
        }
 
        controls.forEach((control, index) => {
            control.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
        
  
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);


        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
  
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });

 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, 
                        behavior: 'smooth'
                    });
                }
            });
        });


        function openWhatsApp(message = 'Olá, gostaria de mais informações sobre os serviços da DentalCare') {

            const encodedMessage = encodeURIComponent(message);

            const phoneNumber = '551134567890';
  
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        }

        function sendViaWhatsApp() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (!name || !phone || !service || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            const fullMessage = `Olá, me chamo ${name}. Gostaria de informações sobre ${service}. 
Telefone: ${phone}
Email: ${email}
Mensagem: ${message}`;
            
            openWhatsApp(fullMessage);
        }

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('whatsappFloat').classList.add('visible');
            }, 3000);

        });
