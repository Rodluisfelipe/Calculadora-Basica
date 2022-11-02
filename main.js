let buttons = document.querySelectorAll('.buttons');
let btn = document.querySelectorAll('span');
let value = document .getElementById('value');


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
        if (this.innerHTML == "Clear") {
            value.innerHTML= "";
        } 
        else if (this.innerHTML == "⌦") {
        value.innerHTML = value.innerHTML.slice(0, -1);
        }
        else {
            value.innerHTML += this.innerHTML;
        }
}})
}
value.innerHTML= value.innerHTML.slice(0, -1);