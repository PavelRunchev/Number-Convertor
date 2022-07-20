
//Triangular Prism Options
document.querySelector('.triangular-prism-operation-select').addEventListener('change', typeTringularPrismForm);

let inputsSurfaceArea = document.querySelector('.traingular-prism-surface-area');
let inputsVolume = document.querySelector('.traingular-prism-volume');
let surfaceAreaInfo = document.querySelector('.triangularPrism-surface-area-formula');
let volumeInfo = document.querySelector('.triangularPrism-volume-formula');
let labelEnterInput = document.querySelector('.traingular-prism-label-enter');

if(inputsSurfaceArea == null || inputsVolume == null 
    || surfaceAreaInfo == null || volumeInfo == null || labelEnterInput == null)
    ErrorDOMElement();

inputsVolume.style.display = 'none';
volumeInfo.style.display = 'none';

async function typeTringularPrismForm() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'triangular-prism') {
        let typeOperationSelect = document.querySelector('.triangular-prism-operation-select');
        if(inputsSurfaceArea == null || inputsVolume == null || surfaceAreaInfo == null 
            || volumeInfo == null || labelEnterInput == null || typeOperationSelect == null)
            ErrorDOMElement();

        await hiddenElements('.traingular-prism-inputs > div');
        await hiddenElements('.triangularPrism-info > article');
        
        if(typeOperationSelect.value == 'surface-area') {
            inputsSurfaceArea.style.display = 'flex';
            surfaceAreaInfo.style.display = 'block';
            labelEnterInput.innerHTML = 'Surface area enter:';
        } else if(typeOperationSelect.value == 'volume') {
            inputsVolume.style.display = 'flex';
            volumeInfo.style.display = 'block';
            labelEnterInput.innerHTML = 'Volume enter:';
        }
    }
}

function calcTriangularPrismSurficeArea(b, h, l, c) {
    const frontTriangle = Number(b) * Number(h);
    const sideRectangles = 2 * (Number(c) * Number(l));
    const bottomRectangle = Number(b) * Number(l);
    const sa = frontTriangle + sideRectangles + bottomRectangle;
    return sa.toFixed(2).replace(/0+$/, '');
}

function calcTriangularPrismVolume(w, h, l) {
    const volume = (Number(w) * Number(h) * Number(l)) / 2;
    return volume.toFixed(2).replace(/0+$/, '');
}