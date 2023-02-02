let body = document.querySelector('.main');
let Container = constructElements('div', { class: 'Container' });

let form = constructElements('form', { class: 'formElements' });

let profileUser = constructElements('div', { class: 'profile' })

let h = constructElements('h1', { class: 'texting'});

let user =constructElements('input')

let button = constructElements('button', { class: 'button'} )

let remember =constructElements('h4')
let forgot = constructElements('a')
let footer = constructElements('div');
let not = constructElements('h4');
let create = constructElements('a')

appendChildren(body, [Container]);
Container.appendChild(form);
Container.style.height='55rem';
Container.style.width = '50%';
Container.style.margin = '10rem';
Container.style.background='white';
Container.style.marginLeft='40rem';
Container.style.display='flex';

form.appendChild(profileUser)
form.style.width= '60%';
form.style.marginLeft= '20%';
form.style.height= '50px';
form.style.background='rgba(128, 128, 128, 0.164)';
form.style.marginTop ='190px';
profileUser.style.marginTop='-150px';
profileUser.style.marginLeft='170px';
profileUser.style.background='blue';
profileUser.style.width = '8rem';
profileUser.style.height = '-3rem';
profileUser.style.borderRadius = '50%';
profileUser.style.paddingTop = '8rem';

form.appendChild(h);
h.textContent='Sign In';
h.style.marginTop='1rem';
h.style.marginLeft='15rem';
h.style.fontSize='50px';

form.appendChild(user);
user.style.width= '100%';
user.style.border='none';
user.style.height= '50px';
user.style.background='rgba(128, 128, 128, 0.164)';
user.style.marginTop ='50px';

form.appendChild(button);
button.style.background ='blue';
button.style.width='100%';
button.style.height='50px';
button.style.border ='none';
button.style.marginTop = '30px';
button.textContent='Sign In';
button.style.color='white';
button.style.fontSize = '20px'

form.appendChild(remember);
form.appendChild(forgot);
form.appendChild(footer);
remember.textContent='Remember Me';
forgot.textContent='Forgot Password';
forgot.style.color='blue'
footer.style.backgroundColor='rgba(128, 128, 128, 0.164)';
footer.style.width='168%';
footer.style.height='7rem';
footer.style.marginLeft='-160px';
footer.style.marginTop='27px';
footer.style.display='flex';

footer.appendChild(not)
not.textContent='Not a Member?';
not.style.textAlign='center';

footer.appendChild(create)
create.textContent='Create an Account';
create.style.color='blue';

function constructElements(tag = '', attribute = {}) {
    tag = tag == '' ? 'div' : tag;

    const createElement = document.createElement(tag);

    for (let [key, value] of Object.values(attribute)) {
        if (key == 'class') {
            createElement.classList.add(value)
        } else {
            createElement.setAttribute(key, value)
        }
    }
    return createElement;
}

function appendChildren(parent, children = []) {
    if (children.length == 1) {
        parent.appendChild(children[0]);
        return parent;

    } else {
        children.forEach(function (child) {
            parent.appendChild(child);
        })
    }
    return parent
}
