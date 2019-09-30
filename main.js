const btnConvert = document.getElementById("btn-convert");
const btnClear = document.getElementById("btn-clear");
const userInput = document.getElementById("user-input-field");
const output = document.getElementById("output");
const fahrenheit = document.getElementById("rdb-fahrenheit");
const celisius = document.getElementById("rdb-celsius");

const toCelsius =  () => {
    const number = userInput.value;
    const inCelisius = (number-32)*5/9;
    output.innerHTML = inCelisius;
    if(inCelisius>32){  
      output.style.color = "white";   
      output.style.backgroundColor = "red";;
      output.value = Math.round(inCelisius)+' °C'; 
    }else if(inCelisius<0){
      output.style.color = "white";
      output.style.backgroundColor = "blue";;
      output.value = Math.round(inCelisius)+' °C'; 
    }else{
      output.style.color = "white";
      output.style.backgroundColor = "green";;
      output.value = Math.round(inCelisius)+' °C';    
    }
}
const toFahrenheit =  () => {
    const number = userInput.value;
    const inFarenheit = (number*9/5)+32;
    if(inFarenheit>90){     
      output.style.backgroundColor = "red";
      output.style.color = "white";
      output.value = Math.round(inFarenheit)+' °F'; 
      console.log(inFarenheit);
    }else if(inFarenheit<32){
      output.style.color = "white";
      output.style.backgroundColor = "blue";
      output.value = Math.round(inFarenheit)+' °F'; 
    }else{
      output.style.color = "white";
      output.style.backgroundColor = "green";;
      output.value = Math.round(inFarenheit)+' °F'; 
    }
}
const determineConverter = () => {
  if(fahrenheit.checked === true){
    toFahrenheit();
  }
  else if(celisius.checked === true){
      toCelsius();
  }
}
const buttonClearStoredData = ()=>{
  if(userInput.value != "")
  {
    userInput.innerHTML = "";
  }
  
}
const enterKeyEvent = (event)=>{
  if (event.keyCode === 13) {
   event.preventDefault();
   determineConverter();
  }
};
const numbersOnly = (e)=>{
  const ch = String.fromCharCode(e.which);
  if(!(/[0-9]/.test(ch))){
    e.preventDefault();
  }
}
const whenClearButtonClicked = ()=>{
  userInput.value = "";
  if(fahrenheit.checked === true)
  {
    fahrenheit.checked=false;    
  }
  if(celisius.checked === true)
  {
    celisius.checked=false;
  }
  if(output.value != "")
  {
    output.innerHTML = "";
    output.style.backgroundColor = "white";
  }
}
userInput.addEventListener("onkeypress",numbersOnly);
userInput.addEventListener("keypress",enterKeyEvent);
btnConvert.addEventListener("click", determineConverter);
btnClear.addEventListener("click", whenClearButtonClicked);