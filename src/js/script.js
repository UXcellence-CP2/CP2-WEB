let imagens =[
    "src/assets/img/audi horizontal.jpg",
    "src/assets/img/byd horizontal.jpg",
    "src/assets/img/porsche horizontal.jpg",
    "src/assets/img/tesla horizontal.jpg"
];

//DECLARANDO AS VARIAVEIS

let index =0;
let tempo =3000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){

    document.getElementById('image').src =imagens[index];
    index++;
    //VERIFICAR QUANTIDADE DE IMAGENS
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
//EXECUTA A FUNÇÃO
slideShow();