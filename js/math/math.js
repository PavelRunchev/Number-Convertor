

document.querySelector('.type-figure').addEventListener('change', typeFigure);
document.querySelector('.triangle-operation-select').addEventListener('change', operationSelect);
document.querySelector('.btn-calculate-figures').addEventListener('click', calculateFigure);

let errorInput = document.querySelector('.error-inputs');
let resultInput = document.querySelector('.input-result-figure');

function ErrorDOMElement() {
    throw new Error('Missing DOM Element!');
}

function InvalidOperation() {
    errorInput.textContent = 'Invalid operation!';
    throw new Error('Invalid Operation!');
}

if(errorInput == null || resultInput == null)
    ErrorDOMElement();

function hiddenAllFigures() {
    let allFigres = Array.from(document.querySelectorAll('.figure'));
    let allInfo = Array.from(document.querySelectorAll('.figure-info'));

    if(allFigres == null || allInfo == null)
        ErrorDOMElement();

    if(allFigres.length < 1 || allInfo.length < 1)
        return;

    for (let i = 1; i < allFigres.length; i++) {
        allFigres[i].style.display = 'none';
        allInfo[i].style.display = 'none';
    }
}

//by default hidden all figures, only first is visible!
hiddenAllFigures();

function hiddenElements(selector) {
    Array.from(document.querySelectorAll(`${selector}`))
    .map(el => el.style.display = 'none');
}

function showFigure(selectorForm, selectorInfo) {
    document.querySelector(selectorForm).style.display = 'block';
    document.querySelector(selectorInfo).style.display = 'block';
}

async function typeFigure() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    await hiddenElements('.figure');
    await hiddenElements('.figure-info');

    if(typeFigureSelect.value == 'triangle') {
        //show only triangle form and triangle info
        showFigure('.triangle-form-container', '.triangle-info');
    } else if(typeFigureSelect.value == 'triangular-prism') {
        //show only triangular prism form and triangular prism info
        showFigure('.triangularPrism-form-container', '.triangularPrism-info');
    } else if(typeFigureSelect.value == 'cone') {
        //show only cone form and cone info
        showFigure('.cone-form-container', '.cone-info');
    } else if(typeFigureSelect.value == 'trapezoid') {
        //show only trapezoid form and trapezoid info
        showFigure('.trapezoid-form-container', '.trapezoid-info');
    } else if(typeFigureSelect.value == 'cube') {
        //show only cube form and cube info
        showFigure('.cube-form-container', '.cube-info');
    } else if(typeFigureSelect.value == 'pyramid') {
        console.log(typeFigureSelect.value);
        //todo
    } else if(typeFigureSelect.value == 'sphere') {
        //show only sphere form and sphere info
        showFigure('.sphere-form-container', '.sphere-info');
    } else if(typeFigureSelect.value == 'cylinder') {
        //show only cylinder form and cylinder info
        showFigure('.cylinder-form-container', '.cylinder-info');
    }
}

function calculateFigure(e) {
    e.preventDefault();
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'triangle') {
        triangleCalculate();
    } else if(typeFigureSelect.value == 'triangular-prism') {
        triangularPrismCalculate();
    } else if(typeFigureSelect.value == 'cone') {
        coneCalculate();
    } else if(typeFigureSelect.value == 'trapezoid') {
        trapezoidCalculate();
    } else if(typeFigureSelect.value == 'cube') {
        cubeCalculate();
    } else if(typeFigureSelect.value == 'sphere') {
        sphereCalculate();
    } else if(typeFigureSelect.value == 'cylinder') {
        cylinderCalculate();
    }   
}

