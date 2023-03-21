document.querySelector('button').onclick = () => {

    console.log(document.querySelector('#one').value);
    // style
    // document.querySelector('p').style.color =
    // стили будут относиться к первому абзаццу
    // document.querySelector('#one').value

    document.querySelector('button').style.backgroundColor =
        document.guerySelector('#one').value
}

document.querySelector('#one').oninput = () => {
    console.log(document.querySelector('#one').value);
    // слушаем события на ползунке
    document.querySelector('span').innerHTML = document.querySelector('#one').value
}