function aparecer (almi) {
    document.getElementById(almi).style.opacity = '100%';
    document.getElementById(almi).style.transition = '1s';
}

function sumir (almi) {
    document.getElementById(almi).style.opacity = '0%';
    document.getElementById(almi).style.transition = '0.2s';
}