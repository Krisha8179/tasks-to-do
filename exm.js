/*const btn= document.querySelector('.btn')
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='green'
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
}
)
btn.addEventListener('mouseover', (e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='red'
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
}
)
btn.addEventListener('mouseout', (e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='#ccc'
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
}
)
*/




const myform=document.querySelector('#my-form');
const inputName=document.querySelector('#name');
const inputEmail=document.querySelector('#email');
const userList=document.querySelector('#users');
const msg=document.querySelector('.msg');

myform.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(inputName ==='' || email.value ===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all the details';

        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li=document.createElement('li'); 
        li.appendChild(document.createTextNode(`${inputName.value} : ${inputEmail.value}`));

        userList.appendChild(li);
        localStorage.setItem(inputName.value,inputEmail.value);

        inputEmail.value='';
        inputName.value='';
    }
}