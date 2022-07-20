
document.querySelector('.trapezoid-operation-select').addEventListener('change', typeTrapezoidForm);

let trapezoidAreaFormula = document.querySelector('.trapezoid-area-formula');
let trapezoidPerimeterFormula = document.querySelector('.trapezoid-perimeter-formula');
trapezoidPerimeterFormula.style.display = 'none';
let labelTrapezoidEnterInput = document.querySelector('.trapezoid-label-enter');
let trapezoidVolumeInputs = document.querySelector('.trapezoid-volume');
trapezoidVolumeInputs.style.display = 'none';

async function typeTrapezoidForm() {
    let typeFigureSelect = document.querySelector('.type-figure');

    if(typeFigureSelect == null)
        ErrorDOMElement();

    if(typeFigureSelect.value == 'trapezoid') {
        await hiddenElements('.trapezoid-inputs > div > input');
        await hiddenElements('.trapezoid-info > article');

        if(typeOperationSelect.value == 'area') {
            //todo
        } else if(typeOperationSelect.value == 'perimeter') {
            //todo
        }
    }
}