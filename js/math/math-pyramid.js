//*
// Math Pyramid
//*

let pyramidFormulaSelect = document.querySelector('.pyramid-formula-select');
let pyramidOperationSelect = document.querySelector('.pyramid-operation-select');

if(pyramidFormulaSelect == null || pyramidOperationSelect == null) 
    ErrorDOMElement();

pyramidFormulaSelect.addEventListener('change', typePyramidForm);
pyramidOperationSelect.addEventListener('change', typePyramidFormula);

//hidden all pyramids case
//hiddenElements function is imported from math-global-functions.js
hiddenElements('.pyramid-inputs > div');
hiddenElements('.pyramid-info > article');

let labelPyramidEnter = document.querySelector('.pyramid-label-enter');

let squarePyramidInputs = document.querySelector('.square-pyramid-input');
let squarePyramidSurfaceAreaFormula = document.querySelector('.square-pyramid-surface-area-formula');
let squarePyramidVolumeFormula = document.querySelector('.square-pyramid-volume-formula');

let rectangularPyramidInputs = document.querySelector('.rectangular-pyramid-input');
let rectangularPyramidSurfaceAreaFormula = document.querySelector('.rectangular-pyramid-surface-area-formula');
let rectangularPyramidVolumeFormula = document.querySelector('.rectangular-pyramid-volume-formula');

let triangularPyramidInputs = document.querySelector('.triangular-pyramid-input');
let triangularPyramidSurfaceAreaFormula = document.querySelector('.triangular-pyramid-surface-area-formula');
let triangularPyramidVolumeFormula = document.querySelector('.triangular-pyramid-volume-formula');

// variables set default value when changes select options
let errorPyramidInput = document.querySelector('.error-inputs');
let resultPyramidInput = document.querySelector('.input-result-figure');

if(labelPyramidEnter == null || squarePyramidInputs == null || squarePyramidSurfaceAreaFormula == null || squarePyramidVolumeFormula == null
    || rectangularPyramidInputs == null || rectangularPyramidSurfaceAreaFormula == null
    || rectangularPyramidVolumeFormula == null || triangularPyramidInputs == null 
    || triangularPyramidSurfaceAreaFormula == null || triangularPyramidVolumeFormula == null
    || errorPyramidInput == null || resultPyramidInput == null)
    ErrorDOMElement();

//Show only first case (Square Pyramid Surface Area)
squarePyramidInputs.style.display = 'flex';
squarePyramidSurfaceAreaFormula.style.display = 'block';


//Change Pyramid Form to Square, Rectangular and Triangular
async function typePyramidForm() {
    let typeFigureSelect = document.querySelector('.type-figure');
    let typePyramidSelect = document.querySelector('.pyramid-formula-select');
    let operationSelect = document.querySelector('.pyramid-operation-select');
    if(typeFigureSelect == null || typePyramidSelect == null || operationSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value != 'pyramid') return;

    await hiddenElements('.pyramid-inputs > div');
    await hiddenElements('.pyramid-info > article');
    
    if(typePyramidSelect.value == 'square-pyramid' && operationSelect.value == 'surface-area') {
        squarePyramidInputs.style.display = 'flex';
        squarePyramidSurfaceAreaFormula.style.display = 'block';
    } else if(typePyramidSelect.value == 'square-pyramid' && operationSelect.value == 'volume') {
        squarePyramidInputs.style.display = 'flex';
        squarePyramidVolumeFormula.style.display = 'block';
    } else if(typePyramidSelect.value == 'rectangular-pyramid' && operationSelect.value == 'surface-area') {
        rectangularPyramidInputs.style.display = 'flex';
        rectangularPyramidSurfaceAreaFormula.style.display = 'block';
    } else if(typePyramidSelect.value == 'rectangular-pyramid' && operationSelect.value == 'volume') {
        rectangularPyramidInputs.style.display = 'flex';
        rectangularPyramidVolumeFormula.style.display = 'block';
    } else if(typePyramidSelect.value == 'triangular-pyramid' && operationSelect.value == 'surface-area') {
        triangularPyramidInputs.style.display = 'flex';
        triangularPyramidSurfaceAreaFormula.style.display = 'block';
    } else if(typePyramidSelect.value == 'triangular-pyramid' && operationSelect.value == 'volume') {
        triangularPyramidInputs.style.display = 'flex';
        triangularPyramidVolumeFormula.style.display = 'block';
    }

    errorPyramidInput.innerHTML = '';
    resultPyramidInput.value = '';
}

