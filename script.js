const html = document.querySelector('html');
const body = document.querySelector('body');
const left = document.querySelector('#left');
const formContainer = document.querySelector('#formcontainer');
const loginBtn = document.querySelector('#login');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const label = document.querySelectorAll('label');

function darkTheme() {
    html.style.backgroundColor = 'var(--darkbackground)';
    body.style.backgroundColor = 'var(--darktheme1)';
    left.style.backgroundColor = 'var(--darktheme2)';
    loginBtn.style.background = 'linear-gradient(90deg, #24122b, #121f2b)';
    label.style.color = '#FFFFFF';
}
function lightTheme() {
    html.style.backgroundColor = 'var(--background)';
    body.style.backgroundColor = '#FFFFFF';
    left.style.backgroundColor = 'var(--split1)';
    loginBtn.style.background = 'linear-gradient(90deg, var(--split1), var(--split2))';
    label.style.color = '#000000';
}

darkBtn.addEventListener('click', darkTheme);
lightBtn.addEventListener('click', lightTheme);