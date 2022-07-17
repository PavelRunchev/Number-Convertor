
const url = "https://api.currencylayer.com/live";
//const validKey = "0d1e83725345e2d4946384a45140c1ee";
const apiKey = "xYKM2Kw2kPCTR84dwDxKGYT3spBBSCeM";
const vatNumber = "LU26375245";

fetch(`${url}/?access_key=${apiKey}`)
    .then(response => response.json())
    .then(json => console.log(json));