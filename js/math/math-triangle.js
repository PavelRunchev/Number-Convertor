
//
//math-triangle.js must be import before math.js in HTML!!!
//

document.querySelector('.triangle-formula-select').addEventListener('change', typeTriangleFormula);

function ErrorDOMElement() {
    throw new Error('Missing DOM Element!');
}

let triangleFormulaSelect = document.querySelector('.triangle-formula');
let triangleArea = document.querySelector('.triangle-area');
let trianglePerimeter = document.querySelector('.triangle-perimeter');
let inputsByBaseAndHeight = document.querySelector('.by-base-and-height');
let inputsByHeronsFormula = document.querySelector('.by-herons-formula');
let inputsByAngle = document.querySelector('.by-sides-and-angle');


let errorTriangleInput = document.querySelector('.error-inputs');
let resultTriangleInput = document.querySelector('.input-result-figure');

if(triangleFormulaSelect == null || triangleArea == null || trianglePerimeter == null
    || inputsByBaseAndHeight == null || inputsByHeronsFormula == null
    || inputsByAngle == null)
        ErrorDOMElement();

inputsByHeronsFormula.style.display = 'none';
inputsByAngle.style.display = 'none';

function hiddenElements(selector) {
    Array.from(document.querySelectorAll(`${selector}`))
    .map(el => el.style.display = 'none');
}

async function typeTriangleFormula() {
    let triangleFormulaSelect = document.querySelector('.triangle-formula-select');

    if(triangleFormulaSelect == null || errorTriangleInput == null 
        || resultTriangleInput == null)
        ErrorDOMElement();
        
    await hiddenElements('.traingle-inputs > div');
    await hiddenElements('.triangle-area > section');
   
    if(triangleFormulaSelect.value == 'area-base-height') {
        inputsByBaseAndHeight.style.display = 'flex';
        document.querySelector('.triangle-area-formula-base-and-height').style.display = 'block';
    } else if(triangleFormulaSelect.value == 'herons-formula') {
        inputsByHeronsFormula.style.display = 'flex';
        document.querySelector('.triangle-area-herons-formula').style.display = 'block';
    } else if(triangleFormulaSelect.value == 'area-sides-and-angle') {
        inputsByAngle.style.display = 'flex';
        document.querySelector('.triangle-area-with-angle-formula').style.display = 'block';
    }

    errorTriangleInput.innerHTML = '';
    resultTriangleInput.value = '';
}

async function operationSelect() {
    let typeFigure = document.querySelector('.type-figure');
    if(typeFigure == null)
        ErrorDOMElement(); 
   
    //change to triangle figure.
    if(typeFigure.value == 'triangle') {
        let triangleOperationOption = document.querySelector('.triangle-operation-select');
        let triangleFormulaSelect = document.querySelector('.triangle-formula');
        let triangleArea = document.querySelector('.triangle-area');
        let trianglePerimeter = document.querySelector('.triangle-perimeter');
        let inputsByBaseAndHeight = document.querySelector('.by-base-and-height');
        let inputsByHeronsFormula = document.querySelector('.by-herons-formula');
        let labelEnter = document.querySelector('.triangle-label-enter');

        if(triangleOperationOption == null || triangleFormulaSelect == null || triangleArea == null 
            || trianglePerimeter == null || inputsByBaseAndHeight == null 
            || inputsByHeronsFormula == null || labelEnter == null)
            ErrorDOMElement();
        
        await hiddenElements('.triangle-info > article');
        await hiddenElements('.traingle-inputs > div');

        if(triangleOperationOption.value == 'area') {
            triangleArea.style.display = 'block';
            triangleFormulaSelect.style.display = 'block';
            inputsByBaseAndHeight.style.display = 'flex';
            labelEnter.innerHTML = 'Enter Area:';
        } else if(triangleOperationOption.value == 'perimeter') {
            trianglePerimeter.style.display = 'block';
            triangleFormulaSelect.style.display = 'none';
            inputsByHeronsFormula.style.display = 'flex';
            labelEnter.innerHTML = 'Enter Perimeter:';
        }
    }
}

function checkNumberIsInteger(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n));
}

function calcTriangleAreaByBaseAndHeight(base, height) {
    const area = (Number(base) * Number(height)) / 2;
    return area.toFixed(2).replace(/0+$/, '');
}

function calcTriangleAreaByHeronsFormula(a, b, c) {
    //semiPerimeter
    const s = (Number(a) + Number(b) + Number(c)) / 2;
    const area = Math.sqrt(s * (s - Number(a)) * (s - Number(b)) * (s - Number(c)));
    return area.toFixed(2).replace(/0+$/, '');
}

function calcTriangleAreaBySidesAndAngle(sideA, sideB, angle) {
    const sinFromAngle = Math.sin(Number(angle) * Math.PI / 180);
    const area = 0.5 * (Number(sideA) * Number(sideB)) * sinFromAngle;
    return  area.toFixed(2).replace(/0+$/, '');
}

function calcTrianglePerimeter(num1, num2, num3) {
    const perimeter = Number(num1) + Number(num2) + Number(num3);
    return perimeter.toFixed(2).replace(/0+$/, '');
}






