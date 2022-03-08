export function goHome() {
    const content = document.querySelector('#content');
    const newContent = document.createElement('div');
    const nav = document.querySelector('nav');
    const contactBtn = document.querySelector('.contactbtn');
    const menuBtn = document.querySelector('.menubtn');
    const restaurantName = document.createElement('h1');
    const mealImg = document.createElement('img');
    const quote = document.createElement('p');

    newContent.id = 'content';

    mealImg.setAttribute('src', '../src/images/tacos.jpeg')
    mealImg.setAttribute('alt', 'Delicious tacos offered by The Taco Shack.')
    
    restaurantName.textContent = 'The Taco Shack';
    quote.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    mealImg.classList.add('mealimg');

    newContent.appendChild(nav);
    newContent.appendChild(restaurantName);
    newContent.appendChild(mealImg);
    newContent.appendChild(quote);

    content.remove();

    document.body.appendChild(newContent);

    contactBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
}