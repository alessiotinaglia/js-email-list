
"use strict"
console.clear();

// link genera mail 
// https://flynn.boolean.careers/exercises/api/random/mail

// prendo le cose dal html

const createEmail = document.getElementById("create-email");

// funzione play sul bottone 


axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((dati) => {
        const emailList = document.getElementById("email-list");
        let newArray = []
        for (let i = 0; i < 10; i++) {
            newArray.push(dati.data.response);
            console.log(dati.data.response);
        } if (newArray.length === 10) {
            for (let i = 0; i < 10; i++) {
                emailList.innerHTML += `<li>${newArray[i]}</li>`
            }
        }
    })


