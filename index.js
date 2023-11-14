document.getElementById(document).ready(function() { //o $(document).ready() serve para quando quiser carregar o conteúdo antes da página carregar;
    document.getElementById(window).scroll(function() { //método usado para rolar a janela para um local específico;
        if(this.scrollY > 20) {
            document.getElementById('.navbar').addClass("sticky"); //estou recuperando a classe  .navbar e adicionando a classe stick (.navbar .sticky{});
        } else {
            document.getElementById('.navbar').removeClass("sticky");
        } if(this.scrollY > 500) {
            document.getElementById('.scroll-up-btn').addClass("show");
        } else {
            document.getElementById('.scroll-up-btn').removeClass("show");
        }
    });
    document.getElementById('.scroll-up-btn').click(function () {
        document.getElementById('html').animate({scrollTop: 0});
        });

        var typed = new Typed(".typing", { /*..essas instruções vão dar um efeito de escrever automaticamente na tela (efeito typing...)..*/
            strings:["Programador","Desenvolvedor","Web Developer"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });

        var typed = new Typed(".typing-2", { /*..essas instruções vão dar um efeito de escrever automaticamente na tela (efeito typing...)..*/
            strings:["Programador","Desenvolvedor","Web Developer"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });


        document.getElementById('.menu-btn').click(function(){
            document.getElementById('.navbar.menu').toggleClass("active");
            document.getElementById('.menu-btn i').toggleClass("active");
    });
    
    document.getElementById('.carousel').owlCarousel({ //essa função dá um efeito de "arrasta pro lado" que fica bem bonito e estiloso;
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPouser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});