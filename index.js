const text = document.getElementById("text");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;


function convert(){
    if(toFahrenheit.checked){
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";  //toFixed gives us to one degree eg 32.0 instead of 32

    }else if(toCelcius.checked){
        temp = Number(text.value);
        temp = (temp - 32 ) *(5/9);
        result.textContent = temp.toFixed(1) + "°C";

    }else{
        result.textContent = "Select a unit";
    }


}