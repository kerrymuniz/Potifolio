$(document).ready(function() { //o $(document).ready() serve para quando quiser carregar o conteúdo antes da página carregar;
    $(window).scroll(function() { //método usado para rolar a janela para um local específico;
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky"); //estou recuperando a classe  .navbar e adicionando a classe stick (.navbar .sticky{});
        } else {
            $('.navbar').removeClass("sticky");
        }
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