
//factorial
document.querySelector('.btn-factorial-calculate').addEventListener('click', factorial);
document.querySelector('.code-factorial').innerHTML = `<pre>${codeFactorial}</pre`;

function factorial(e) {
    let input = document.querySelector('.input-factorial-number');
    let result = document.querySelector('.input-factorial-result');

    if(input == null || result == null) {
        throw new Error('Missing DOM Element!')
    }

    const n = Number(input.value);
    let fact = 1;
    for (let i = 1; i < n; i++) {
        fact += fact * i;
    }

    result.value = fact;
    input.value = '';
}