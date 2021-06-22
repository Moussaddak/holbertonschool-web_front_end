let createElement = function(data) {
    let p = document.createElement('p');
    let content = document.createTextNode(data);
    p.appendChild(content);
    document.body.appendChild(p);
};

let queryWikipedia = () => {
    const URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.responseText)
        }
    }
    xhr.open('GET', URL);
    xhr.send("");
};

queryWikipedia(createElement);