async function typePyramidFormula() {
    let typeFigureSelect = document.querySelector('.type-figure');
    let typePyramidSelect = document.querySelector('.pyramid-formula-select');
    let operationSelect = document.querySelector('.pyramid-operation-select');
    if(typeFigureSelect == null || typePyramidSelect == null || operationSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value != 'pyramid') return;

    await hiddenElements('.pyramid-inputs > div');
    await hiddenElements('.pyramid-info > article');

    if(typePyramidSelect.value == 'square-pyramid' && operationSelect.value == 'surface-area') {
        squarePyramidInputs.style.display = 'flex';
        squarePyramidSurfaceAreaFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Surface area enter:';
    } else if(typePyramidSelect.value == 'square-pyramid' && operationSelect.value == 'volume') {
        squarePyramidInputs.style.display = 'flex';
        squarePyramidVolumeFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Volume enter:';
    } else if(typePyramidSelect.value == 'rectangular-pyramid' && operationSelect.value == 'surface-area') {
        rectangularPyramidInputs.style.display = 'flex';
        rectangularPyramidSurfaceAreaFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Surface area enter:';
    } else if(typePyramidSelect.value == 'rectangular-pyramid' && operationSelect.value == 'volume') {
        rectangularPyramidInputs.style.display = 'flex';
        rectangularPyramidVolumeFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Volume enter:';
    } else if(typePyramidSelect.value == 'triangular-pyramid' && operationSelect.value == 'surface-area') {
        triangularPyramidInputs.style.display = 'flex';
        triangularPyramidSurfaceAreaFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Surface area enter:';
    } else if(typePyramidSelect.value == 'triangular-pyramid' && operationSelect.value == 'volume') {
        triangularPyramidInputs.style.display = 'flex';
        triangularPyramidVolumeFormula.style.display = 'block';
        labelPyramidEnter.innerHTML = 'Volume enter:';
    }

    errorPyramidInput.innerHTML = '';
    resultPyramidInput.value = '';
}

function calcSquarePyramidSurfaceArea(a, h) {
    const base = Math.pow(Number(a), 2)
    const la = 2 * Number(a) * Math.sqrt((Math.pow(Number(a), 2) / 4) + Math.pow(Number(h), 2));
    const sa = base + la;
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(sa.toFixed(2));
}

function calcSquarePyramidVolume(a, h) {
    const v = (Math.pow(Number(a), 2) * Number(h)) / 3;
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(v.toFixed(2));
}


function calcRectangularPyramidSurfaceArea(l, w, h) {
    const length = Number(l);
    const width = Number(w);
    const height = Number(h);
    const baseArea = length * width;
    const lengthSide = (width / 2) * Math.sqrt((4 * Math.pow(height, 2)) + Math.pow(length, 2));
    const widthSide = (length / 2) * Math.sqrt((4 * Math.pow(height, 2)) + Math.pow(width, 2));
    const literalArea = lengthSide + widthSide;
    const sa = baseArea +  literalArea;
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(sa.toFixed(2));
} 

function calcRectangularPyramidVolume(l, w, h) {
    const v = (Number(l) * Number(w) * Number(h)) / 3;
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(v.toFixed(2));
}   

function calcTriangularPyramidSurfaceArea(a, b, h) {
    const sa = ((Number(b) * Number(a)) / 2) + ((Number(b) * Number(h)) * (3 / 2));
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(sa.toFixed(2));
}

function calcTriangularPyramidVolume(a, b, h) {
    const v = (Number(a) * Number(b) * Number(h)) / 6;
    //removeZerosAfterDecimalPoint is global function from math-global-functions.js
    return removeZerosAfterDecimalPoint(v.toFixed(2));
}

