const buttonadd = document.getElementById(`button-add`);
const buttonsub =document.getElementById(`button-sub`);
const buttonmul =document.getElementById(`button-mul`);
const buttondiv =document.getElementById(`button-div`);
const box = document.getElementById('box');
const num1= document.getElementById('num1');
const num2 = document.getElementById('num2');



const getNum1 = () =>{
    const number1=Number.parseFloat(num1.value);
    return number1;
};

const getNum2 = () =>{
    const number2=Number.parseFloat(num2.value);
    return number2;
};

const showResult = (num) =>{
  document.getElementById(`box`).textContent=num;
};

buttonadd.addEventListener(`click`,() =>{
  const result = getNum1() + getNum2();
  showResult(result);
});

buttonsub.addEventListener(`click`, () =>{
 const result = getNum1() - getNum2();
 showResult(result);
});

buttonmul.addEventListener(`click` , () => {
  const result = getNum1() * getNum2() ;
  showResult(result);
});

buttondiv.addEventListener(`click` , () => {
  const result = getNum1() / getNum2() ;
  showResult(result);
});