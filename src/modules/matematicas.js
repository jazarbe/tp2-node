const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

const pi = 3.14159;

export  {
    sumar,
    restar,
    multiplicar,
    dividir,
    pi
};