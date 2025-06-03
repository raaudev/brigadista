// Script para funcionalidades da landing page

document.addEventListener('DOMContentLoaded', function() {
    // Animação suave de scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar efeito de hover nos cards da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Configurar botão de inscrição para abrir WhatsApp
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.open('https://wa.me/5575992551218?text=Olá,%20tenho%20interesse%20no%20curso%20de%20Brigadista%20e%20gostaria%20de%20me%20inscrever', '_blank');
        });
    }

    // Adicionar efeito de destaque ao rolar para seções
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    }
    
    // Inicializar seções com opacidade reduzida
    sections.forEach(section => {
        section.style.opacity = '0.7';
        section.style.transform = 'translateY(20px)';
    });
    
    // Verificar posição inicial e adicionar evento de scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
