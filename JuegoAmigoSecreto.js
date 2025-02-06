// Nombres de los amigos
let amigos = [];

// Pedir 5 nombres al usuario
for (let i = 0; i < 5; i++)
{
    let nombre = prompt(`Ingresa el nombre del amigo ${i + 1}:`);
    amigos.push(nombre);
}

// Elegir amigo secreto al Azar
let indiceAleatorio = Math.floor(Math.random() * amigos.length);

console.log(`El amigo secreto es: ${amigos[indiceAleatorio]}`);