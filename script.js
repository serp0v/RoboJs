// query header btns
const logoBtn = document.querySelector('#logoBtn');
const homeBtn = document.querySelector('#homeBtn');
const robotsBtn = document.querySelector('#robotsBtn');
const softwareBtn = document.querySelector('#softwareBtn');
const contactBtn = document.querySelector('#contactBtn');
const logBtn = document.querySelector('#logBtn');
const signBtn = document.querySelector('#signBtn');

// query header pages

const homePage = document.querySelector('#homePage');
const robotsPage = document.querySelector('#robotsPage');
const softwarePage = document.querySelector('#softwarePage');
const contactPage = document.querySelector('#contactPage');

// query header forms

const logForm = document.querySelector('#logForm');
const signForm = document.querySelector('#signForm');

// header nav onclick (dn = css display none class)

function displayNonePages() {
    robotsPage.classList.add('dn');
    homePage.classList.add('dn');
    softwarePage.classList.add('dn');
    contactPage.classList.add('dn');
} 

logoBtn.onclick = () => {
    if (homePage.classList = 'dn') {
        displayNonePages();
        homePage.classList.remove('dn');
    }
}
homeBtn.onclick = () => {
    if (homePage.classList = 'dn') {
        displayNonePages();
        homePage.classList.remove('dn');
    }
}
robotsBtn.onclick = () => {
    if (robotsPage.classList = 'dn') {
        displayNonePages();
        robotsPage.classList.remove('dn');
    }
}
softwareBtn.onclick = () => {
    if (softwarePage.classList = 'dn') {
        displayNonePages();
        softwarePage.classList.remove('dn');
    }
}
contactBtn.onclick = () => {
    if (contactPage.classList = 'dn') {
        displayNonePages();
        contactPage.classList.remove('dn');
    }
}
logBtn.onclick = () => {
    logForm.classList.remove('dn');
}
signBtn.onclick = () => {
    signForm.classList.remove('dn');
}


// move id's to <1200px width design