//Tömbgeneráló függvény, ahol az amount az a paraméter, ahol megmondom mennyit fog generálni
const generateArray = function(amount) {
    let returnArray = [];

    /*
    let amountConverted = parseInt(amount);
    amount = amountConverted;
    */
    amount = parseInt(amount); //pozitív egész számá alakítom, saját magával írtuk felül. innentől már nem kaphatok stringet
    //console.log(amount);

    if (!Number.isNaN(amount)) { //akkor menjen be az if ágba, ha nem NaN
        //console.log("Az amount egy szám.");

        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
        }
    } else {
        //console.log("Ez nem szám.");
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function () {
    console.log("Az oldal betöltődött.");

    generateArray(100);
    generateArray(15);
    generateArray("kismacska"); //erre nem ír ki semmit, mert nem szám
    generateArray([2]); //ez meg egy tömb, ezek miatt tettem bele egy else ágat

    //console.log(generateArray("100"));
    //console.log(generateArray(15));
    //console.log(generateArray("kismacska")); //itt üres tömbbel fog visszatérni, de utána mondtam neki, hogy errorral tegye
    //console.log(generateArray([2]));

    const root = document.getElementById("root");
    const list = generateArray(4);
    
    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    }
}

window.addEventListener("load", loadEvent)

/*
window.addEventListener("load", function() {
    Ez is kb. teljesen ugyan az, mint a fenti, teljesen elfogadott.
})
*/

/*
window.addEventListener("load", () => {
    Ez is u.a., csak arrow function
})
*/