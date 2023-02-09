$(document).ready(function () {
    $('#carousel-imagens').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true
});
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor insira seu nome completo",
            endereco: "Por favor insira o endereco completo"
        },
        
            
        

        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo =$(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo)
        $('html').animate({
            scrollTop: destino.offset().top
        },1500)
    })

})