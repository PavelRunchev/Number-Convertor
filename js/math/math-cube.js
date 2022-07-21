
document.querySelector('.cube-operation-select').addEventListener('change', typeCubeForm);
let surfaceAreaCubeFormula = document.querySelector('.cube-surface-area-formula');
let volumeCubeFormula = document.querySelector('.cube-volume-formula');
let labelCubeEnterInput = document.querySelector('.cube-label-enter');

let errorCubeInput = document.querySelector('.error-inputs');
let resultCubeInput = document.querySelector('.input-result-figure');

if(volumeCubeFormula == null || errorCubeInput == null || resultCubeInput == null)
    ErrorDOMElement();

volumeCubeFormula.style.display = 'none';

async function typeCubeForm() {
    let typeFigureSelect = document.querySelector('.type-figure');
    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'cube') {
        let typeOperationSelect = document.querySelector('.cube-operation-select');

        if(typeOperationSelect == null || surfaceAreaCubeFormula == null 
            || volumeCubeFormula == null || labelCubeEnterInput == null)
            ErrorDOMElement();

        await hiddenElements('.cube-info > article');

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
    return sa.toFixed(2).replace(/\.*0+$/, '');
}

function calcCubeVolume(a) {
    const v = Math.pow(Number(a), 3);
    return v.toFixed(2).replace(/\.*0+$/, '');
}
