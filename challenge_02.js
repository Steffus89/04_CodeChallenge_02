/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/


let name1, alter;
name1 = prompt("Wie ist dein Name?: ");
alter = parseInt(prompt("Und jetzt wie alt bist du grade?: "));
console.log("Name: " + name1 + " // " + "Alter: " + alter);

let Milch, Saft, Cola, Whisky, Weltrekord;

Milch = (alter >= 0, alter <= 5);
Saft = (alter >= 6, alter <= 12);
Cola = (alter >= 13, alter <= 17);
Whisky = (alter >= 18, alter <= 117);
Weltrekord = (alter >= 118);

switch (true) {
    case (Milch):
        console.log("Hi, in diesen Alter ist Milch dein bester Freund!");
        break;

    case (Saft):
        console.log("Hi, jetzt kannst du neben Milch auch Saft trinken!");
        break;

    case (Cola):
        console.log("Jetzt kannst du endlich Cola trinken und länger wach bleiben!");
        break;

    case (Whisky):
        console.log("Whisky und Cola! Jetzt lass es krachen!");
        break;

    case (Weltrekord):
        console.log("Weltrekordbruch!");
        break;

    default:
        console.log("Starte neu Dude!")
        break;
}
