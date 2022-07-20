
document.querySelector('.cone-operation-select').addEventListener('change', typeConeForm);
let surfaceAreaConeFormula = document.querySelector('.cone-surface-area-formula');
let volumeConeFormula = document.querySelector('.cone-volume-formula');
volumeConeFormula.style.display = 'none';
let labelConeEnterInput = document.querySelector('.cone-label-enter');

async function typeConeForm() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect.value == 'cone') {
        let typeOperationSelect = document.querySelector('.cone-operation-select');

        if(typeFigureSelect == null || typeOperationSelect == null || surfaceAreaConeFormula == null 
            || volumeConeFormula == null || labelConeEnterInput == null)
            ErrorDOMElement();

        await hiddenElements('.cone-info > article');

        if(typeOperationSelect.value == 'surface-area') {
            surfaceAreaConeFormula.style.display = 'block';
             labelConeEnterInput.innerHTML = 'Surface area enter:';
        } else if(typeOperationSelect.value == 'volume') {
            volumeConeFormula.style.display = 'block';
            labelConeEnterInput.innerHTML = 'Volume enter:';
        }
    } 
}

function calcConeSurfaceArea(r, h) {
    const t = Math.sqrt(Math.pow(Number(r), 2) + Math.pow(Number(h), 2));
    const sa = Math.PI * Number(r) * t + Math.PI * Math.pow(Number(r), 2);
    return sa.toFixed(2).replace(/0+$/, '');
}

function calcConeVolume(r, h) {
    const volume = (Math.PI * Math.pow(Number(r), 2) * Number(h)) / 3;
    return volume.toFixed(2).replace(/0+$/, '');
}

