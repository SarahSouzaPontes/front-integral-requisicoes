const cepInput = document.querySelector('#cep');
const ufINPUT = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', function () {
    const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {

            ufINPUT.value = body.uf;
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        })
        console.log(promiseBody)
    });
    console.log(promiseResposta)
}); 