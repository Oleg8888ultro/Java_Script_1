// document.querySelector('button').onclick = () => {

//     console.log(document.querySelector('#one').value);
// style
// document.querySelector('p').style.color =
// стили будут относиться к первому абзаццу
// document.querySelector('#one').value

//     document.querySelector('button').style.backgroundColor =
//         document.guerySelector('#one').value
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     // слушаем события на ползунке
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-2').onclick = () => {
    let text = document.querySelector('#two');
    console.log(text.value);
    text.value = 'привет';
}
