$(document).ready(function() { //o $(document).ready() serve para quando quiser carregar o conteúdo antes da página carregar;
    $(window).scroll(function() { //método usado para rolar a janela para um local específico;
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky"); //estou recuperando a classe  .navbar e adicionando a classe stick (.navbar .sticky{});
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
});