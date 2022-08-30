function exibir (id) {
    document.getElementById(id).style.opacity = '75%'
    if (id === 'DescTres'){
        document.getElementById('but4').style.opacity = '100%'
    }
}

function plus (but) {
    document.getElementById(but).style.opacity = '100%';
}

function esconder (botão2, botão3, desc1, desc2, desc3) {
    document.getElementById(botão2).style.opacity = '0%';
    document.getElementById(botão3).style.opacity = '0%';
    document.getElementById(desc1).style.opacity = '0%';
    document.getElementById(desc2).style.opacity = '0%';
    document.getElementById(desc3).style.opacity = '0%';
    document.getElementById('but4').style.opacity = '0%';
}