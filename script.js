
window.addEventListener('load', () => {
    console.log("%c N527 STUDIOS %c System Initialized", 
                "color: white; background: black; font-weight: bold; font-size: 20px;", 
                "color: gray;");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});