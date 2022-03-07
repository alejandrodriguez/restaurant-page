import initializeWebsite from './initialize-website';
import './style.css';
import { changeToContactPage } from './contact-page.js';

initializeWebsite();

const contactBtn = document.querySelector('.contactbtn');
const menuBtn = document.querySelector('menubtn');

contactBtn.addEventListener('click', changeToContactPage);
// menuBtn.addEventListener('click', changeToMenuPage);