
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
inputsByHeronsFormula.style.display = 'none';
let inputsByAngle = document.querySelector('.by-sides-and-angle');
inputsByAngle.style.display = 'none';

if(triangleFormulaSelect == null || triangleArea == null || trianglePerimeter == null
    || inputsByBaseAndHeight == null || inputsByHeronsFormula == null
    || inputsByAngle == null) {
        ErrorDOMElement();
    } 

function hiddenElements(selector) {
    Array.from(document.querySelectorAll(`${selector}`))
    .map(el => el.style.display = 'none');
}

async function typeTriangleFormula() {
    let triangleFormulaSelect = document.querySelector('.triangle-formula-select');
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
}

function checkNumberIsInteger(n) {
    const number = Number(n);
    return typeof number == 'number' && !isNaN(number);
}

function calcAreaByBaseAndHeight(base, height) {
    return (Number(base) * Number(height)) / 2;
}

function calcByHeronsFormula(a, b, c) {
    //semiPerimeter
    const s = (Number(a) + Number(b) + Number(c)) / 2;
    const area = Math.sqrt(s * (s - Number(a)) * (s - Number(b)) * (s - Number(c)));
    return area.toFixed(2);
}

function calcAreaBySidesAndAngle(sideA, sideB, angle) {
    const sinFromAngle = Math.sin(Number(angle) * Math.PI / 180);
    const area = 0.5 * (Number(sideA) * Number(sideB)) * sinFromAngle;
    return  area.toFixed(2);
}

function calcTrianglePerimeter(num1, num2, num3) {
    return Number(num1) + Number(num2) + Number(num3);
}





