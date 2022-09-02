
function mathTable(tBodyTag, tableData, delimiter) {
    if(tBodyTag == null || tableData == null)
        ErrorDomElement;

    for (const row of tableData) {
        const [left, right] = row.split(delimiter);
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${left}</td><td>${right}</td>`;
        tBodyTag.appendChild(tr);
    }
}