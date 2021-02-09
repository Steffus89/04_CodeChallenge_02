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


let name1, age;
name1 = prompt("Please enter your name: ");
age = parseInt(prompt("Please enter your age: "));
console.log("Name: " + name1 + " // " + "Age: " + age);

let milk, juice, cola, whisky;

milk = (age >= 0, age <= 5);
juice = (age >= 6, age <= 12);
cola = (age >= 13, age <= 17);
whisky = (age >= 18, age <= 117);


switch (true) {
    case (milk):
        console.log("Hi, at this age milk is your best friend!");
        break;

    case (juice):
        console.log("Hi, now you can drink juice besides milk!");
        break;

    case (cola):
        console.log("You can drink cola now, but better drink juice or milk!");
        break;

    case (whisky):
        console.log("Whisky and Cola Queen of Danc floor!");
        break;

    default:
        console.log("World record broken!")
        break;
}
