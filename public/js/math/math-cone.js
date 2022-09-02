//*
// Math Cone
//*
const cone = (function() {
    "use strict";
    let coneOperationSelect = document.querySelector('.cone-operation-select');
    let surfaceAreaConeFormula = document.querySelector('.cone-surface-area-formula');
    let volumeConeFormula = document.querySelector('.cone-volume-formula');
    let labelConeEnterInput = document.querySelector('.cone-label-enter');

    let errorConeInput = document.querySelector('.error-inputs');
    let resultConeInput = document.querySelector('.input-result-figure');

    if(coneOperationSelect == null || volumeConeFormula == null || 
        labelConeEnterInput == null || errorConeInput == null || 
        resultConeInput == null)
        globalFunc.ErrorDOMElement();


    volumeConeFormula.style.display = 'none';
    coneOperationSelect.addEventListener('change', typeConeForm);

    async function typeConeForm() {
        let typeFigureSelect = document.querySelector('.type-figure');
        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(typeFigureSelect.value == 'cone') {
            let typeOperationSelect = document.querySelector('.cone-operation-select');

            if(typeOperationSelect == null || surfaceAreaConeFormula == null 
                || volumeConeFormula == null || labelConeEnterInput == null)
                globalFunc.ErrorDOMElement();

            await globalFunc.HiddenElements('.cone-info > article');
            globalFunc.ClearInputs('.figure input[type="text"]');

            if(typeOperationSelect.value == 'surface-area') {
                surfaceAreaConeFormula.style.display = 'block';
                labelConeEnterInput.innerHTML = 'Surface area enter:';
            } else if(typeOperationSelect.value == 'volume') {
                volumeConeFormula.style.display = 'block';
                labelConeEnterInput.innerHTML = 'Volume enter:';
            }

            errorConeInput.innerHTML = '';
            resultConeInput.value = '';
        } 
    }

    function calcConeSurfaceArea(r, h) {
        const t = Math.sqrt(Math.pow(Number(r), 2) + Math.pow(Number(h), 2));
        const sa = Math.PI * Number(r) * t + Math.PI * Math.pow(Number(r), 2);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(sa.toFixed(2));
    }

    function calcConeVolume(r, h) {
        const volume = (Math.PI * Math.pow(Number(r), 2) * Number(h)) / 3;
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(volume.toFixed(2));
    }

    return {
        calcConeSurfaceArea,
        calcConeVolume
    }
})();