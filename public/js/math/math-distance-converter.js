//*
// Distance Converter
//*
(function() {
    "use strict"
    const meterData = { 'km': 1000, 'm': 1, 'cm': 0.01, 'mm': 0.001, 'mi': 1609.34, 'nm': 1852, 'yrd': 0.9144, 'ft': 0.3048, 'in': 0.0254 };
    const aroundData = { 'mi': 8, 'nm': 9, 'km': 6, 'cm': 2, 'mm': 1, 'm': 4, 'yrd': 4, 'ft': 4, 'in': 3};

    let btnConvertDistance = document.querySelector('.btn-convert-distance')
    let inputDistanceResult = document.querySelector('.input-distance-converter-result');

    let clipboardDistance = document.querySelector('.clipboard-distance');
    let coppiedClipBoardDistance = document.querySelector('.coppidClipboard-distance');
    let codeTagDistanceConvert = document.querySelector('.code-distance-conversion');

    let selectFromDistance = document.querySelector('.form-select-from-distance');

    if(btnConvertDistance == null || inputDistanceResult == null || clipboardDistance == null 
        || coppiedClipBoardDistance == null || codeTagDistanceConvert == null || selectFromDistance == null)
        globalFunc.ErrorDomElement();

    clipboardDistance.addEventListener('click', getCodeDistanceConvert);
    coppiedClipBoardDistance.addEventListener('click', returnClipboardDistanceConvert);
    btnConvertDistance.addEventListener('click', convertDistance);
    selectFromDistance.addEventListener('change', changeSelectFromDistance);

    //set table distance converter
    let tbodyDistance = document.querySelector('.tbody-distance');
    //function distanceData is get from codeData.js
    globalFunc.mathTable(tbodyDistance, globalData.distanceData, ':');

    function getCodeDistanceConvert(e) {
        e.preventDefault();
        globalFunc.GetCode(clipboardDistance, coppiedClipBoardDistance, codeTagDistanceConvert);
    }

    function returnClipboardDistanceConvert(e) {
        e.preventDefault();
        globalFunc.ReturnClipboard(clipboardDistance, coppiedClipBoardDistance);
    }

    function changeSelectFromDistance(e) {
        e.preventDefault();
        let input = document.querySelector('.input-distance-converter');

        if(input.value == ''|| input.value == '0') return;

        convertDistance(e);
    }

    function convertDistance(e) {
        e.preventDefault();
        let input = document.querySelector('.input-distance-converter');
        let selectFromDistance = document.querySelector('.form-select-from-distance');
        let selectToDistance = document.querySelector('.form-select-to-distance');

        //imported function in math-global-function.js
        if(input == null || selectFromDistance == null || selectToDistance == null)
            globalFunc.ErrorDOMElement();

        if(input.value == '') return;

        let convert = Number(input.value) * (meterData[selectFromDistance.value] / meterData[selectToDistance.value]);
        convert = convert.toFixed(aroundData[selectToDistance.value])
        //removeZerosAfterDecimalPoint is global function from global-functions.js
        inputDistanceResult.value = `${globalFunc.RemoveZerosAfterDecimalPoint(convert)} ${selectToDistance.value}`;
    }

    //imported codeDistanceConvert from codeData.js!
    codeTagDistanceConvert.innerHTML = `<pre>${globalData.codeDistanceConvert}</pre>`;
})(window);