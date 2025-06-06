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

function slideShow(){

    document.getElementById('image').src =imagens[index];
    index++;
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();