function setCookies() {
    const name = document.getElementById('firstname');
    const email = document.getElementById('email');

    document.cookie = `firstname=${name.value};`;
    document.cookie = `email=${email.value};`;

}

function showCookies() {
    let p = document.createElement('p');
    p.innerHTML = `Cookies: ${decodeURIComponent(document.cookie)};`;
    document.body.appendChild(p);
}
