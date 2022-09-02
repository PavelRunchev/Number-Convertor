//*
// Math Trapezoid
//*

const trapezoid = (function() {
    "use strict";
    let trapezoidOperationSelect = document.querySelector('.trapezoid-operation-select');

    let trapezoidAreaFormula = document.querySelector('.trapezoid-area-formula');
    let trapezoidPerimeterFormula = document.querySelector('.trapezoid-perimeter-formula');
    let labelTrapezoidEnterInput = document.querySelector('.trapezoid-label-enter');
    let trapezoidAreaInputs = document.querySelector('.trapezoid-area');
    let trapezoidPerimeterInputs = document.querySelector('.trapezoid-perimeter');

    let errorTrapezoidInput = document.querySelector('.error-inputs');
    let resultTrapezoidInput = document.querySelector('.input-result-figure');

    if(trapezoidOperationSelect == null || trapezoidAreaFormula == null 
        || trapezoidPerimeterFormula == null || labelTrapezoidEnterInput == null 
        || trapezoidAreaInputs == null || trapezoidPerimeterInputs == null 
        || errorTrapezoidInput == null || resultTrapezoidInput == null)
        globalFunc.ErrorDOMElement();

    trapezoidPerimeterFormula.style.display = 'none';
    trapezoidPerimeterInputs.style.display = 'none';
    trapezoidOperationSelect.addEventListener('change', typeTrapezoidForm);

    async function typeTrapezoidForm() {
        let typeFigureSelect = document.querySelector('.type-figure');

        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(typeFigureSelect.value == 'trapezoid') {
            let typeOperationSelect = document.querySelector('.trapezoid-operation-select');
            if(typeOperationSelect == null)
                globalFunc.ErrorDOMElement();

            //imported from math-global-functions.js
            await globalFunc.HiddenElements('.trapezoid-inputs > div');
            await globalFunc.HiddenElements('.trapezoid-info > article');
            globalFunc.ClearInputs('.figure input[type="text"]');

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
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(area.toFixed(2));
    }

    function calcTrapezoidPerimeter(a, b, c, d) {
        const perimeter = Number(a) + Number(b) + Number(c) + Number(d);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(perimeter.toFixed(2));
    }

    return {
        calcTrapezoidArea,
        calcTrapezoidPerimeter
    }

})();