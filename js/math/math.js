//*
// Math Figure
//*

//*
// all fugures are: Triangle, Cube, Cone, Cylinder, Pyramid, Sphere, Trapezoid, Tringular Prism
//*

let typeFigureSel = document.querySelector('.type-figure')
let triangleOperationSel = document.querySelector('.triangle-operation-select')
let btnCalculateFigure = document.querySelector('.btn-calculate-figures')

let errorInput = document.querySelector('.error-inputs');
let resultInput = document.querySelector('.input-result-figure');

if(typeFigureSel == null || triangleOperationSel == null || btnCalculateFigure == null 
    || errorInput == null || resultInput == null)
    ErrorDOMElement();

typeFigureSel.addEventListener('change', typeFigure);
triangleOperationSel.addEventListener('change', operationSelect);
btnCalculateFigure.addEventListener('click', calculateFigure);

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

function showFigure(selectorForm, selectorInfo) {
    let currentForm = document.querySelector(selectorForm);
    currentForm.style.display = 'block';
    document.querySelector(selectorInfo).style.display = 'block';
    Array.from(currentForm.querySelectorAll('input[type="text"]')).map(inp => inp.value = '');
}   

async function typeFigure() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    //imported from math-global-functions.js
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
        //show only pyramid form and pyramid info
        showFigure('.pyramid-form-container', '.pyramid-info');
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
    } else if(typeFigureSelect.value == 'pyramid') {
        pyramidCalculate();
    } else if(typeFigureSelect.value == 'sphere') {
            sphereCalculate();
    } else if(typeFigureSelect.value == 'cylinder') {
        cylinderCalculate();
    }  else {
        InvalidOperation();
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
            if(checkIsNumber(base.value) && checkIsNumber(height.value)) {
                resultInput.value = calcTriangleAreaByBaseAndHeight(base.value, height.value);
            } else {
                errorInput.textContent = 'Triangle base and height must be a numbers!';
            }
        } else if(triangleFormulaSelect.value == 'herons-formula') {
            const [a, b, c] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
            if(checkIsNumber(a.value) && checkIsNumber(b.value) &&  checkIsNumber(c.value)) {
                resultInput.value = calcTriangleAreaByHeronsFormula(a.value, b.value, c.value);
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
            
        } else if(triangleFormulaSelect.value == 'area-sides-and-angle') {
            const [sideA, sideB, angle] = Array.from(document.querySelectorAll('.by-sides-and-angle > input'));
            if(checkIsNumber(sideA.value) && checkIsNumber(sideB.value) &&  checkIsNumber(angle.value)) {
                resultInput.value = calcTriangleAreaBySidesAndAngle(sideA.value, sideB.value, angle.value);
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
        }
    } else if(operationFigureSelect.value == 'perimeter') {
        const [inp1, inp2, inp3] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
        if(checkIsNumber(inp1.value) && checkIsNumber(inp2.value) &&  checkIsNumber(inp3.value)) {
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
        if(checkIsNumber(sideB.value) && checkIsNumber(height.value) 
        && checkIsNumber(length.value) && checkIsNumber(sideC.value)) {
            resultInput.value = calcTriangularPrismSurficeArea(sideB.value, height.value, length.value, sideC.value);
        } else {
            errorInput.textContent = 'Invalid Tringular Prism sides!';
        }
    } else if(operationFigureSelect.value == 'volume') {
        const [w, h, l] = Array.from(document.querySelectorAll('.traingular-prism-volume > input'));
        if(checkIsNumber(w.value) && checkIsNumber(h.value) && checkIsNumber(l.value)) {
            resultInput.value = calcTriangularPrismVolume(w.value, h.value, l.value);
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

    if(checkIsNumber(radius.value) && checkIsNumber(height.value)) {
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
}

function trapezoidCalculate() {
    const operationFigureSelect = document.querySelector('.trapezoid-operation-select');
    if(operationFigureSelect == null)
        ErrorDOMElement();
    
    if(operationFigureSelect.value == 'area') {
        const [a, b, h] = Array.from(document.querySelectorAll('.trapezoid-area > input'));
        if(checkIsNumber(a.value) && checkIsNumber(b.value) && checkIsNumber(h.value)) {
            resultInput.value = calcTrapezoidArea(a.value, b.value, h.value);
        } else {
            errorInput.textContent = 'Invalid Trapezoid sides!';
        }
    } else if(operationFigureSelect.value == 'perimeter') {
        const [a, b, c, d] = Array.from(document.querySelectorAll('.trapezoid-perimeter > input'));
        if(checkIsNumber(a.value) && checkIsNumber(b.value) 
        && checkIsNumber(c.value) && checkIsNumber(d.value)) {
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

    if(checkIsNumber(a.value)) {
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

function pyramidCalculate() {
    const pyramidFormulaSelect = document.querySelector('.pyramid-formula-select');
    const operationFigureSelect = document.querySelector('.pyramid-operation-select');
    
    if(pyramidFormulaSelect == null || operationFigureSelect == null)
        ErrorDOMElement();

    if(pyramidFormulaSelect.value == 'square-pyramid') {
        const [a, h] = Array.from(document.querySelectorAll('.square-pyramid-input > input'));
        if(checkIsNumber(a.value) && checkIsNumber(h.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = calcSquarePyramidSurfaceArea(a.value, h.value);
            } else if(operationFigureSelect.value == 'volume') {
                resultInput.value = calcSquarePyramidVolume(a.value, h.value);
            } else {
                InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Pyramid sides!';
        }
    } else if(pyramidFormulaSelect.value == 'rectangular-pyramid') {
        const [l, w, h] = Array.from(document.querySelectorAll('.rectangular-pyramid-input > input'));
        if(checkIsNumber(l.value) && checkIsNumber(w.value) && checkIsNumber(h.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = calcRectangularPyramidSurfaceArea(l.value, w.value, h.value);
            } else if(operationFigureSelect.value == 'volume') {
                resultInput.value = calcRectangularPyramidVolume(l.value, w.value, h.value);
            } else {
                InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Pyramid sides!';
        }
    } else if(pyramidFormulaSelect.value == 'triangular-pyramid') {
        const [a, b, h] = Array.from(document.querySelectorAll('.triangular-pyramid-input > input'));
        if(checkIsNumber(a.value) && checkIsNumber(b.value) && checkIsNumber(h.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = calcTriangularPyramidSurfaceArea(a.value, b.value, h.value);
            } else if(operationFigureSelect.value == 'volume') {
                resultInput.value = calcTriangularPyramidVolume(a.value, b.value, h.value);
            } else {
                InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Pyramid sides!';
        }
    } else {
        InvalidOperation();
    }
}

function sphereCalculate() {
    const operationFigureSelect = document.querySelector('.sphere-operation-select');
    const [r] = Array.from(document.querySelectorAll('.sphere-inputs > div > input'));

    if(operationFigureSelect.value == null || r == null)
        ErrorDOMElement();

    if(checkIsNumber(r.value)) {
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

    if(checkIsNumber(r.value) && checkIsNumber(h.value)) {
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