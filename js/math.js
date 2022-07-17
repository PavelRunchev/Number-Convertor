


document.querySelector('.type-figure').addEventListener('change', typeFigure);
document.querySelector('.triangle-operation-select').addEventListener('change', operationSelect);
document.querySelector('.btn-calculate-figures').addEventListener('click', calculateFigure);

let errorInput = document.querySelector('.error-inputs');
let resultInput = document.querySelector('.input-result-figure');

function ErrorDOMElement() {
    throw new Error('Missing DOM Element!');
}

function hiddenElements(selector) {
    Array.from(document.querySelectorAll(`${selector}`))
    .map(el => el.style.display = 'none');
}

async function typeFigure() {
    let typeFigureSelect = document.querySelector('.type-figure');
    await hiddenElements('.form > section');
    console.log(typeFigureSelect.value);

    //TODO 

    //Show sleceted figure form!!!
}

function calculateFigure(e) {
    e.preventDefault();
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'triangle') {
        let operationFigureSelect = document.querySelector('.triangle-operation-select');
        triangleCalculate(operationFigureSelect);
    }
}

async function operationSelect() {
    let typeFigure = document.querySelector('.type-figure');
    if(typeFigure == null)
        ErrorDOMElement(); 
   
    console.log(typeFigure.value);
    //change to triangle figure.
    if(typeFigure.value == 'triangle') {
        let triangleOperationOption = document.querySelector('.triangle-operation-select');
        let triangleFormulaSelect = document.querySelector('.triangle-formula');
        let triangleArea = document.querySelector('.triangle-area');
        let trianglePerimeter = document.querySelector('.triangle-perimeter');
        let inputsByBaseAndHeight = document.querySelector('.by-base-and-height');
        let inputsByHeronsFormula = document.querySelector('.by-herons-formula');

        if(triangleOperationOption == null || triangleFormulaSelect == null || triangleArea == null 
            || trianglePerimeter == null || inputsByBaseAndHeight == null 
            || inputsByHeronsFormula == null)
            ErrorDOMElement();
        
        await hiddenElements('.triangle-info > article');
        await hiddenElements('.traingle-inputs > div');

        if(triangleOperationOption.value == 'area') {
            triangleArea.style.display = 'block';
            triangleFormulaSelect.style.display = 'block';
            inputsByBaseAndHeight.style.display = 'flex';
        } else if(triangleOperationOption.value == 'perimeter') {
            trianglePerimeter.style.display = 'block';
            triangleFormulaSelect.style.display = 'none';
            inputsByHeronsFormula.style.display = 'flex';
        }
    }
}

function triangleCalculate(operationFigureSelect) {
    let triangleFormulaSelect = document.querySelector('.triangle-formula-select');
    if(triangleFormulaSelect == null || operationFigureSelect == null)
        ErrorDOMElement();
        
    if(operationFigureSelect.value == 'area') {
        if(triangleFormulaSelect.value == 'area-base-height') {
            let [base, height] = Array.from(document.querySelectorAll('.by-base-and-height > input'));
            if(checkNumberIsInteger(base.value) && checkNumberIsInteger(height.value)) {
                resultInput.value = calcAreaByBaseAndHeight(base.value, height.value);
                base.value = '', height.value = '';
            } else {
                errorInput.textContent = 'Triangle base and height must be a numbers!';
            }
        } else if(triangleFormulaSelect.value == 'herons-formula') {
            let [a, b, c] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
            if(checkNumberIsInteger(a.value) && checkNumberIsInteger(b.value) &&  checkNumberIsInteger(c.value)) {
                resultInput.value = calcByHeronsFormula(a.value, b.value, c.value);
                a.value = '', b.value = '', c.value = '';
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
            
        } else if(triangleFormulaSelect.value == 'area-sides-and-angle') {
            let [sideA, sideB, angle] = Array.from(document.querySelectorAll('.by-sides-and-angle > input'));
            if(checkNumberIsInteger(sideA.value) && checkNumberIsInteger(sideB.value) &&  checkNumberIsInteger(angle.value)) {
                resultInput.value = calcAreaBySidesAndAngle(sideA.value, sideB.value, angle.value);
                sideA.value = '', sideB.value = '', angle.value = '';
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
        }
    } else if(operationFigureSelect.value == 'perimeter') {
        let [inp1, inp2, inp3] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
        if(checkNumberIsInteger(inp1.value) && checkNumberIsInteger(inp2.value) &&  checkNumberIsInteger(inp3.value)) {
                resultInput.value = calcTrianglePerimeter(inp1.value, inp2.value, inp3.value);
        } else {
            errorInput.textContent = 'Triangle sides must be a numbers!';
        }
    }
}