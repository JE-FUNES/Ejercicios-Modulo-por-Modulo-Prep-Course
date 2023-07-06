//switch
var expr = "Bananas";
switch (expr) {
    case "Naranjas":
        console.log("El kilogramo de naranjas cuesta $200.");
        break;
    case "Manzanas":
        console.log("El kilogramo de manzanas cuesta $400.");
        break;
    case "Bananas":
        console.log("El kilogramo de bananas cuesta $300.");
        break;
    case "Cerezas":
        console.log("El kilogramo de cerezas cuesta $700.");
        break;
    default:
        console.log("Lamentablemente no disponemos de" + expr + ".");
}
console.log("Hay algo más que quisiera consultar?");
