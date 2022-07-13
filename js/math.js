
document.querySelector('.btn-factorial-calculate').addEventListener('click', factorial);
document.querySelector('.btn-fibonacci-calculate').addEventListener('click', fibonacci);

function factorial(e) {
    e.preventDefault();
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

function fibonacci(e) {
    e.preventDefault();
    let input = document.querySelector('.input-fibonacci-number');
    let result = document.querySelector('.input-fibonacci-result');

    if(input == null || result == null) {
        throw new Error('Missing DOM Element!')
    }

    const n = Number(input.value);
    if(n < 1) {
        result.value = n;
        return;
    }
    
    let fn = n;
    let F0 = 0;
    let F1 = 1;

    for (let i = 2; i <= n; i++) {
        fn = F0 + F1;
        F0 = F1;
        F1 = fn;
    }

    result.value = F1;
}
