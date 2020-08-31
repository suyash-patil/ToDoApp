const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', function(){
    if(input.value.length){
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
    
})

input.addEventListener('keypress', function(e){
    if(input.value.length && e.keyCode === 13){
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
    
})