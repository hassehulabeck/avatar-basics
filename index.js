import * as avatarModule from './modules/avatar.mjs';
let avatars = [];
let nameParts = [
    "an", "ro", "os", "de", "ve", "pa", "ha", "hu", "sa", "en", "led", "ia", "ou", "na", "per", "ats", "vin", "he", "ter", "tom", "ban", "ere", "ne", "zo", "va", "da", "lm", "rj", "mm", "nn", "o", "e", "av", "st", "ch", "il", "su", "bo", "a", "ky", "th", "se", "or", "ur", "ce", "li", "of", "be", "go", "du",
    " ", " ", " "
];

for (let i = 0; i < 5; i++) {
    let age = Math.ceil(Math.random() * 25);
    let antal = Math.floor(Math.random() * 3) + 2;
    let slumpNamn = "";
    for (let j = 0; j < antal; j++) {
        slumpNamn += nameParts[Math.floor(Math.random() * nameParts.length)]
    }
    avatars.push(new avatarModule.Avatar(slumpNamn, age));
}

// Sortera avatarerna efter ålder.
function sortera() {
    avatars.sort((a, b) => {
        if (a.age > b.age)
            return -1;
        else
            return 1;
    })
}

// DOM
document.addEventListener("DOMContentLoaded", () => {
    var main = document.getElementsByTagName("main");

    // Initiera, sortera och rendera.
    sortera();
    renderAvatars("all");

    function renderAvatars(typ) {
        let avatarsToRender = avatars;

        if (typ != "all") {
            // Rendera endast typen
            avatarsToRender = avatars.filter((avatar) => {
                return avatar.type == typ;
            })
        }

        // Rendera - börja med att rensa main.
        main[0].innerHTML = "";

        avatarsToRender.forEach((avatar) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `
                <section>
                    <img src="${avatar.image}">
                </section>
                <section>
                    <h1>${avatar.name}</h1>
                    <p>Ålder: ${avatar.age}</p>
                </section>
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
        console.log(e)
        renderAvatars(e.target.value);
    })

    // Skapa avatar.
    var knapp = document.getElementsByTagName("button");
    var inputs = document.getElementsByTagName("input");
    knapp[0].addEventListener("click", () => {
        let newAvatar = new avatarModule.Avatar(inputs[0].value, inputs[1].value);
        avatars.push(newAvatar);
        sortera();
        renderAvatars("all");

        // Städa i input-fälten.
        inputs[0].value = "";
        inputs[1].value = "";

    })
})