document.addEventListener('DOMContentLoaded', function () {
    // Menü öğeleri
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.parca-card');

    // Menü öğelerine tıklama olayları ekleniyor
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelectorAll('.satin-al-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const searchQuery = button.getAttribute('data-search');
                    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}&tbm=shop`;
                    window.open(googleSearchUrl, '_blank');
                });
            });

            // Önce tüm kartları gizle
            sections.forEach(section => section.classList.remove('active')); // active sınıfını kaldır

            // Tıklanan menü öğesine karşılık gelen kartı göster
            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            targetSection.classList.add('active'); // active sınıfını ekle
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
                
            });
        });
    });
});
