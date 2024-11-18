
"use strict"
console.clear();

const createMail = document.getElementById("create-email");
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
                    emailList.innerHTML += `<li> <i class="fa-solid fa-envelope"></i> ${newArray[j]}</li>`;
                }
            }
        })
        .catch((error) => {
            console.error("Errore nella richiesta della mail:", error);
        });
}

function nuovaEmail() {
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((dati) => {
            newArray.push(dati.data.response);
            console.log(dati.data.response);

            emailList.innerHTML += `<li> <i class="fa-solid fa-envelope"></i> ${dati.data.response}</li>`;
        })
        .catch((error) => {
            console.error("Errore nella richiesta della mail:", error);
        });
}

createMail.addEventListener('click', nuovaEmail);
