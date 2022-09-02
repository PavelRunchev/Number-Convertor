(function() {
    "use strict";
    
    let table = document.querySelector('.table');

    if(table == null)
        ErrorDOMElement;

    function createEl(el) {
        return document.createElement(`${el}`);
    }

    let thead = createEl('thead');
    thead.innerHTML = '<tr>' + 
        '<th scope="col">Decimal</th>' +
        '<th scope="col">Binary</th>' +
        '<th scope="col">Hex</th>' +
        '<th scope="col">Octal</th>' +
        '</tr>';
    table.appendChild(thead);

    let tbody = createEl('tbody');
    table.appendChild(tbody);

    //tableData extract from codeData.js!
    for (const row of globalData.tableData) {
        const [dec, bin, hex, oct] = row.split(' ');
        let tr = createEl('tr');
        tr.classList.add('tr-default');
        tr.innerHTML = `<td>${dec}</td><td>${bin}</td>`
            + `<td>${hex}</td><td>${oct}</td>`;
        tbody.appendChild(tr);
    }
    
})(window);