let btn = document.querySelectorAll("button");
let input = document.querySelector("#input");

String = "";

btn.forEach((button) => {
    button.addEventListener("click", (evt) => {
        if(evt.target.innerText == "=") {
            String = eval(String);
            input.value = String;
        }
        else if(evt.target.innerText == "AC") {
            String = "";
            input.value = String;        
        }
        else if(evt.target.innerText == "DEL") {
            String = String.substring(0, String.length-1);
            input.value = String; 
        }

        else {
            String += evt.target.innerText;
            input.value = String;
        }
    })
}) 
