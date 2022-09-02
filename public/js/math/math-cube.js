//*
// Math Cube
//*
const cube = (function() {
    "use strict";
    let cubeOperationSelect = document.querySelector('.cube-operation-select');
    let surfaceAreaCubeFormula = document.querySelector('.cube-surface-area-formula');
    let volumeCubeFormula = document.querySelector('.cube-volume-formula');
    let labelCubeEnterInput = document.querySelector('.cube-label-enter');

    let errorCubeInput = document.querySelector('.error-inputs');
    let resultCubeInput = document.querySelector('.input-result-figure');

    if(cubeOperationSelect == null || surfaceAreaCubeFormula == null || volumeCubeFormula == null || labelCubeEnterInput == null 
        || errorCubeInput == null || resultCubeInput == null)
        globalFunc.ErrorDOMElement();

    volumeCubeFormula.style.display = 'none';
    cubeOperationSelect.addEventListener('change', typeCubeForm);

    async function typeCubeForm() {
        let typeFigureSelect = document.querySelector('.type-figure');
        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(typeFigureSelect.value == 'cube') {
            let typeOperationSelect = document.querySelector('.cube-operation-select');

            if(typeOperationSelect == null || surfaceAreaCubeFormula == null 
                || volumeCubeFormula == null || labelCubeEnterInput == null)
                globalFunc.ErrorDOMElement();

            await globalFunc.HiddenElements('.cube-info > article');
            globalFunc.ClearInputs('.figure input[type="text"]');

            if(typeOperationSelect.value == 'surface-area') {
                surfaceAreaCubeFormula.style.display = 'block';
                labelCubeEnterInput.innerHTML = 'Surface area enter:';
            } else if(typeOperationSelect.value == 'volume') {
                volumeCubeFormula.style.display = 'block';
                labelCubeEnterInput.innerHTML = 'Volume enter:';
            }

            errorCubeInput.innerHTML = '';
            resultCubeInput.value = '';
        }
    }

    function calcCubeSurfaceArea(a) {
        const sa = 6 * Math.pow(Number(a), 2);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(sa.toFixed(2));
    }

    function calcCubeVolume(a) {
        const v = Math.pow(Number(a), 3);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(v.toFixed(2));
    }

    return {
        calcCubeSurfaceArea,
        calcCubeVolume
    }
})();
