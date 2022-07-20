


document.querySelector('.sphere-operation-select').addEventListener('change', typeSphereForm);
let surfaceAreaSphereFormula = document.querySelector('.sphere-surface-area-formula');
let volumeSphereFormula = document.querySelector('.sphere-volume-formula');
let labelSphereEnterInput = document.querySelector('.sphere-label-enter');

let errorSphereInput = document.querySelector('.error-inputs');
let resultSphereInput = document.querySelector('.input-result-figure');

if(volumeSphereFormula == null || errorSphereInput == null || resultSphereInput == null)
    ErrorDOMElement();

volumeSphereFormula.style.display = 'none';

async function typeSphereForm() {
    let typeFigureSelect = document.querySelector('.type-figure');
    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'sphere') {
        let typeOperationSelect = document.querySelector('.sphere-operation-select');

        if(typeOperationSelect == null || surfaceAreaSphereFormula == null 
            || volumeSphereFormula == null || labelSphereEnterInput == null)
            ErrorDOMElement();

        await hiddenElements('.sphere-info > article');

        if(typeOperationSelect.value == 'surface-area') {
            surfaceAreaSphereFormula.style.display = 'block';
            labelSphereEnterInput.innerHTML = 'Surface area enter:';
        } else if(typeOperationSelect.value == 'volume') {
            volumeSphereFormula.style.display = 'block';
            labelSphereEnterInput.innerHTML = 'Volume enter:';
        }

        errorSphereInput.innerHTML = '';
        resultSphereInput.value = '';
    }
}

function  calcSphereSurfaceArea(r) {
    const sa = 4 * Math.PI * Math.pow(Number(r), 2);
    return sa.toFixed(2).replace(/0+$/, '');
}

function calcSphereVolume(r) {
    const v = Math.PI * Math.pow(Number(r), 3) * (4 / 3);
    return v.toFixed(2).replace(/0+$/, '');
}