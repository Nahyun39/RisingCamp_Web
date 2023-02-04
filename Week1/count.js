let plus = document.getElementById('increment');
let minus = document.getElementById('decrement');
let count = document.getElementById('num');
let totalcost = document.querySelector('.letter2');

let i = 0;

plus.addEventListener('click', function(){
    i+=1;
    count.innerHTML = i;
    let totalcostNum = 123300 * i;
    totalcost.innerHTML = '\n' + totalcostNum.toLocaleString();
})

minus.addEventListener('click', function(){
    if(i > 0){
        i-=1;
        count.innerHTML = i;
        let totalcostNum = i * 123300;
        totalcost.innerHTML = totalcostNum.toLocaleString();
    }
    else{
        totalcost.innerHTML =  0;
    }
})