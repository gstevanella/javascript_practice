
let input = document.querySelector('input');

input.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13) {
        console.log(e.target.value);
    }
})

//last challenge of the chapter

const numbers = [40, 38, 37, 93, 55, 66];
const filteredNumbers = numbers.filter(function (number) {
    return number > 50;
});
  
console.log(filteredNumbers);