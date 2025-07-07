const cupomBtn = document.getElementById("gerar-cupom-btn");

if (cupomBtn) {
    cupomBtn.addEventListener('click', function(event) {
        
        event.preventDefault();

        const codigoAleatorio = Date.now().toString().slice(-5); 
        const codigoFinal = "INVERNO" + codigoAleatorio;

        const cupomElemento = document.createElement('div');
        cupomElemento.className = 'cupom-gerado';
        cupomElemento.textContent = `Seu cupom: ${codigoFinal}`;

        cupomBtn.replaceWith(cupomElemento);
    });
}

function criarBotaoWhatsApp() {
    const whatsappLink = document.createElement('a');

    whatsappLink.id = 'whatsapp-float-button';
    whatsappLink.href = 'https://wa.me/5555999259767?text=Olá!+Vim+pelo+site.';
    whatsappLink.target = '_blank';
    const whatsappImage = document.createElement('img');
    
    whatsappImage.src = 'img/logowpp.png';
    whatsappImage.alt = 'Fale Conosco pelo WhatsApp';

    whatsappLink.appendChild(whatsappImage);
    document.body.appendChild(whatsappLink);
}

criarBotaoWhatsApp();