$(document).ready(function() { //o $(document).ready() serve para quando quiser carregar o conteúdo antes da página carregar;
    $(window).scroll(function() { //método usado para rolar a janela para um local específico;
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky"); //estou recuperando a classe  .navbar e adicionando a classe stick (.navbar .sticky{});
        } else {
            $('.navbar').removeClass("sticky");
        } if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
        $('.scroll-up-btn').click(function () {
            $('html').animate({scrollTop: 0});
        });

        var typed = new Typed(".typing", { /*..essas instruções vão dar um efeito de escrever automaticamente na tela (efeito typing...)..*/
            strings:["Programmer","Web Developer"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });

        var typed = new Typed(".typing-2", { /*..essas instruções vão dar um efeito de escrever automaticamente na tela (efeito typing...)..*/
            strings:["Programmer","Web Developer"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });


    $('.menu-btn').click(function(){
        $('.navbar.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    $('.carousel').owlCarousel({ //essa função dá um efeito de "arrasta pro lado" que fica bem bonito e estiloso;
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