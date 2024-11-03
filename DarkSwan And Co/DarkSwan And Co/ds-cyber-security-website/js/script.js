document.addEventListener('DOMContentLoaded', function () {
    const textItems = ['sudo ./security', 'sudo ./safety', 'sudo ./profit']; // Your words
    const animatedTextContainer = document.getElementById('animatedText');
    let currentIndex = 0;

    function typeText(text) {
        const element = document.createElement('div'); 
        element.classList.add('text-item'); 
        animatedTextContainer.appendChild(element); 

        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent = text.substring(0, index + 1); 
                index++;
                setTimeout(type, 100); 
            } else {
                // Pause after typing is complete
                element.innerHTML = text + '<span class="blink">_</span>'; 
                setTimeout(() => {
                    eraseText(element, text.length); 
                }, 2000); 
            }
        }

        type(); 
    }

    function eraseText(element, length) {
        function erase() {
            if (length >= 0) {
                element.innerHTML = element.textContent.substring(0, length) + '<span class="blink">_</span>';
                length--; 
                setTimeout(erase, 100);
            } else {
                
                animatedTextContainer.removeChild(element);
                currentIndex = (currentIndex + 1) % textItems.length; 
                typeText(textItems[currentIndex]); 
            }
        }

        erase(); // Start erasing
    }

    
    typeText(textItems[currentIndex]);
});



function toggleMenu() {
    const navIcon = document.getElementById('nav-icon1');
    const menu = document.getElementById('menu');
    
    
    navIcon.classList.toggle('open');

    
    menu.classList.toggle('show');
}
