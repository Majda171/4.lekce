/*const title = "Pán Prsten: Společenstvo Prtsenu";
console.log(`Počet znaků názvu: ${title.length}`);
console.log(`${title.toUpperCase()}`);
console.log(`${title.slice(0,5)}`);
console.log(`${title.slice(-5)}`);

const email = prompt("Zadejte svůj e-mail");
const atIndex = email.indexOf('@');
const userName = email.slice(0, atIndex);
const domain = email.slice(atIndex + 1);
const parsedEmail = {
    userName: userName,
    domain: domain,
};

document.body.innerHTML = `<p>Uživatelské jméno: ${parsedEmail.userName}</p>
<p>Doména: ${parsedEmail.domain}</p>


 const ulice = prompt("Zadej ulici");
const cislodomu = prompt("Zadej číslo domu");
const mesto = prompt("Zadej město");
const postovniCislo = prompt("Zadej poštovní směrovací číslo");


const adresa = {
    street: ulice,
    numberOfHouse: cislodomu,
    city: mesto,
    postCode: postovniCislo
};


document.body.innerHTML = `<p>${adresa.street} ${adresa.numberOfHouse}</p>
<p>${adresa.city} ${adresa.postCode}</p>`;

const name = prompt("Zadejte své jméno a příjmení");
const age = Number(prompt("Zadejte svůj věk."));
const password = prompt("Zadejte své heslo");


if(age >= 65){
    alert("Věk je v pořádku.")
    if(password.length < 8){
        alert("Slabé heslo")
        };
}else{
    alert("Věk je příliš nízký.")
};*/

/*const vek = Number(prompt("Zadejte svůj věk"));
const plnaCena = 12;
let cena; 

if (vek <= 6) {
    cena = 0; 
} else if (vek > 6 && vek <= 26) {
    cena = plnaCena * 0.65;
} else if (vek > 26 && vek <= 64) {
    cena = plnaCena; 
} else {
    cena = plnaCena * 0.5; 
}


document.body.innerHTML = `<p>Vstupné je ${cena} Kč</p>`;


const firstName = prompt("Zadejte své křestní jméno :").trim();
const lastName = prompt("Zadejte své příjmení:").trim();
const firstPartOfLastName = lastName.slice(0, 5).toLowerCase(); 
const firstPartOfFirstName = firstName.slice(0, 3).toLowerCase(); 
const email = `${firstPartOfLastName}${firstPartOfFirstName}@fit.cvut.cz`;

document.body.innerHTML = `<p>${email}</p>`;*/
const pocetKusu = Number(prompt("Zadej počet kusů"));
const cenaZakl = 300;
let cenaKonecna;

if (pocetKusu > 1000) {
    cenaKonecna = 120 * pocetKusu; 
} else if (pocetKusu >= 500) {
    cenaKonecna = 150 * pocetKusu; 
} else if (pocetKusu >= 200) {
    cenaKonecna = 250 * pocetKusu; 
} else {
    cenaKonecna = cenaZakl; 
}

document.body.innerHTML += `<p> Celková cena za ${pocetKusu} kusů je ${cenaKonecna} Kč.</p>`;