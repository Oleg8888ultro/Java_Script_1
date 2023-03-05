let inputIn = document.querySelector('.input-in');   // input
let button = document.querySelector('button');   //button
let div = document.querySelector('.out');

button.onclick = function () {
    // кнопка будет нажата
    console.log('Работает');
    // console.log(inputIn.value);   // value - то что введено в input
    let b = +inputIn.value;   // сокращение предыдущего + преобразовует в число
    console.log(b + 2);
    div.innerHTML = b;      // перенос результата на HTML
    inputIn.value = '';   // очищает
}