//*
// Math Figure
//*

//*
// all fugures are: Triangle, Cube, Cone, Cylinder, Pyramid, Sphere, Trapezoid, Tringular Prism
//*
(function() {
    "use strict";
    let typeFigureSel = document.querySelector('.type-figure');
    let triangleOperationSel = document.querySelector('.triangle-operation-select');
    let btnCalculateFigure = document.querySelector('.btn-calculate-figures');
    let btnResetFigure = document.querySelector('.btn-figure-reset');

    let errorInput = document.querySelector('.error-inputs');
    let resultInput = document.querySelector('.input-result-figure');

    if(typeFigureSel == null || triangleOperationSel == null || btnCalculateFigure == null 
        || btnResetFigure == null || errorInput == null || resultInput == null)
        globalFunc.ErrorDOMElement();

    typeFigureSel.addEventListener('change', typeFigure);
    triangleOperationSel.addEventListener('change', triangle.operationSelect);
    btnCalculateFigure.addEventListener('click', calculateFigure);
    btnResetFigure.addEventListener('click', resetFigure);

    function hiddenAllFigures() {
        let allFigres = Array.from(document.querySelectorAll('.figure'));
        let allInfo = Array.from(document.querySelectorAll('.figure-info'));

        if(allFigres == null || allInfo == null)
            globalFunc.ErrorDOMElement();

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

    function typeFigure() {
        let typeFigureSelect = document.querySelector('.type-figure');

        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        //imported from math-global-functions.js
        globalFunc.HiddenElements('.figure');
        globalFunc.HiddenElements('.figure-info');
        globalFunc.ClearInputs('.figure input[type="text"]');
        resultInput.value = '';
        errorInput.textContent = '';

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

        errorInput.value = '';
        resultInput.value = '';
    }

    function calculateFigure(e) {
        e.preventDefault();
        let typeFigureSelect = document.querySelector('.type-figure');

        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

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
            globalFunc.ErrorDOMElement();
            
        if(operationFigureSelect.value == 'area') {
            if(triangleFormulaSelect.value == 'area-base-height') {
                const [base, height] = Array.from(document.querySelectorAll('.by-base-and-height > input'));
                if(globalFunc.CheckIsNumber(base.value) && globalFunc.CheckIsNumber(height.value)) {
                    resultInput.value = triangle.calcTriangleAreaByBaseAndHeight(base.value, height.value);
                } else {
                    errorInput.textContent = 'Triangle base and height must be a numbers!';
                }
            } else if(triangleFormulaSelect.value == 'herons-formula') {
                const [a, b, c] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
                if(globalFunc.CheckIsNumber(a.value) && globalFunc.CheckIsNumber(b.value) &&  globalFunc.CheckIsNumber(c.value)) {
                    resultInput.value = triangle.calcTriangleAreaByHeronsFormula(a.value, b.value, c.value);
                } else {
                    errorInput.textContent = 'Triangle sides must be a numbers!';
                }
                
            } else if(triangleFormulaSelect.value == 'area-sides-and-angle') {
                const [sideA, sideB, angle] = Array.from(document.querySelectorAll('.by-sides-and-angle > input'));
                if(globalFunc.CheckIsNumber(sideA.value) && globalFunc.CheckIsNumber(sideB.value) &&  globalFunc.CheckIsNumber(angle.value)) {
                    resultInput.value = triangle.calcTriangleAreaBySidesAndAngle(sideA.value, sideB.value, angle.value);
                } else {
                    errorInput.textContent = 'Triangle sides must be a numbers!';
                }
            }
        } else if(operationFigureSelect.value == 'perimeter') {
            const [inp1, inp2, inp3] = Array.from(document.querySelectorAll('.by-herons-formula > input'));
            if(globalFunc.CheckIsNumber(inp1.value) && globalFunc.CheckIsNumber(inp2.value) && globalFunc.CheckIsNumber(inp3.value)) {
                resultInput.value = triangle.calcTrianglePerimeter(inp1.value, inp2.value, inp3.value);
            } else {
                errorInput.textContent = 'Triangle sides must be a numbers!';
            }
        } else {
            globalFunc.InvalidOperation();
        }
    }

    function triangularPrismCalculate() {
        const operationFigureSelect = document.querySelector('.triangular-prism-operation-select');
        if(operationFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(operationFigureSelect.value == 'surface-area') {
            const [sideB, height, length, sideC] = Array.from(document.querySelectorAll('.traingular-prism-surface-area > input'));
            if(globalFunc.CheckIsNumber(sideB.value) && globalFunc.CheckIsNumber(height.value) 
            && globalFunc.CheckIsNumber(length.value) && globalFunc.CheckIsNumber(sideC.value)) {
                resultInput.value = trianglePrism.calcTriangularPrismSurficeArea(sideB.value, height.value, length.value, sideC.value);
            } else {
                errorInput.textContent = 'Invalid Tringular Prism sides!';
            }
        } else if(operationFigureSelect.value == 'volume') {
            const [w, h, l] = Array.from(document.querySelectorAll('.traingular-prism-volume > input'));
            if(globalFunc.CheckIsNumber(w.value) && globalFunc.CheckIsNumber(h.value) && globalFunc.CheckIsNumber(l.value)) {
                resultInput.value = trianglePrism.calcTriangularPrismVolume(w.value, h.value, l.value);
            } else {
                errorInput.textContent = 'Invalid Tringular Prism sides!';
            }
        } else {
            globalFunc.InvalidOperation();
        }
    }

    function coneCalculate() {
        const operationFigureSelect = document.querySelector('.cone-operation-select');
        const [radius, height] = Array.from(document.querySelectorAll('.cone-inputs > div > input'));
        if(operationFigureSelect == null || radius == null || height == null)
            globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsNumber(radius.value) && globalFunc.CheckIsNumber(height.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = cone.calcConeSurfaceArea(radius.value, height.value);
            } else if(operationFigureSelect.value == 'volume') {
                resultInput.value = cone.calcConeVolume(radius.value, height.value);
            } else {
                globalFunc.InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Cone radius or height!';
        }
    }

    function trapezoidCalculate() {
        const operationFigureSelect = document.querySelector('.trapezoid-operation-select');
        if(operationFigureSelect == null)
            globalFunc.ErrorDOMElement();
        
        if(operationFigureSelect.value == 'area') {
            const [a, b, h] = Array.from(document.querySelectorAll('.trapezoid-area > input'));
            if(globalFunc.CheckIsNumber(a.value) && globalFunc.CheckIsNumber(b.value) && globalFunc.CheckIsNumber(h.value)) {
                resultInput.value = trapezoid.calcTrapezoidArea(a.value, b.value, h.value);
            } else {
                errorInput.textContent = 'Invalid Trapezoid sides!';
            }
        } else if(operationFigureSelect.value == 'perimeter') {
            const [a, b, c, d] = Array.from(document.querySelectorAll('.trapezoid-perimeter > input'));
            if(globalFunc.CheckIsNumber(a.value) && globalFunc.CheckIsNumber(b.value) 
            && globalFunc.CheckIsNumber(c.value) && globalFunc.CheckIsNumber(d.value)) {
                resultInput.value = trapezoid.calcTrapezoidPerimeter(a.value, b.value, c.value, d.value);
            } else {
                errorInput.textContent = 'Invalid Trapezoid sides!';
            }
        } else {
            globalFunc.InvalidOperation();
        }
    }

    function cubeCalculate() {
        const operationFigureSelect = document.querySelector('.cube-operation-select');
        const [a] = Array.from(document.querySelectorAll('.cube-inputs > div > input'));

        if(operationFigureSelect.value == null || a == null)
            globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsNumber(a.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = cube.calcCubeSurfaceArea(a.value);
            } else if (operationFigureSelect.value == 'volume') {
                resultInput.value = cube.calcCubeVolume(a.value);
            } else {
                globalFunc.InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Cube a side!';
        }
    }

    function pyramidCalculate() {
        const pyramidFormulaSelect = document.querySelector('.pyramid-formula-select');
        const operationFigureSelect = document.querySelector('.pyramid-operation-select');
        
        if(pyramidFormulaSelect == null || operationFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(pyramidFormulaSelect.value == 'square-pyramid') {
            const [a, h] = Array.from(document.querySelectorAll('.square-pyramid-input > input'));
            if(globalFunc.CheckIsNumber(a.value) && globalFunc.CheckIsNumber(h.value)) {
                if(operationFigureSelect.value == 'surface-area') {
                    resultInput.value = pyramid.calcSquarePyramidSurfaceArea(a.value, h.value);
                } else if(operationFigureSelect.value == 'volume') {
                    resultInput.value = pyramid.calcSquarePyramidVolume(a.value, h.value);
                } else {
                    globalFunc.InvalidOperation();
                }
            } else {
                errorInput.textContent = 'Invalid Pyramid sides!';
            }
        } else if(pyramidFormulaSelect.value == 'rectangular-pyramid') {
            const [l, w, h] = Array.from(document.querySelectorAll('.rectangular-pyramid-input > input'));
            if(globalFunc.CheckIsNumber(l.value) && globalFunc.CheckIsNumber(w.value) && globalFunc.CheckIsNumber(h.value)) {
                if(operationFigureSelect.value == 'surface-area') {
                    resultInput.value = pyramid.calcRectangularPyramidSurfaceArea(l.value, w.value, h.value);
                } else if(operationFigureSelect.value == 'volume') {
                    resultInput.value = pyramid.calcRectangularPyramidVolume(l.value, w.value, h.value);
                } else {
                    globalFunc.InvalidOperation();
                }
            } else {
                errorInput.textContent = 'Invalid Pyramid sides!';
            }
        } else if(pyramidFormulaSelect.value == 'triangular-pyramid') {
            const [a, b, h] = Array.from(document.querySelectorAll('.triangular-pyramid-input > input'));
            if(globalFunc.CheckIsNumber(a.value) && globalFunc.CheckIsNumber(b.value) && globalFunc.CheckIsNumber(h.value)) {
                if(operationFigureSelect.value == 'surface-area') {
                    resultInput.value = pyramid.calcTriangularPyramidSurfaceArea(a.value, b.value, h.value);
                } else if(operationFigureSelect.value == 'volume') {
                    resultInput.value = pyramid.calcTriangularPyramidVolume(a.value, b.value, h.value);
                } else {
                    globalFunc.InvalidOperation();
                }
            } else {
                errorInput.textContent = 'Invalid Pyramid sides!';
            }
        } else {
            globalFunc.InvalidOperation();
        }
    }

    function sphereCalculate() {
        const operationFigureSelect = document.querySelector('.sphere-operation-select');
        const [r] = Array.from(document.querySelectorAll('.sphere-inputs > div > input'));

        if(operationFigureSelect.value == null || r == null)
            globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsNumber(r.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = sphere.calcSphereSurfaceArea(r.value);
            } else if (operationFigureSelect.value == 'volume') {
                resultInput.value = sphere.calcSphereVolume(r.value);
            } else {
                globalFunc.InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Sphere radius!';
        }
    }

    function cylinderCalculate() {
        const operationFigureSelect = document.querySelector('.cylinder-operation-select');
        const [r, h] = Array.from(document.querySelectorAll('.cylinder-inputs > div > input'));

        if(operationFigureSelect.value == null || r == null || h == null)
            globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsNumber(r.value) && globalFunc.CheckIsNumber(h.value)) {
            if(operationFigureSelect.value == 'surface-area') {
                resultInput.value = cylinder.calcCylinderSurfaceArea(r.value, h.value);
            } else if (operationFigureSelect.value == 'volume') {
                resultInput.value = cylinder.calcCylinderVolume(r.value, h.value);
            } else {
                globalFunc.InvalidOperation();
            }
        } else {
            errorInput.textContent = 'Invalid Cylinder radius or height!';
        }
    }

    function resetFigure() {
        hiddenAllFigures();
        typeFigureSel.value = 'triangle';
        document.querySelector('.triangle-form-container').style.display = 'block';
        errorInput.value = '';
        resultInput.value = '';
    }

})(window);