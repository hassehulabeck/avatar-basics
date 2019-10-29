import * as avatarModule from './modules/avatar.mjs';
let avatars = [];

for (let i = 0; i < 5; i++) {
    avatars.push(new avatarModule.Avatar);
}

// DOM
document.addEventListener("DOMContentLoaded", () => {
    var main = document.getElementsByTagName("main");

    avatars.forEach((avatar) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<img src="${avatar.image}">
        <h1>${avatar.name}</h1>
        <p>Ålder: ${avatar.age}</p>
        `;
        main[0].appendChild(newDiv);
    })
})