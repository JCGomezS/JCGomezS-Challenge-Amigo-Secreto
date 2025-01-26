// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nominaAmigos=[];
let numeroAmigos = 0;
let maximoAmigos = 10;
let nuevoAmigo = '';


function condicionesIniciales() {
    nuevoAmigo = '';
    numeroAmigos = 0;
    nominaAmigos = [];
    console.log(numeroAmigos);
    console.log(maximoAmigos);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    nuevoAmigo = '';
}

function agregarAmigo() {
    nuevoAmigo = document.getElementById('amigo').value;

    maximoAmigos = 10;

    if (numeroAmigos == maximoAmigos)
        {
        // Ya ingresó el máximo de amigos //
        console.log(numeroAmigos);
        console.log(maximoAmigos);    
        alert('Ya ingresó el máximo de ' + maximoAmigos + ' amigos');
        limpiarCaja();
        return;
    }

    if (nuevoAmigo == '')
        {
        // No ingresó un amigo //
        console.log('No ingresó un amigo');
        document.querySelector('#listaAmigos').value = 'No ingresó un amigo';
        alert('No ingresó un amigo');
        }
        else
            {
            if (nominaAmigos.includes(nuevoAmigo))
                {
                // Ingresó un amigo repetido //
                console.log('Este amigo ya lo ingresaste');
                alert('Este amigo ya lo ingresaste');
               }
            else
            {
                // Ingresó un amigo nuevo //
                nominaAmigos.push(nuevoAmigo);
                console.log('Ingresó un nuevo amigo');
                // alert('Ingresó un nuevo amigo'); //
                numeroAmigos++;
                console.log(numeroAmigos);
                mostarAmigos();
            }

            limpiarCaja();
            }
    return;
}

function mostarAmigos() {
    console.log('Entró a mostrar amigos: ' + numeroAmigos);
    let texto = '';
    for (let contadorAmigos = 0; contadorAmigos < nominaAmigos.length; contadorAmigos++)
    {
        console.log(contadorAmigos);
        console.log(nominaAmigos[contadorAmigos]);
        texto = texto + '<li>'+nominaAmigos[contadorAmigos]+'</li>';
    }
        console.log(texto);
        document.getElementById('listaAmigos').innerHTML = texto;
    }

function sortearAmigo() {
    let contadorAmigos = nominaAmigos.length;
    console.log('Cantidad de amigos: ' + contadorAmigos);
    let indiceSorteado =  Math.floor(Math.random() * contadorAmigos) + 1;
    let amigoSorteado = nominaAmigos[indiceSorteado -1]
    console.log('amigoSorteado: ' + amigoSorteado);
    // alert('Ahora va a anunciar el amigo sorteado');
    document.querySelector('#listaAmigos').amigoSorteado = '';
    document.getElementById('listaAmigos').innerHTML = amigoSorteado;
    // document.getElementById('resultado').innerHTML = amigoSorteado; //
    // document.querySelector('#resultado').value = amigoSorteado; //
    condicionesIniciales();
}

condicionesIniciales();
