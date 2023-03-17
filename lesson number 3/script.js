document.querySelector('button').onclick = myFunc
function myFunc() {
    console.log(document.querySelector('#one').value);
    // style
    // document.querySelector('p').style.color =
    // стили будут относиться к первому абзаццу
    // document.querySelector('#one').value

    document.querySelectorAll('p').forEach((el) => {
        el.style.color = document.querySelector('#one').value;
    });
    // пройтись циклом forEach 
}