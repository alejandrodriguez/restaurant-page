export function goToMenuPage() {
    const content = document.querySelector('#content');
    const newContent = document.createElement('div');
    const nav = document.querySelector('nav');
    const contactBtn = document.querySelector('.contactbtn');
    const menuBtn = document.querySelector ('.menubtn');
    const menuWrapper = document.createElement('div');
    const appetizerWrapper = document.createElement('div');
    const entreeWrapper = document.createElement('div');
    const dessertWrapper = document.createElement('div');
    const drinkWrapper = document.createElement('div');
    
    let appetizers = [];
    for(let i = 0; i < 3; i++) { // Create appetizers for the menu
        if(i === 0) {
            appetizers[0] = document.createElement('h3');
            appetizers[0].textContent = 'Appetizers';
            continue;
        }
        appetizers[i] = document.createElement('p');
        switch(i) {
            case 1:
                appetizers[i].textContent = 'Nachos';
                break;
            case 2:
                appetizers[i].textContent = 'Chips & Salsa';
                break;
        }
    }

    let entrees = [];
    for(let i = 0; i < 6; i++) { // Create entrees for the menu
        if(i === 0) {
            entrees[0] = document.createElement('h3');
            entrees[0].textContent = 'Entrees';
            continue;
        }
        entrees[i] = document.createElement('p');
        switch(i) {
            case 1:
                entrees[i].textContent = 'Tacos';
                break;
            case 2:
                entrees[i].textContent = 'Burrito';
                break;
            case 3:
                entrees[i].textContent = 'Enchillada';
                break;
            case 4:
                entrees[i].textContent = 'Quesadilla';
                break;
            case 5:
                entrees[i].textContent = 'Rice & Beans';
                break;
        }
    }

    let desserts = [];
    for(let i = 0; i < 3; i++) { // Create desserts for the menu
        if(i === 0) {
            desserts[0] = document.createElement('h3');
            desserts[0].textContent = 'Desserts';
            continue;
        }
        desserts[i] = document.createElement('p');
        switch(i) {
            case 1:
                desserts[i].textContent = 'Churros';
                break;
            case 2:
                desserts[i].textContent = 'Apple Empanada';
                break;
        }
    }

    let drinks = [];
    for(let i = 0; i < 4; i++) { // Create drinks for the menu
        if(i === 0) {
            drinks[0] = document.createElement('h3');
            drinks[0].textContent = 'Drinks';
            continue;
        }
        drinks[i] = document.createElement('p');
        switch(i) {
            case 1:
                drinks[i].textContent = 'Horchata';
                break;
            case 2:
                drinks[i].textContent = 'Jarrito';
                break;
            case 3:
                drinks[i].textContent = 'Cola';
                break;
        }
    }

    for(let i = 0; i < appetizers.length; i++) {
        appetizerWrapper.appendChild(appetizers[i]);
    }

    for(let i = 0; i < entrees.length; i++) {
        entreeWrapper.appendChild(entrees[i]);
    }

    for(let i = 0; i < desserts.length; i++) {
        dessertWrapper.appendChild(desserts[i]);
    }

    for(let i = 0; i < drinks.length; i++) {
        drinkWrapper.appendChild(drinks[i]);
    }

    menuWrapper.appendChild(appetizerWrapper);
    menuWrapper.appendChild(entreeWrapper);
    menuWrapper.appendChild(dessertWrapper);
    menuWrapper.appendChild(drinkWrapper);

    newContent.id = 'content';
    newContent.appendChild(nav);
    newContent.appendChild(menuWrapper);

    content.remove();

    document.body.appendChild(newContent);

    contactBtn.classList.remove('selected');
    menuBtn.classList.add('selected');
}