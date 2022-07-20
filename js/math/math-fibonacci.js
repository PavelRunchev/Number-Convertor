//fibonacci
document.querySelector('.btn-fibonacci-calculate').addEventListener('click', fibonacci);
document.querySelector('.code-fibonacci').innerHTML = `<pre>${codeFibonacci}</pre`;

function fibonacci(e) {
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