function triangleCalculate() {
    const operationFigureSelect = document.querySelector('.triangle-operation-select');
    const triangleFormulaSelect = document.querySelector('.triangle-formula-select');
    if(triangleFormulaSelect == null || operationFigureSelect == null)
        ErrorDOMElement();
        
    if(operationFigureSelect.value == 'area') {
        if(triangleFormulaSelect.value == 'area-base-height') {
            const [base, height] = Array.from(document.querySelectorAll('.by-base-and-height > input'));
            if(checkNumberIsInteger(base.value) && checkNumberIsInteger(height.value)) {
                resultInput.value = calcTriangleAreaByBaseAndHeight(base.value, height.value);
                base.value = '', height.value = '';
            } else {
                errorInput.textContent = 'Triangle base and height must be a numbers!';
            }
        } else if(triangleFormulaSelect.value == 'herons-formula') {
            const [a, b, c] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
            if(checkNumberIsInteger(a.value) && checkNumberIsInteger(b.value) &&  checkNumberIsInteger(c.value)) {
                resultInput.value = calcTriangleAreaByHeronsFormula(a.value, b.value, c.value);
                a.value = '', b.value = '', c.value = '';
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
            
        } else if(triangleFormulaSelect.value == 'area-sides-and-angle') {
            const [sideA, sideB, angle] = Array.from(document.querySelectorAll('.by-sides-and-angle > input'));
            if(checkNumberIsInteger(sideA.value) && checkNumberIsInteger(sideB.value) &&  checkNumberIsInteger(angle.value)) {
                resultInput.value = calcTriangleAreaBySidesAndAngle(sideA.value, sideB.value, angle.value);
                sideA.value = '', sideB.value = '', angle.value = '';
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
        }
    } else if(operationFigureSelect.value == 'perimeter') {
        const [inp1, inp2, inp3] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
        if(checkNumberIsInteger(inp1.value) && checkNumberIsInteger(inp2.value) &&  checkNumberIsInteger(inp3.value)) {
                resultInput.value = calcTrianglePerimeter(inp1.value, inp2.value, inp3.value);
        } else {
            errorInput.textContent = 'Triangle sides must be a numbers!';
        }
    } else {
        InvalidOperation();
    }
}

function triangularPrismCalculate() {
    const operationFigureSelect = document.querySelector('.triangular-prism-operation-select');
    if(operationFigureSelect == null)
        ErrorDOMElement();

    if(operationFigureSelect.value == 'surface-area') {
        const [sideB, height, length, sideC] = Array.from(document.querySelectorAll('.traingular-prism-surface-area > input'));
        if(checkNumberIsInteger(sideB.value) && checkNumberIsInteger(height.value) 
        && checkNumberIsInteger(length.value) && checkNumberIsInteger(sideC.value)) {
            resultInput.value = calcTriangularPrismSurficeArea(sideB.value, height.value, length.value, sideC.value);
            sideB.value = '', height.value = '', length.value = '', sideC.value = '';
        } else {
            errorInput.textContent = 'Invalid Tringular Prism sides!';
        }
    } else if(operationFigureSelect.value == 'volume') {
        const [w, h, l] = Array.from(document.querySelectorAll('.traingular-prism-volume > input'));
        if(checkNumberIsInteger(w.value) && checkNumberIsInteger(h.value) && checkNumberIsInteger(l.value)) {
            resultInput.value = calcTriangularPrismVolume(w.value, h.value, l.value);
            w.value = '', h.value = '', l.value = '';
        } else {
            errorInput.textContent = 'Invalid Tringular Prism sides!';
        }
    } else {
        InvalidOperation();
    }
}

function coneCalculate() {
    const operationFigureSelect = document.querySelector('.cone-operation-select');
    const [radius, height] = Array.from(document.querySelectorAll('.cone-inputs > div > input'));
    if(operationFigureSelect == null || radius == null || height == null)
        ErrorDOMElement();

    if(checkNumberIsInteger(radius.value) && checkNumberIsInteger(height.value)) {
        if(operationFigureSelect.value == 'surface-area') {
            resultInput.value = calcConeSurfaceArea(radius.value, height.value);
        } else if(operationFigureSelect.value == 'volume') {
            resultInput.value = calcConeVolume(radius.value, height.value);
        } else {
            InvalidOperation();
        }
    } else {
        errorInput.textContent = 'Invalid Cone radius or height!';
    }

    radius.value = '', height.value = '';
}

function trapezoidCalculate() {
    const operationFigureSelect = document.querySelector('.trapezoid-operation-select');
    if(operationFigureSelect == null)
        ErrorDOMElement();
    
    if(operationFigureSelect.value == 'area') {
        const [a, b, h] = Array.from(document.querySelectorAll('.trapezoid-area > input'));
        if(checkNumberIsInteger(a.value) && checkNumberIsInteger(b.value) && checkNumberIsInteger(h.value)) {
            resultInput.value = calcTrapezoidArea(a.value, b.value, h.value);
        } else {
            errorInput.textContent = 'Invalid Trapezoid sides!';
        }
    } else if(operationFigureSelect.value == 'perimeter') {
        const [a, b, c, d] = Array.from(document.querySelectorAll('.trapezoid-perimeter > input'));
        if(checkNumberIsInteger(a.value) && checkNumberIsInteger(b.value) 
        && checkNumberIsInteger(c.value) && checkNumberIsInteger(d.value)) {
            resultInput.value = calcTrapezoidPerimeter(a.value, b.value, c.value, d.value);
        } else {
            errorInput.textContent = 'Invalid Trapezoid sides!';
        }
    } else {
        InvalidOperation();
    }
}

function cubeCalculate() {
    const operationFigureSelect = document.querySelector('.cube-operation-select');
    const [a] = Array.from(document.querySelectorAll('.cube-inputs > div > input'));

    if(operationFigureSelect.value == null || a == null)
        ErrorDOMElement();

    if(checkNumberIsInteger(a.value)) {
        if(operationFigureSelect.value == 'surface-area') {
            resultInput.value = calcCubeSurfaceArea(a.value);
        } else if (operationFigureSelect.value == 'volume') {
            resultInput.value = calcCubeVolume(a.value);
        } else {
            InvalidOperation();
        }
    } else {
        errorInput.textContent = 'Invalid Cube a side!';
    }
}

function sphereCalculate() {
    const operationFigureSelect = document.querySelector('.sphere-operation-select');
    const [r] = Array.from(document.querySelectorAll('.sphere-inputs > div > input'));

    if(operationFigureSelect.value == null || r == null)
        ErrorDOMElement();

    if(checkNumberIsInteger(r.value)) {
        if(operationFigureSelect.value == 'surface-area') {
            resultInput.value = calcSphereSurfaceArea(r.value);
        } else if (operationFigureSelect.value == 'volume') {
            resultInput.value = calcSphereVolume(r.value);
        } else {
            InvalidOperation();
        }
    } else {
        errorInput.textContent = 'Invalid Sphere radius!';
    }
}

function cylinderCalculate() {
    const operationFigureSelect = document.querySelector('.cylinder-operation-select');
    const [r, h] = Array.from(document.querySelectorAll('.cylinder-inputs > div > input'));

    if(operationFigureSelect.value == null || r == null || h == null)
        ErrorDOMElement();

    if(checkNumberIsInteger(r.value) && checkNumberIsInteger(h.value)) {
        if(operationFigureSelect.value == 'surface-area') {
            resultInput.value = calcCylinderSurfaceArea(r.value, h.value);
        } else if (operationFigureSelect.value == 'volume') {
            resultInput.value = calcCylinderVolume(r.value, h.value);
        } else {
            InvalidOperation();
        }
    } else {
        errorInput.textContent = 'Invalid Cylinder radius or height!';
    }
}