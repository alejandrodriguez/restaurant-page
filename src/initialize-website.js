export default function initializeWebsite() {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const nav = document.createElement('nav');
    const logoWrapper = document.createElement('div');
    const logo = document.createElement('img');
    const contactBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const restaurantName = document.createElement('h1');
    const mealImg = document.createElement('img');
    const quote = document.createElement('p');

    logoWrapper.appendChild(logo);
    nav.appendChild(logoWrapper);
    nav.appendChild(contactBtn);
    nav.appendChild(menuBtn);

    logo.setAttribute('src', '../src/images/logo.png')
    logo.setAttribute('alt', 'The Taco Shack Logo')
    mealImg.setAttribute('src', '../src/images/tacos.jpeg')
    mealImg.setAttribute('alt', 'Delicious tacos offered by The Taco Shack.')
    
    contactBtn.textContent = 'Contact';
    menuBtn.textContent = 'Menu';
    restaurantName.textContent = 'The Taco Shack';
    quote.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    logo.classList.add('logo');
    contactBtn.classList.add('contactbtn');
    menuBtn.classList.add('menubtn');
    mealImg.classList.add('mealimg');

    main.appendChild(restaurantName);
    main.appendChild(restaurantName);
    main.appendChild(mealImg);
    main.appendChild(quote);

    content.appendChild(nav);
    content.appendChild(main);
}