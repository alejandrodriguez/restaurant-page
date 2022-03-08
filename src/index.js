import initializeWebsite from './initialize-website';
import './style.css';
import { goHome } from './go-home.js'
import { goToContactPage } from './contact-page.js';
import { goToMenuPage } from './menu-page.js';

initializeWebsite();

const logo = document.querySelector('.logo');
const contactBtn = document.querySelector('.contactbtn');
const menuBtn = document.querySelector('.menubtn');

logo.addEventListener('click', goHome);
contactBtn.addEventListener('click', goToContactPage);
menuBtn.addEventListener('click', goToMenuPage);