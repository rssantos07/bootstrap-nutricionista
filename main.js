$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

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
            }
        },
        messages: {
            nome: "Por favor insira seu nome completo",
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

 
})