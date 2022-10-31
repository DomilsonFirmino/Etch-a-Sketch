const game_body = document.querySelector('.game__body')

let size = 16

function gene(){
    for (let i = 0; i < size*size; i++){
        let a = document.createElement('div');
        a.classList.add('card');
        game_body.appendChild(a);
    }
}
