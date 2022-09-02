//*
// Math Triangle
//*

const trianglePrism = (function() {
    "use strict";
    //Triangular Prism Options
    let trianfularPrismOperationSelect = document.querySelector('.triangular-prism-operation-select');

    let inputsSurfaceArea = document.querySelector('.traingular-prism-surface-area');
    let inputsVolume = document.querySelector('.traingular-prism-volume');
    let surfaceAreaInfo = document.querySelector('.triangularPrism-surface-area-formula');
    let volumeInfo = document.querySelector('.triangularPrism-volume-formula');
    let labelEnterInput = document.querySelector('.traingular-prism-label-enter');

    let errorTringularPrismInput = document.querySelector('.error-inputs');
    let resultTringularPrismInput = document.querySelector('.input-result-figure');

    if(trianfularPrismOperationSelect == null || inputsSurfaceArea == null || inputsVolume == null 
        || surfaceAreaInfo == null || volumeInfo == null || labelEnterInput == null
        || errorTringularPrismInput == null || resultTringularPrismInput == null)
        globalFunc.ErrorDOMElement();

    inputsVolume.style.display = 'none';
    volumeInfo.style.display = 'none';
    trianfularPrismOperationSelect.addEventListener('change', typeTringularPrismForm);

    async function typeTringularPrismForm() {
        let typeFigureSelect = document.querySelector('.type-figure');

        if(typeFigureSelect == null)
            globalFunc.ErrorDOMElement();

        if(typeFigureSelect.value == 'triangular-prism') {
            let typeOperationSelect = document.querySelector('.triangular-prism-operation-select');
            if(inputsSurfaceArea == null || inputsVolume == null || surfaceAreaInfo == null 
                || volumeInfo == null || labelEnterInput == null || typeOperationSelect == null
                || errorTringularPrismInput == null || resultTringularPrismInput == null)
                globalFunc.ErrorDOMElement();

            //imported from math-global-functions.js
            await globalFunc.HiddenElements('.traingular-prism-inputs > div');
            await globalFunc.HiddenElements('.triangularPrism-info > article');
            globalFunc.ClearInputs('.figure input[type="text"]');
            
            if(typeOperationSelect.value == 'surface-area') {
                inputsSurfaceArea.style.display = 'flex';
                surfaceAreaInfo.style.display = 'block';
                labelEnterInput.innerHTML = 'Surface area enter:';
            } else if(typeOperationSelect.value == 'volume') {
                inputsVolume.style.display = 'flex';
                volumeInfo.style.display = 'block';
                labelEnterInput.innerHTML = 'Volume enter:';
            }

            errorTringularPrismInput.innerHTML = '';
            resultTringularPrismInput.value = '';
        }
    }

    function calcTriangularPrismSurficeArea(b, h, l, c) {
        const frontTriangle = Number(b) * Number(h);
        const sideRectangles = 2 * (Number(c) * Number(l));
        const bottomRectangle = Number(b) * Number(l);
        const sa = frontTriangle + sideRectangles + bottomRectangle;
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(sa.toFixed(2));
    }

    function calcTriangularPrismVolume(w, h, l) {
        const volume = (Number(w) * Number(h) * Number(l)) / 2;
        //removeZerosAfterDecimalPoint is global function from math-global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(volume.toFixed(2));
    }

    return {
        calcTriangularPrismSurficeArea,
        calcTriangularPrismVolume
    }

})();
