/*1. Anvende javascript til at skifte farven i de sociale elementer til en mere passende farve (jeres vurdering) */

/*2. Se den lidt skæve h1 i header - sørg for den ved hover "shaker"/ryster sig lidt. I bedes anvende javascript til at løse denne opgave - måske i kombination med css. Der findes endda js libraries/biblioteker I kan se på til formålet, f.eks. anime.js */

//Mads laver de 2 første















/*3. Brug javascript til at skifte billedet ud i .bigPicture-boksen, brug dette eller noget helt andet: https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg */


const heroImg = document.querySelector(".bigPicture").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg')";

















/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */

// Jan laver opgave 3 og 4. 

const link = document.createElement("link");
// const headImg = document.querySelector(head)

link.rel = "icon";
link.type = "image";
link.href = "http://hearthstoneapi.com/favicon.ico";
document.head.appendChild(link);





























/*5.1 Brug javascript til at gemme teksterne væk i artiklerne <p>-tags. Indsæt istedet link med "Læs mere..." */
const btn = document.createElement("button");




/*5.2. Sørg for at når man trykker på "Læs mere..." vises den oprindelige tekst ovenover "Læs mere..."  */

// Tobias tager 5.1 og 5.2



/*5.3. Sørg for at "Læs mere..." bliver lavet om til "Læs mindre..." */







/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body (se i css...prøv f.eks. at ændre property "right" til value -200 og 0). Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  - lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */











const crazyPop = document.querySelector(".crazyPopup");

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 100) {
            crazyPop.style.right = 0;
        }   else {
            crazyPop.style.right = "-400px";
        }
    })

// Kasper tager 5.3 og 6



















//     popup.innerHTML = "<p>You've scrolled 100px!</p><button onclick='this.parentElement.style.display="none"'>Close</button>";
// popup.style.position = "fixed";
// popup.style.bottom = "20px";
// popup.style.right = "20px";
// popup.style.borderRadius = "5px";
// popup.style.display = "none";
// document.body.appendChild(popup);

// window.addEventListener("scroll", function () {
//     if (window.scrollY >= 100) {
//         popup.style.display = "block";
//     }
// });
