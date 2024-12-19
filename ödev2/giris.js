// Şifreyi gizle ve göster butonunu kontrol etme
document.getElementById('toggle-sifre').addEventListener('click', function() {
    var sifreInput = document.getElementById('sifre');
    var toggleBtn = document.getElementById('toggle-sifre');

    if (sifreInput.type === "password") {
        sifreInput.type = "text";
        toggleBtn.textContent = "Gizle";
    } else {
        sifreInput.type = "password";
        toggleBtn.textContent = "Göster";
    }
});
