window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia el valor para ajustar cuándo se cambia el color
        header.style.backgroundColor = 'rgb(63, 47, 74)'; // Color con transparencia
    } else {
        header.style.backgroundColor = 'transparent'; // Vuelve a ser transparente
    }
});
