function toggleFAQ() {
    const faqSection = document.getElementById('faq');
    if (faqSection.classList.contains('show')) {
        faqSection.classList.remove('show');
        document.getElementById('faqButton').innerText = 'Mostrar preguntas frecuentes';
    } else {
        faqSection.classList.add('show');
        document.getElementById('faqButton').innerText = 'Ocultar preguntas frecuentes';
    }
}

let slideIndex = 0;
    let slider;

    document.addEventListener('DOMContentLoaded', () => {
        slider = document.querySelector('.slider');
        mostrarSlide(slideIndex);
    });

    function mostrarSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function moverSlide(n) {
        const totalSlides = document.querySelectorAll('.slide').length;
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        mostrarSlide(slideIndex);
    }

    function toggleFAQ() {
        const faq = document.getElementById('faq');
        faq.style.display = faq.style.display === 'none' ? 'block' : 'none';
    }


