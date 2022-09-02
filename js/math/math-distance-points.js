//*
// Distance 2D and 3D Points
//*
(function() {
    "use strict"
    function calcDistance2Points(p1, p2) {
        const result = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        //removeZerosAfterDecimalPoint is global function from global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(result.toFixed(4));
    }

    function calcDistance3Points(p1, p2) {
        const result = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2));
        //removeZerosAfterDecimalPoint is global function from global-functions.js
        return globalFunc.RemoveZerosAfterDecimalPoint(result.toFixed(4));
    }

    let slectChangeDimensionalPlane = document.querySelector('.dimensionalPlane');
    let btnCalculate = document.querySelector('.btn-calculate-distance-betweem-points');
    let inputs2D = document.querySelector('.container-input-2dpoints');
    let inputs3D = document.querySelector('.container-input-3dpoints');
    let info2D = document.querySelector('.info2D');
    let info3D = document.querySelector('.info3D');
    let labelError = document.querySelector('.label-error-distance-points');
    let inputDistancePointsResult = document.querySelector('.input-distance-points-result');

    if(inputs2D == null || inputs3D == null || info2D == null || info3D == null 
        || btnCalculate == null || slectChangeDimensionalPlane == null 
        || labelError == null || inputDistancePointsResult == null)
        globalFunc.ErrorDOMElement();

    slectChangeDimensionalPlane.addEventListener('change', showHideInputsPoint);
    btnCalculate.addEventListener('click', calculateDistancePoints);
    inputs3D.style.display = 'none';
    info3D.style.display = 'none';

    function showHideInputsPoint() {
        let selectDimensionalPlane = document.querySelector('.dimensionalPlane');

        if(selectDimensionalPlane.value == '2d-points') {
            globalFunc.ClearInputs('.container-input-2dpoints input[type="number"]');
            inputs3D.style.display = 'none';
            info3D.style.display = 'none';
            inputs2D.style.display = 'block';
            info2D.style.display = 'block';
        } else if(selectDimensionalPlane.value == '3d-points') {
            globalFunc.ClearInputs('.container-input-3dpoints input[type="number"]');
            inputs2D.style.display = 'none';
            info2D.style.display = 'none';
            inputs3D.style.display = 'block';
            info3D.style.display = 'block';
        } else {
            globalFunc.ErrorOperation(labelError, 'Invalid Operation!');
        }

        inputDistancePointsResult.value = '';
    }

    function calculateDistancePoints(e) {
        e.preventDefault();
        let selectDimensionalPlane = document.querySelector('.dimensionalPlane');
        
        if(selectDimensionalPlane.value == '2d-points') {
            const [x1, y1, x2, y2] = document.querySelectorAll('.container-input-2dpoints input[type="number"]');

            if(x1.value != '' && globalFunc.CheckIsNumber(x1.value) && y1.value != '' && globalFunc.CheckIsNumber(y1.value) 
                && x2.value != '' && globalFunc.CheckIsNumber(x2.value) && y2.value != '' && globalFunc.CheckIsNumber(y2.value)) {
                const p1 = {
                    x: Number(x1.value),
                    y: Number(y1.value)
                };
                const p2 = {
                    x: Number(x2.value),
                    y: Number(y2.value)
                };
                inputDistancePointsResult.value = calcDistance2Points(p1, p2);
                labelError.innerHTML = '';
            } else {
                globalFunc.ErrorOperation(labelError, 'Inputs must be a number!');
            }
        } else if(selectDimensionalPlane.value == '3d-points') {
            const [x1, y1, z1, x2, y2, z2] = document.querySelectorAll('.container-input-3dpoints input[type="number"]');

            if(x1.value != '' && globalFunc.CheckIsNumber(x1.value) && y1.value != '' 
                && globalFunc.CheckIsNumber(y1.value) 
                && z1.value != '' && x2.value != '' 
                && globalFunc.CheckIsNumber(x2.value) && y2.value != '' 
                && globalFunc.CheckIsNumber(y2.value) && z2.value != ''
                && globalFunc.CheckIsNumber(z1.value && globalFunc.CheckIsNumber(z2.value))) {
                const p1 = {
                    x: Number(x1.value),
                    y: Number(y1.value),
                    z: Number(z1.value)
                };
                const p2 = {
                    x: Number(x2.value),
                    y: Number(y2.value),
                    z: Number(z2.value)
                };
                inputDistancePointsResult.value = calcDistance3Points(p1, p2);
                labelError.innerHTML = '';
            } else {
                globalFunc.ErrorOperation(labelError, 'Inputs must be a number!');
            }
        } else {
            globalFunc.ErrorOperation(labelError, 'Invalid Operation!');
        }
    }
})();
