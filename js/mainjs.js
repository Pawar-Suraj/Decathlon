function darkMode() {
    const imgDark = document.getElementById("img-dark");
    imgDark.classList.add('activeth');

    const imglight = document.getElementById("img-light");
    imglight.classList.remove('activeth');

    const bodyElement = document.getElementById('body');
    bodyElement.className = "theme-dark"

    const header = document.getElementById("header");
    header.classList.add('bg-dark');
    header.classList.add('text-light');
    header.dataset.bsTheme = 'dark';

    const footer = document.getElementById('footer');
    footer.className = 'footer-dark';

}
function lightMode() {
    const imglight = document.getElementById("img-light");
    imglight.classList.add('activeth');
    const imgDark = document.getElementById("img-dark");
    imgDark.classList.remove('activeth');

    const bodyElement = document.getElementById('body');
    bodyElement.className = "theme-light"

    const header = document.getElementById("header");
    header.classList.add('bg-light');
    header.classList.add('text-dark');
    header.dataset.bsTheme = 'light';

    const footer = document.getElementById('footer');
    footer.classList.remove('footer-dark');
}

