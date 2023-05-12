const usuarios = [
    {
        usuario: 'carlos@carlos.com',
        senha:'carlos123456'
    },
    {
        usuario: 'leticia@leticia.com',
        senha:'leticia654321'
    },
    {
        usuario: 'bruno@bruno.com',
        senha:'bruno987654'
    },
]
const fotografia = [
    {
        nome: 'Foto1',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto2',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto3',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto4',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto5',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto6',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto7',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto8',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto9',
        like: 0,
        deslike: 0,
    },
    
]

const likeIcon = document.querySelector('#likeFill1');
const deslikeIcon = document.querySelector('#deslikeFill1');
const countersL = document.querySelector('#couverLike1');
const countersD = document.querySelector('#couverDeslike1');
let counterL = 20;
let counterD = 0;

likeIcon.addEventListener("click", () => {
    countersL.innerHTML = ++counterL 
});

deslikeIcon.addEventListener("click", () => {
    countersD.innerHTML = ++counterD
});

const likeIcon1 = document.querySelector('#likeFill2');
const deslikeIcon1 = document.querySelector('#deslikeFill2');
const countersL1 = document.querySelector('#couverLike2');
const countersD1 = document.querySelector('#couverDeslike2');
let counterL1 = 4;
let counterD1 = 1;

likeIcon1.addEventListener("click", () => {
    countersL1.innerHTML = ++counterL1 
});

deslikeIcon1.addEventListener("click", () => {
    countersD1.innerHTML = ++counterD1
});



const likeIcon2 = document.querySelector('#likeFill3');
const deslikeIcon2 = document.querySelector('#deslikeFill3');
const countersL2 = document.querySelector('#couverLike3');
const countersD2 = document.querySelector('#couverDeslike3');
let counterL2 = 10;
let counterD2 = 0;

likeIcon2.addEventListener("click", () => {
    countersL2.innerHTML = ++counterL2 
});

deslikeIcon2.addEventListener("click", () => {
    countersD2.innerHTML = ++counterD2
});


const likeIcon3 = document.querySelector('#likeFill4');
const deslikeIcon3 = document.querySelector('#deslikeFill4');
const countersL3 = document.querySelector('#couverLike4');
const countersD3 = document.querySelector('#couverDeslike4');
let counterL3 = 11;
let counterD3 = 0;

likeIcon3.addEventListener("click", () => {
    countersL3.innerHTML = ++counterL3 
});

deslikeIcon3.addEventListener("click", () => {
    countersD3.innerHTML = ++counterD3
});


const likeIcon4 = document.querySelector('#likeFill5');
const deslikeIcon4 = document.querySelector('#deslikeFill5');
const countersL4 = document.querySelector('#couverLike5');
const countersD4 = document.querySelector('#couverDeslike5');
let counterL4 = 12;
let counterD4 = 0;

likeIcon4.addEventListener("click", () => {
    countersL4.innerHTML = ++counterL4 
});

deslikeIcon4.addEventListener("click", () => {
    countersD4.innerHTML = ++counterD4
});


const likeIcon5 = document.querySelector('#likeFill6');
const deslikeIcon5 = document.querySelector('#deslikeFill6');
const countersL5 = document.querySelector('#couverLike6');
const countersD5 = document.querySelector('#couverDeslike6');
let counterL5 = 8;
let counterD5 = 0;

likeIcon5.addEventListener("click", () => {
    countersL5.innerHTML = ++counterL5 
});

deslikeIcon5.addEventListener("click", () => {
    countersD5.innerHTML = ++counterD5
});


const likeIcon6 = document.querySelector('#likeFill7');
const deslikeIcon6 = document.querySelector('#deslikeFill7');
const countersL6 = document.querySelector('#couverLike7');
const countersD6 = document.querySelector('#couverDeslike7');
let counterL6 = 20;
let counterD6 = 0;

likeIcon6.addEventListener("click", () => {
    countersL6.innerHTML = ++counterL6 
});

deslikeIcon6.addEventListener("click", () => {
    countersD6.innerHTML = ++counterD6
});


const likeIcon7 = document.querySelector('#likeFill8');
const deslikeIcon7 = document.querySelector('#deslikeFill8');
const countersL7 = document.querySelector('#couverLike8');
const countersD7 = document.querySelector('#couverDeslike8');
let counterL7 = 20;
let counterD7 = 0;

likeIcon7.addEventListener("click", () => {
    countersL7.innerHTML = ++counterL7
});

deslikeIcon7.addEventListener("click", () => {
    countersD7.innerHTML = ++counterD7
});


const likeIcon8 = document.querySelector('#likeFill9');
const deslikeIcon8 = document.querySelector('#deslikeFill9');
const countersL8 = document.querySelector('#couverLike9');
const countersD8 = document.querySelector('#couverDeslike9');
let counterL8 = 20;
let counterD8 = 0;

likeIcon8.addEventListener("click", () => {
    countersL8.innerHTML = ++counterL8 
});

deslikeIcon8.addEventListener("click", () => {
    countersD8.innerHTML = ++counterD8
});