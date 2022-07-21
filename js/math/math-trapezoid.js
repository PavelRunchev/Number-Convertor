
document.querySelector('.trapezoid-operation-select').addEventListener('change', typeTrapezoidForm);

let trapezoidAreaFormula = document.querySelector('.trapezoid-area-formula');
let trapezoidPerimeterFormula = document.querySelector('.trapezoid-perimeter-formula');
let labelTrapezoidEnterInput = document.querySelector('.trapezoid-label-enter');
let trapezoidAreaInputs = document.querySelector('.trapezoid-area');
let trapezoidPerimeterInputs = document.querySelector('.trapezoid-perimeter');

let errorTrapezoidInput = document.querySelector('.error-inputs');
let resultTrapezoidInput = document.querySelector('.input-result-figure');

if(trapezoidAreaFormula == null || trapezoidPerimeterFormula == null 
    || labelTrapezoidEnterInput == null || trapezoidAreaInputs == null
    || trapezoidAreaFormula == null || errorTrapezoidInput == null
    || resultTrapezoidInput == null)
    ErrorDOMElement();

trapezoidPerimeterFormula.style.display = 'none';
trapezoidPerimeterInputs.style.display = 'none';

async function typeTrapezoidForm() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'trapezoid') {
        let typeOperationSelect = document.querySelector('.trapezoid-operation-select');
        if(typeOperationSelect == null)
            ErrorDOMElement();

        await hiddenElements('.trapezoid-inputs > div');
        await hiddenElements('.trapezoid-info > article');

        if(typeOperationSelect.value == 'area') {
            trapezoidAreaInputs.style.display = 'flex';
            trapezoidAreaFormula.style.display = 'block';
            labelTrapezoidEnterInput.innerHTML = 'Area enter:'
        } else if(typeOperationSelect.value == 'perimeter') {
            trapezoidPerimeterInputs.style.display = 'flex';
            trapezoidPerimeterFormula.style.display = 'block';
            labelTrapezoidEnterInput.innerHTML = 'Perimeter enter:'
        }

        errorTrapezoidInput.innerHTML = '';
        resultTrapezoidInput.value = '';
    }
}

function calcTrapezoidArea(a, b, h) {
    const area = ((Number(a) + Number(b)) / 2) * Number(h);
    return area.toFixed(2).replace(/\.*0+$/, '');
}

function calcTrapezoidPerimeter(a, b, c, d) {
    const perimeter = Number(a) + Number(b) + Number(c) + Number(d);
    return perimeter.toFixed(2).replace(/\.*0+$/, '');
}