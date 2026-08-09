const flashcards = document.getElementById("flashcards");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const restartBtn = document.getElementById("restartBtn");
const number = document.getElementById("nr");


const questions = [
  { q: "Hva er den største innsjøen i Norge?", a: "Mjøsa" },
  { q: "Hvilket grunnstoff har atomnummer 8?", a: "Oksygen" },
  { q: "Hva heter hovedstaden i Canada?", a: "Ottawa" },
  { q: "Hvor mange bein har en edderkopp?", a: "8" },
  { q: "Hva er navnet på verdens høyeste fjell?", a: "Mount Everest" },
  { q: "Hvilket år startet andre verdenskrig?", a: "1939" },
  { q: "Hva er den største planeten i solsystemet?", a: "Jupiter" },
  { q: "Hva heter prosessen der planter lager energi fra sollys?", a: "Fotosyntese" },
  { q: "Hvilket språk snakkes mest i verden?", a: "Mandarin" },
  { q: "Hva er hovedstaden i Finland?", a: "Helsinki" },
  { q: "Hvor mange strenger har en vanlig gitar?", a: "6" },
  { q: "Hva heter den lengste elven i verden?", a: "Nilen" },
  { q: "Hvilket dyr er verdens raskeste på land?", a: "Gepard" },
  { q: "Hva heter den største verdenshav?", a: "Stillehavet" },
  { q: "Hva er det kjemiske symbolet for gull?", a: "Au" },
  { q: "Hvilket land har flest innbyggere?", a: "Kina" },
  { q: "Hva heter den største øya i verden?", a: "Grønland" },
  { q: "Hvor mange grader er det i en rett vinkel?", a: "90" },
  { q: "Hva heter den romerske krigsguden?", a: "Mars" },
  { q: "Hvilket dyr kan sove stående?", a: "Hest" },
  { q: "Hva heter verdens største ørken?", a: "Sahara" },
  { q: "Hva er hovedstaden i Australia?", a: "Canberra" },
  { q: "Hvilket metall brukes mest i elektriske ledninger?", a: "Kobber" },
  { q: "Hva heter den største fuglen i verden?", a: "Struts" },
  { q: "Hvor mange spillere er det på banen i fotball per lag?", a: "11" },
  { q: "Hva heter den største katten i verden?", a: "Tiger" },
  { q: "Hva er navnet på den største månen til Jupiter?", a: "Ganymedes" },
  { q: "Hvilket land oppfant pizza?", a: "Italia" },
  { q: "Hva heter den lengste fjellkjeden i verden?", a: "Andesfjellene" },
  { q: "Hva er hovedstaden i Japan?", a: "Tokyo" },
  { q: "Hva heter den største delen av hjernen?", a: "Cerebrum (storhjernen)" },
  { q: "Hva er verdens mest solgte bilmodell?", a: "Toyota Corolla" },
  { q: "Hvilket dyr har flest tenner?", a: "Snegle (over 20 000)" },
  { q: "Hva heter den største øya i Middelhavet?", a: "Sicilia" },
  { q: "Hva er den kaldeste planeten i solsystemet?", a: "Uranus" },
  { q: "Hva heter den største byen i USA?", a: "New York" },
  { q: "Hva er hovedstaden i Sverige?", a: "Stockholm" },
  { q: "Hva heter den største arten av hai?", a: "Hvalhai" },
  { q: "Hva er navnet på verdens høyeste foss?", a: "Angel Falls" },
  { q: "Hva heter den største øya i Storbritannia?", a: "Great Britain" },
  { q: "Hva er den mest brukte energikilden i verden?", a: "Olje" },
  { q: "Hva heter den største innsjøen i Afrika?", a: "Victoriasjøen" },
  { q: "Hva er hovedstaden i Danmark?", a: "København" },
  { q: "Hva heter den største arten av pingvin?", a: "Keiserpingvin" },
  { q: "Hva er navnet på verdens største korallrev?", a: "Great Barrier Reef" },
  { q: "Hva heter den største øya i Asia?", a: "Borneo" },
  { q: "Hva er hovedstaden i Brasil?", a: "Brasília" },
  { q: "Hva heter den største elven i Europa?", a: "Volga" },
  { q: "Hva er navnet på den største vulkanen på jorden?", a: "Mauna Loa" },
  { q: "Hva heter den største arten av bjørn?", a: "Kodiakbjørn" },
  { q: "Hva er hovedstaden i Egypt?", a: "Kairo" },
  { q: "Hva heter den største innsjøen i Asia?", a: "Kaspihavet" },
  { q: "Hva er navnet på den største planeten i solsystemet?", a: "Jupiter" },
  { q: "Hva heter den største byen i Tyskland?", a: "Berlin" },
  { q: "Hva er hovedstaden i Kina?", a: "Beijing" },
  { q: "Hva heter den største arten av skilpadde?", a: "Havlærskilpadde" },
  { q: "Hva er navnet på verdens høyeste bygning?", a: "Burj Khalifa" },
  { q: "Hva heter den største innsjøen i Sør-Amerika?", a: "Titicacasjøen" },
  { q: "Hva er hovedstaden i Russland?", a: "Moskva" },
  { q: "Hva heter den største arten av ape?", a: "Gorilla" },
  { q: "Hva er navnet på verdens største havpattedyr?", a: "Blåhval" },
  { q: "Hva heter den største elven i Sør-Amerika?", a: "Amazonas" },
  { q: "Hva er hovedstaden i India?", a: "New Delhi" },
  { q: "Hva heter den største arten av slange?", a: "Grønn anakonda" },
  { q: "Hva er navnet på verdens største land?", a: "Russland" },
  { q: "Hva heter den største innsjøen i Nord-Amerika?", a: "Lake Superior" },
  { q: "Hva er hovedstaden i Mexico?", a: "Mexico City" },
  { q: "Hva heter den største arten av hval?", a: "Blåhval" },
  { q: "Hva er navnet på verdens største skog?", a: "Amazonskogen" },
  { q: "Hva heter den største byen i Frankrike?", a: "Paris" },
  { q: "Hva er hovedstaden i Spania?", a: "Madrid" },
  { q: "Hva heter den største arten av ørn?", a: "Harpyeørn" },
  { q: "Hva er navnet på verdens største fjellkjede?", a: "Himalaya" },
  { q: "Hva heter den største innsjøen i Europa?", a: "Ladogasjøen" },
  { q: "Hva er hovedstaden i Italia?", a: "Roma" },
  { q: "Hva heter den største arten av krokodille?", a: "Saltvannskrokodille" },
  { q: "Hva er navnet på verdens største øygruppe?", a: "Indonesia" },
  { q: "Hva heter den største byen i Nederland?", a: "Amsterdam" },
  { q: "Hva er hovedstaden i Portugal?", a: "Lisboa" },
  { q: "Hva heter den største arten av rev?", a: "Rødrev" },
  { q: "Hva er navnet på verdens største innsjø etter volum?", a: "Kaspihavet" },
  { q: "Hva heter den største byen i Polen?", a: "Warszawa" },
  { q: "Hva er hovedstaden i Hellas?", a: "Athen" },
  { q: "Hva heter den største arten av hjort?", a: "Elg" },
  { q: "Hva er navnet på verdens største øy i Arktis?", a: "Grønland" },
  { q: "Hva heter den største byen i Tyrkia?", a: "Istanbul" },
  { q: "Hva er hovedstaden i Sør-Afrika?", a: "Pretoria (administrativ)" },
  { q: "Hva heter den største arten av hai?", a: "Hvalhai" },
  { q: "Hva er navnet på verdens største hav?", a: "Stillehavet" },
  { q: "Hva heter den største byen i Argentina?", a: "Buenos Aires" },
  { q: "Hva er hovedstaden i New Zealand?", a: "Wellington" },
  { q: "Hva heter den største arten av pingvin?", a: "Keiserpingvin" },
  { q: "Hva er navnet på verdens største korallrev?", a: "Great Barrier Reef" }
];


// endre på rekkefølgen
questions.sort(() => Math.random() - 0.5);

let index = 0;
let showingAnswer = false;

function updateButtons() {
    if (index > 0) {
        prevBtn.style.display = "inline-block";
    } else {
        prevBtn.style.display = "none";
    }

    if (index === questions.length -1) {
        restartBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
    } else {
        restartBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
    }
}

//viser spørsmål nr: index
function showCard() {
    const item = questions[index];
    flashcards.textContent = item.q;
    number.textContent = (index + 1) + ".";
    showingAnswer = false;
    updateButtons();
}

//klikk for å vise fasit
flashcards.addEventListener("click", ()=>{
    if (!showingAnswer) {
        flashcards.textContent = questions[index].a;
        showingAnswer = true;
    }
    else {
        flashcards.textContent = questions[index].q;
        showingAnswer = false; 
    }
});

// neste spørsmål
nextBtn.addEventListener("click", ()=> {
    index++;
    if (index>= questions.length) {
        index = 0; 
    }
    showCard();
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        showCard();
    }
});

restartBtn.addEventListener("click", () => {
    index = 0;
    questions.sort(() => Math.random() - 0.5);
    showCard();
});


// start med første kort
showCard()






