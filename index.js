//WYKŁAD
// let name = "konrad";
// if (name === "Michał") {
//     console.log("work");
// } else if (name === "konrad")
// {
//     console.log("Hello Konrad");
// } else {
//     console.log("Hello unknown");
// }
// switch (name) {
//     case "konrad":
//         console.log("hello Konrad");
//         break;
//     case "zosia":
//         console.log("hello zosia");
//         break;
//     default:
//         console.log("hello unknown");
//         break;
    
// }


//LOOP
//
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }
// let counter = 1;
// do {
//     console.log(counter);
//     counter++;
// } while(counter > 10)
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }


//LABORKI
// SHIFT ALT F -> czyści Kod
// CTRL D, CTRL Enter
// F2 zaznazanie i zmienianie tej samej nazwy

let height = 8;
// repeat n time, where n is pyramid height
for (i = 1; i <= 8; i++) {
    // 1. count spaces for the line
    let spacesCount = 8 - i;
    // 2. count hashes for the line
    let hashesCount = i;
    // 3. display the line
    let output = "";
    for (let j = 1; j <= spacesCount; j++)
    {
        output += " ";
    }
    console.log(output);
    for (k = 1; k <= hashesCount; k++)
    {
        output += "*";
    }
    console.log(output);
}
