

document.querySelector('.cylinder-operation-select').addEventListener('change', typeCylinderForm);
let surfaceAreaCylinderFormula = document.querySelector('.cylinder-surface-area-formula');
let volumeCylinderFormula = document.querySelector('.cylinder-volume-formula');
let labelCylinderEnterInput = document.querySelector('.cylinder-label-enter');

let errorCylinderInput = document.querySelector('.error-inputs');
let resultCylinderInput = document.querySelector('.input-result-figure');

if(volumeCylinderFormula == null || errorCylinderInput == null || resultCylinderInput == null)
    ErrorDOMElement();

volumeCylinderFormula.style.display = 'none';

async function typeCylinderForm() {
    let typeFigureSelect = document.querySelector('.type-figure');
    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'cylinder') {
        let typeOperationSelect = document.querySelector('.cylinder-operation-select');

        if(typeOperationSelect == null || surfaceAreaCylinderFormula == null 
            || volumeCylinderFormula == null || labelCylinderEnterInput == null)
            ErrorDOMElement();

        await hiddenElements('.cylinder-info > article');

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
    return sa.toFixed(2).replace(/\.*0+$/, '');
}

function calcCylinderVolume(r, h) {
    const v = Number(h) * Math.PI * Math.pow(Number(r), 2);
    return v.toFixed(2).replace(/\.*0+$/, '');
}