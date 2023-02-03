let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('num');
let integer = 0;

add.addEventListener('click', function(){
    integer+=1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer-=1;
    int.innerHTML = integer;
})