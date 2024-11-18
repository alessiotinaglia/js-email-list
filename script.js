
"use strict"
console.clear();


const emailList = document.getElementById("email-list");
let newArray = [];


for (let i = 0; i < 10; i++) {
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((dati) => {
            newArray.push(dati.data.response);
            console.log(dati.data.response); 

            if (newArray.length === 10) {                
                for (let j = 0; j < 10; j++) {
                    emailList.innerHTML += `<li>${newArray[j]}</li>`;
                }
            }
        })
        .catch((error) => {
            console.error("Errore nella richiesta della mail:", error);
        });
}


