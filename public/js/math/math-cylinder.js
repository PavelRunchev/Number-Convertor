//*
// Math Cylinder
//*
const cylinder = (function() {
    let cylinderOperationSelect = document.querySelector('.cylinder-operation-select');
    let surfaceAreaCylinderFormula = document.querySelector('.cylinder-surface-area-formula');
    let volumeCylinderFormula = document.querySelector('.cylinder-volume-formula');
    let labelCylinderEnterInput = document.querySelector('.cylinder-label-enter');

    let errorCylinderInput = document.querySelector('.error-inputs');
    let resultCylinderInput = document.querySelector('.input-result-figure');

    if(cylinderOperationSelect == null || surfaceAreaCylinderFormula == null
        || volumeCylinderFormula == null || labelCylinderEnterInput == null
        || errorCylinderInput == null || resultCylinderInput == null)
        globalFunc.ErrorDOMElement();

    volumeCylinderFormula.style.display = 'none';
    cylinderOperationSelect.addEventListener('change', typeCylinderForm);

    async function typeCylinderForm() {
        let typeFigureSelect = document.querySelector('.type-figure');
        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(typeFigureSelect.value == 'cylinder') {
            let typeOperationSelect = document.querySelector('.cylinder-operation-select');

            if(typeOperationSelect == null || surfaceAreaCylinderFormula == null 
                || volumeCylinderFormula == null || labelCylinderEnterInput == null)
                globalFunc.ErrorDOMElement();

            await globalFunc.HiddenElements('.cylinder-info > article');
            globalFunc.ClearInputs('.figure input[type="text"]');

            if(typeOperationSelect.value == 'surface-area') {
                surfaceAreaCylinderFormula.style.display = 'block';
                labelCylinderEnterInput.innerHTML = 'Surface area enter:';
            } else if(typeOperationSelect.value == 'volume') {
                volumeCylinderFormula.style.display = 'block';
                labelCylinderEnterInput.innerHTML = 'Volume enter:';
            }

            errorCylinderInput.innerHTML = '';
            resultCylinderInput.value = '';
        }
    }

    function calcCylinderSurfaceArea(r, h) {
        const sa = 2 * Math.PI * Math.pow(Number(r), 2) + 2 * Math.PI * Number(r) * Number(h);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(sa.toFixed(2));
    }

    function calcCylinderVolume(r, h) {
        const v = Number(h) * Math.PI * Math.pow(Number(r), 2);
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(v.toFixed(2));
    }

    return {
        calcCylinderSurfaceArea,
        calcCylinderVolume
    }

})();