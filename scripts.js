const listImg = document.querySelectorAll('.botao-menu');

const trocaImg = (img)=>{
    const imagemStarbuck = document.querySelector('.starbucks');
    imagemStarbuck.src = img;
}

function trocaCor(cor){
    let circuloBackground = document.querySelector('.circulo');
    circuloBackground.style.background = cor
}

for(let posicao = 0; posicao < listImg.length; posicao++){
    const imgPosicao = listImg[posicao];
    imgPosicao.addEventListener('click', (evento)=>{
        const idImgEvent = evento.target.id;

        switch(idImgEvent){
            case 'thumb1':
                trocaImg('./img/img1.png');
                trocaCor('#017143');
                break;
            case 'thumb2':
                trocaImg('./img/img2.png');
                trocaCor('#eb7495');
                break;
            case 'thumb3':
                trocaImg('./img/img3.png');
                trocaCor('#d752b1');
                break;
        }
    })
}
