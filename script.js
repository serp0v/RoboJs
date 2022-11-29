const robots = document.querySelector('#robots');
const homePage = document.querySelector('#homePage');
const robotsPage = document.querySelector('#robotsPage');
const logBtn = document.querySelector('#logBtn');
const signBtn = document.querySelector('#signBtn');
robots.onclick = () => {
    homePage.classList.add('dn');
    robotsPage.classList.remove('dn');
}
logBtn.onclick = () => {
    logForm.classList.remove('dn');
}
signBtn.onclick = () => {
    signForm.classList.remove('dn');
}