import * as avatarModule from './modules/avatar.mjs';
let avatars = [];
let names = [
    "Ann", "Bruno", "Cairo", "Des", "Eve", "Franz", "Ghazim", "Hu", "Isak", "Jens", "Khaled", "Liam", "Mou", "Nana", "Opera", "Patszy", "Qvintus", "Raheem", "Sterling", "Tomas", "Urban", "Verner", "Werner", "Xerxes", "Ylva", "Åda", "Älva", "Örjan"
];

for (let i = 0; i < 5; i++) {
    let age = Math.floor(Math.random() * 25);
    let slumpNamn = names[Math.floor(Math.random() * names.length)]
    avatars.push(new avatarModule.Avatar(slumpNamn, age));
}

// DOM
document.addEventListener("DOMContentLoaded", () => {
    var main = document.getElementsByTagName("main");

    function renderAvatars(typ) {
        let avatarsToRender = avatars;

        if ((typ != undefined) && (Number.isInteger(typ))) {
            // Rendera endast typen
            avatarsToRender = avatars.filter((avatar) => {
                return avatar.typ == typ;
            })
        }

        // Rendera - börja med att rensa main.
        main[0].innerHTML = "";

        avatarsToRender.forEach((avatar) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<img src="${avatar.image}">
        <h1>${avatar.name}</h1>
        <p>Ålder: ${avatar.age}</p>
        `;
            main[0].appendChild(newDiv);
        })

    }

    var select = document.getElementsByTagName("select");

    // Befolka selecten med de olika typerna.
    avatarModule.avatarTypes.forEach((typ, index) => {
        let newOption = document.createElement("option");
        newOption.value = index;
        newOption.innerText = typ;
        select[0].appendChild(newOption);
    })

    // Reagera på förändringar.
    select[0].addEventListener("change", (e) => {
        renderAvatars(e.target.value);
    })

    //Orginalrendera
    if (main[0].innerHTML == "")
        renderAvatars();
})