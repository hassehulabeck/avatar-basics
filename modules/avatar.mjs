var avatarTypes = ["gridy", "male", "female", "human", "bottts", "avataaars"];

function Avatar(name, age) {
    this.name = name;
    this.age = age;
    let slump = Math.floor(Math.random() * avatarTypes.length);
    this.type = slump;
    this.image = `https://avatars.dicebear.com/v2/${avatarTypes[this.type]}/${this.name}-${this.age}.svg`;
}

export {
    avatarTypes,
    Avatar
};