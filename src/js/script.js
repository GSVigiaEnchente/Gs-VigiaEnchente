class MobileNavbar{
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  } 

  animateLinks() {
      this.navLinks.forEach((link, index) => {
          link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`);
      });
  }

  handleClick(){
      this.navList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass)
      this.animateLinks();
  }

  addClickEvent(){
      this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
      if(this.mobileMenu){
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

let imagens =[
  'src/assets/enchente1.jpg',
  'src/assets/enchente2.jpg',
  'src/assets/enchente3.png',  
  'src/assets/enchente4.jpg',
];

let index =0;
let tempo =3000;

function slideShow() {
  const img = document.getElementById('image');
  if (!img) return; // Só executa se existir o elemento
  img.src = imagens[index];
  index++;
  if (index == imagens.length) {
      index = 0;
  }
  setTimeout(slideShow, tempo);
}
slideShow();

document.addEventListener('DOMContentLoaded', function () {
  // Aplica o tema salvo, se houver
  const savedTheme = localStorage.getItem('selected-theme') || 'light';
  
  // Remove classes existentes
  document.body.classList.remove('theme-dark', 'theme-solarized');

  // Adiciona classe somente se for diferente de light
  if (savedTheme !== 'light') {
      document.body.classList.add('theme-' + savedTheme);
  }

  document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.addEventListener('click', function () {
          document.body.classList.remove('theme-dark', 'theme-solarized');
          if (this.dataset.theme !== 'light') {
              document.body.classList.add('theme-' + this.dataset.theme);
          }
          localStorage.setItem('selected-theme', this.dataset.theme);
      });
  });
});

// Quiz
function iniciarQuiz(){
  corretas = 0;

  var resposta1 = prompt(`Qual é uma das principais causas das enchentes?\n1. Falta de vegetação\n2. Altas temperaturas\n3. Neve acumulada\n4. Raios solares`);
  while (resposta1 == "" || resposta1 >= 5 || resposta1 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta1 = prompt(`Qual é uma das principais causas das enchentes?\n1. Falta de vegetação\n2. Altas temperaturas\n3. Neve acumulada\n4. Raios solares`);
  }
  if (resposta1 === "1" || resposta1.toLowerCase() === "falta de vegetação") {
      corretas++;
  }

  var resposta2 = prompt(`O que acontece quando bueiros ficam entupidos?\n1.Ajuda no escoamento, 2.Evita enchentes, 3.Causa alagamentos, 4.Resfria o solo`);
  while (resposta2 == "" || resposta2 >= 5 || resposta2 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta2 = prompt(`O que acontece quando bueiros ficam entupidos?\n1.Ajuda no escoamento, 2.Evita enchentes, 3.Causa alagamentos, 4.Resfria o solo`);
  }
  if (resposta2 == "causa alagamentos".toUpperCase() || resposta2 == 3) {
      corretas++;
  }

  var resposta3 = prompt(`Qual estação é mais propensa a enchentes no Brasil?\n1.Inverno, 2.Verão, 3.Primavera, 4.Outono`);
  while (resposta3 == "" || resposta3 >= 5 || resposta3 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta3 = prompt(`Qual estação é mais propensa a enchentes no Brasil?\n1.Inverno, 2.Verão, 3.Primavera, 4.Outono`);
  }
  if (resposta3 == "verao".toUpperCase() || resposta3 == 2){
      corretas++;
  }

  var resposta4 = prompt(`O que o desmatamento contribui nas enchentes?\n1.Reduz a erosão, 2.Aumenta absorção de água, 3.Aumenta risco de enchentes, 4.Melhora o clima`);
  while (resposta4 == "" || resposta4 >= 5 || resposta4 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta4 = prompt(`O que o desmatamento contribui nas enchentes?\n1.Reduz a erosão, 2.Aumenta absorção de água, 3.Aumenta risco de enchentes, 4.Melhora o clima`);
  }
  if (resposta4 == "aumenta risco de enchentes".toUpperCase() || resposta4 == 3){
      corretas++;
  }

  var resposta5 = prompt(`O lixo jogado nas ruas pode...\n1.Ajudar a drenar a água, 2.Decompor rapidamente, 3.Obstruir sistemas de drenagem, 4.Evitar enchentes`);
  while (resposta5 == "" || resposta5 >= 5 || resposta5 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta5 = prompt(`O lixo jogado nas ruas pode...\n1.Ajudar a drenar a água, 2.Decompor rapidamente, 3.Obstruir sistemas de drenagem, 4.Evitar enchentes`);
  }
  if (resposta5 == "obstruir sistemas de drenagem".toUpperCase() || resposta5 == 3){
      corretas++;
  }

  var resposta6 = prompt(`A impermeabilização do solo acontece quando...\n1.O solo é coberto por vegetação, 2.Água penetra com facilidade, 3.Há muito asfalto e concreto, 4.Chove pouco`);
  while (resposta6 == "" || resposta6 >= 5 || resposta6 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta6 = prompt(`A impermeabilização do solo acontece quando...\n1.O solo é coberto por vegetação, 2.Água penetra com facilidade, 3.Há muito asfalto e concreto, 4.Chove pouco`);
  }
  if (resposta6 == "ha muito asfalto e concreto".toUpperCase() || resposta6 == 3){
      corretas++;
  }

  var resposta7 = prompt(`Qual estrutura urbana ajuda a prevenir enchentes?\n1.Poços artesianos, 2.Sistemas de drenagem, 3.Prédios altos, 4.Estádios de futebol`);
  while (resposta7 == "" || resposta7 >= 5 || resposta7 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta7 = prompt(`Qual estrutura urbana ajuda a prevenir enchentes?\n1.Poços artesianos, 2.Sistemas de drenagem, 3.Prédios altos, 4.Estádios de futebol`);
  }
  if (resposta7 == "sistemas de drenagem".toUpperCase() || resposta7 == 2){
      corretas++;
  }

  var resposta8 = prompt(`Qual atitude reduz enchentes?\n1.Cortar árvores, 2.Jogar lixo na rua, 3.Evitar reciclagem, 4.Não entupir bueiros`);
  while (resposta8 == "" || resposta8 >= 5 || resposta8 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta8 = prompt(`Qual atitude reduz enchentes?\n1.Cortar árvores, 2.Jogar lixo na rua, 3.Evitar reciclagem, 4.Não entupir bueiros`);
  }
  if (resposta8 == "nao entupir bueiros".toUpperCase() || resposta8 == 4){
      corretas++;
  }

  var resposta9 = prompt(`A ocupação irregular de encostas pode...\n1.Reduzir enchentes, 2.Melhorar a drenagem, 3.Causar deslizamentos e alagamentos, 4.Proteger rios`);
  while (resposta9 == "" || resposta9 >= 5 || resposta9 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta9 = prompt(`A ocupação irregular de encostas pode...\n1.Reduzir enchentes, 2.Melhorar a drenagem, 3.Causar deslizamentos e alagamentos, 4.Proteger rios`);
  }
  if (resposta9 == "causar deslizamentos e alagamentos".toUpperCase() || resposta9 == 3){
      corretas++;
  }

  var resposta10 = prompt(`Um efeito das enchentes é...\n1.Aumento da umidade benéfica, 2.Falta de eletricidade, 3.Menos erosão, 4.Crescimento de florestas`);
  while (resposta10 == "" || resposta10 >= 5 || resposta10 <= 0){
      alert("Resposta não encontrada, responda novamente")
      var resposta10 = prompt(`Um efeito das enchentes é...\n1.Aumento da umidade benéfica, 2.Falta de eletricidade, 3.Menos erosão, 4.Crescimento de florestas`);
  }
  if (resposta10 == "falta de eletricidade".toUpperCase() || resposta10 == 2){
      corretas++;
  }

  alert("Quiz finalizado, veja sua pontuação no console!")
  console.log(`Você acertou ${corretas} questões`);  
}