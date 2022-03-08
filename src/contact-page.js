export function goToContactPage() {
    const content = document.querySelector('#content');
    const newContent = document.createElement('div');
    const nav = document.querySelector('nav');
    const contactBtn = document.querySelector('.contactbtn');
    const menuBtn = document.querySelector ('.menubtn');
    const managerWrapper = document.createElement('div');
    const managerPhoto = document.createElement('img');
    const managerName = document.createElement('h2');
    const managerEmail = document.createElement('h4');
    const managerPhone = document.createElement('h4');
    const managerPersonalPhone = document.createElement('h4');
    const addressWrapper = document.createElement('figure');
    const managerAddress = document.createElement('iframe');
    const addressCaption = document.createElement('figcaption');
    const managerSS = document.createElement('h4');
    const managerBankInfo = document.createElement('h4');
    const managerDarkestSecret = document.createElement('h4');

    newContent.id = 'content';
    managerPhoto.classList.add('managerphoto');

    managerPhoto.setAttribute('src', '../src/images/manager.jpeg');
    managerPhoto.setAttribute('alt', 'The Taco Shack\'s big boss man.');
    managerAddress.setAttribute('src', '../src/images/manager-address.png');
    managerAddress.setAttribute('alt', 'This is where Mr. Boss Man lives.')

    managerName.textContent = 'John Smith, Manager.';
    managerEmail.textContent = 'emailmehere@mailme.com';
    managerPhone.textContent = 'His work phone: 555-0123';
    managerPersonalPhone.textContent = 'His personal cell: 555-5155';
    addressCaption.textContent = 'John\'s address. Pay him a visit.'
    managerSS.textContent = 'Here\'s John\'s social security number: 123-12-1234'
    managerBankInfo.textContent = 'You want his bank info? PIN: 0000. He keeps his credit card under his pillow.'
    managerDarkestSecret.textContent = 'John\'s darkest secret: He likes anchovies on pizza. Use this against him.'

    addressWrapper.appendChild(managerAddress);
    addressWrapper.appendChild(addressCaption);

    managerWrapper.appendChild(managerPhoto);
    managerWrapper.appendChild(managerName);
    managerWrapper.appendChild(managerEmail);
    managerWrapper.appendChild(managerPhone);
    managerWrapper.appendChild(managerPersonalPhone);
    managerWrapper.appendChild(addressWrapper);
    managerWrapper.appendChild(managerSS);
    managerWrapper.appendChild(managerBankInfo);
    managerWrapper.appendChild(managerDarkestSecret);

    newContent.appendChild(nav);
    newContent.appendChild(managerWrapper);

    content.remove();

    document.body.appendChild(newContent);

    contactBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
}