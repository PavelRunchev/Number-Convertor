

const api = "https://api.exchangerate-api.com/v4/latest/USD";
const servicesCurrencies = [ "USD" , "EUR", "GBP"];
let data;
getData();

function ErrorDOMElement() {
    throw new Error('Missing DOM Element!');
}

async function getData() {
    let loading = document.querySelector('.currency-live-loading-img');
    let mainCurrencyLive = document.querySelector('.container-main-currency-live');

    let selectFromCurrency = document.querySelector('.form-select-from-currency');
    let selectToCurrency = document.querySelector('.form-select-to-currency');

    let spanUSDLiveCurrency = document.querySelector('.usd-live-currency');
    let spanEUROLiveCurrency = document.querySelector('.euro-live-currency');
    let spanPoundLiveCurrency = document.querySelector('.pound-live-currency');
    let spanRubleLiveCurrency = document.querySelector('.ruble-live-currency');
    let spanLevLiveCurrency = document.querySelector('.lev-live-currency');
    let spanLiraLiveCurrency = document.querySelector('.turkey-lira-live-currency');
    let spanYenaLiveCurrency = document.querySelector('.yena-live-currency');
    let spanYuanLiveCurrency = document.querySelector('.yuan-live-currency');

    if(loading == null || mainCurrencyLive == null 
        || selectFromCurrency == null || selectToCurrency == null 
        || spanUSDLiveCurrency == null || spanEUROLiveCurrency == null 
        || spanPoundLiveCurrency== null || spanRubleLiveCurrency == null 
        || spanLevLiveCurrency == null || spanLiraLiveCurrency == null 
        || spanYenaLiveCurrency == null || spanYuanLiveCurrency == null) {
            ErrorDOMElement();
        }

    data = await fetch(`${api}`).then(res => res.json());
    if(data == undefined) {
        throw new Error('No data currency live!');
    }

    //loading select From and To currency
    selectFromCurrency.innerHTML = setCurrencyOptions(data.rates);
    selectToCurrency.innerHTML = setCurrencyOptions(data.rates);

    spanUSDLiveCurrency.innerHTML = data.rates['USD'].toFixed(3);
    spanEUROLiveCurrency.innerHTML = data.rates['EUR'].toFixed(3);
    spanPoundLiveCurrency.innerHTML = data.rates['GBP'].toFixed(3);
    spanRubleLiveCurrency.innerHTML = data.rates['RUB'].toFixed(3);
    spanLevLiveCurrency.innerHTML = data.rates['BGN'].toFixed(3);
    spanLiraLiveCurrency.innerHTML = data.rates['TRY'].toFixed(3);
    spanYenaLiveCurrency.innerHTML = data.rates['JPY'].toFixed(3);
    spanYuanLiveCurrency.innerHTML = data.rates['CNY'].toFixed(3);
    loading.style.display = "none";
    mainCurrencyLive.style.display = "block";

    function setCurrencyOptions(curObj) {
        return Object.keys(curObj).map(key => {
            return `<option value=${key}>${key}</option>`
        });
    }
}

document.querySelector('.btn-convert-currency').addEventListener('click', convertCurrency);

function convertCurrency(e) {
    e.preventDefault();
    let result = document.querySelector('.input-result-currency');
    let divCurrencyResult = document.querySelector('.currensy-result');
    let amount = Number(document.querySelector('.input-amount-currency').value);
    let selectFromCurrency = document.querySelector('.form-select-from-currency');
    let selectToCurrency = document.querySelector('.form-select-to-currency');

    let val = (data.rates[selectToCurrency.value] / data.rates[selectFromCurrency.value]) * amount;
    

    result.value = val.toFixed(3);
    const textCurrencyResult = `${amount} ${selectFromCurrency.value} = ${val.toFixed(3)} ${selectToCurrency.value}`
        + `\n1 ${selectFromCurrency.value} = ${(data.rates[selectToCurrency.value] / data.rates[selectFromCurrency.value]).toFixed(3)} ${selectToCurrency.value}` 
        + `\n1 ${selectToCurrency.value} = ${(data.rates[selectFromCurrency.value] / data.rates[selectToCurrency.value]).toFixed(3)} ${selectFromCurrency.value}`;
    divCurrencyResult.innerHTML = `<pre>${textCurrencyResult}</pre>`;

}








