
let test = document.getElementsByClassName('test2')[0];//le boutton 'Rechercher'
test.addEventListener('mousedown',testOnClick);

let machin = document.getElementsByClassName('machin')[0];//logo booki
machin.addEventListener('click',disparaitre); //'click' ne fonctionne pas avec un formulaire ou submit car refresh le html ?

// window.onload = function() {
//     testOnClick();
//     alert('page is load');
// };



function testOnClick(){
    //let test = document.getElementById('test');
    //alert(test.length);
    //test.style.backgroundColor = 'red';
    let test2 = document.getElementsByClassName('test2')[0];
    test2.style.backgroundColor = 'yellow';
}

function disparaitre(){
    let truc = document.getElementsByClassName('truc')[0];
    truc.hidden = true;
}