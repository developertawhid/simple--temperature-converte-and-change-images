const tempImage = document.querySelector('.tempImage img');
const option = document.querySelector('#option');
const input = document.querySelector('#input');

const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');

const selactC = document.querySelector('#selactCelsius');
const selactF = document.querySelector('#selectFahrenheit');
const selactK = document.querySelector('#selectKelvin');

const convert = document.querySelector('#convert');
let editValue = 'celsius';


const result = () => {

    let inputVal = input.value;
    if(editValue === 'celsius') {
        celsius.innerHTML = Math.floor(+inputVal) + '<span>°C</span>';
        fahrenheit.innerHTML = Math.floor((+inputVal * 9/5) + 32) + '<span>°F</span>';
        kelvin.innerHTML = Math.floor(+inputVal + 273.15) + '<span>K</span>';
    }else if(editValue === 'fahrenheit') {
        celsius.innerHTML = Math.floor((+inputVal - 32) * 5/9) + '<span>°C</span>';
        fahrenheit.innerHTML = Math.floor(+inputVal) + '<span>°F</span>';
        kelvin.innerHTML = Math.floor((+inputVal - 32) * 5/9 + 273.15) + '<span>K</span>';
    }else if(editValue === 'kelvin') {
        celsius.innerHTML = Math.floor(+inputVal - 273.15) + '<span>°C</span>';
        fahrenheit.innerHTML = Math.floor((+inputVal - 273.15) * 9/5 + 32) + '<span>°F</span>';
        kelvin.innerHTML = Math.floor(+inputVal) + '<span>K</span>';
    }

    let temp = parseFloat(celsius.innerText);
    if(temp <= -30){
         tempImage.src = 'https://images.unsplash.com/photo-1584200862681-040f5bdc5984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80';
    }else if(temp > -30 && temp <= -10){
        tempImage.src = 'https://images.unsplash.com/photo-1515008736322-38eadfce9ece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80';
    }else if(temp > -10 && temp <= 0){
        tempImage.src = 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80';
    }else if(temp > 0 && temp <= 15){
        tempImage.src = 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 15 && temp <= 28){
        tempImage.src = 'https://images.unsplash.com/photo-1597198899201-1903257fb9a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > -28 && temp <= 35){
        tempImage.src = 'https://images.unsplash.com/photo-1556016069-0a64d35719db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';
    }else if(temp > 35 && temp <= 40){
        tempImage.src = 'https://images.unsplash.com/photo-1521223619409-8085d2607891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';
    }else if(temp > 40 && temp <= 100){
        tempImage.src = 'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 100 && temp <= 500){
        tempImage.src = 'https://images.unsplash.com/photo-1502030818212-8601501607a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 500 && temp <= 1000){
        tempImage.src = 'https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
    }else if(temp > 1000) {
        tempImage.src = 'https://bengali.oneindia.com/img/2016/05/04-1462338456-mercury-transit-in-virgo.jpg';
    }else {
        tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
    }
};


 (function(){ 
function addCass(){
    selactC.classList.add('active')
    selactF.classList.add('active')
    selactK.classList.add('active')
};

option.addEventListener('click', ()=> {

    option.classList.remove('active')
    selactC.classList.add('active')
    selactF.classList.add('active')
    selactK.classList.add('active')
}) 
   
selactC.addEventListener('click', ()=> {

    input.placeholder = 'celsius';
    editValue = 'celsius';
    if(!selactF.classList.contains('active')){ 
        addCass()
    }else{
        selactF.classList.remove('active')
        selactK.classList.remove('active')
    }
}) 
   
selactF.addEventListener('click', ()=> {

    input.placeholder = 'fahrenheit';
    editValue = 'fahrenheit';
    if(!selactC.classList.contains('active')){ 
        addCass()
    }else{
        selactC.classList.remove('active')
        selactK.classList.remove('active')
    }
}) 
   
selactK.addEventListener('click', ()=> {

    input.placeholder = 'kelvin';
    editValue = 'kelvin';
    if(!selactF.classList.contains('active')){ 
        addCass();
    }else{
        selactF.classList.remove('active')
        selactC.classList.remove('active')
    }
}) 

})();


convert.addEventListener('click', ()=> {

        result();
    
    if(!input.value) {
        fahrenheit.value = 0;
        kelvin.value = 0;
        tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
    }
    input.value = '';
})



