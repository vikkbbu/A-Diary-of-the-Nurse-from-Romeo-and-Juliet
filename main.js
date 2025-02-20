//References to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

let language = 'ukrainian';
const englishBtn = document.getElementById('english-btn');
const ukrainianBtn = document.getElementById('ukrainian-btn');

const translations = {
  english: {
    title: "The Diary of the Nurse from Romeo and Juliet",
    sunday: "Sunday",
    textSunday: "Marry, what a whirlwind day it has been!\nThe Capulet house was all abuzz with talk of this morning’s brawl in the streets. Those hot-headed men, always at it. Fools, the lot of them.\nAnd my Juliet—how she doth grow, and all too swift! Barely fourteen summers hath she known, yet her mother speaks of marriage already. I remember when I nursed my lamb as a babe, and now she is to be a bride! I can scarcely believe it. Today, Lady Capulet called for me, had me fetch Juliet to talk of Count Paris. A fine man, I suppose—noble, comely, a match most proper, no doubt. But my girl, my sweet Juliet—she’s still but a child! She said she’d look to like, but I know that tone. Not eager, that one. I pray she finds happiness, for what else matters?\nThen came the feast! I helped lace my ladybird's gown, teasing her about young Paris. „A flower he is, indeed,“ quoth I, yet she merely did roll her eyes. What a sight—silks, masks, music so fine even my old feet wished to dance. And what happens? That cursed",
    textSunday2: "name—Montague! A lad, masked, all charm and pretty words, and Juliet’s eyes found him. And his found hers. I know that look, I do. Love at first sight—a foolish dream—but 'twas their kiss! When she pulled at my sleeve after, whispering, „What is yond gentleman?“. I went to ask for her—and ah, my heart near broke. A Montague! Of all the boys in Verona, she finds him. Yet, her smile… Reminds me of my Susan. God keep her soul… I hear talk of the Montagues' misdeeds, yet in his eyes, I see kindness and love. Perhaps, I be too hasty to judge all Montagues as villains. Mayhap, this match will bring peace—so I dare hope.",
    friday: "Friday",
    fridayStyle: { right: "100px" },
    textFriday: "Text",
    monday: "Monday",
    textMonday: "Text",
    tuesday: "Tuesday",
    textTuesday: "Text",
    wed: "Wednesday",
    textWed: "Text",
    thursday: "Thursday",
    textThursday: "Text",
  },
  ukrainian: {
    title: "Щоденник Годувальниці з трагедії «Ромео і Джульєтта»",
    sunday: "Неділя",
    textSunday: "Ох, який же сьогодні був несподіваний день!\nБудинок Капулеттів був повний балачок про ранкову бійку на вулицях. От ті гарячі чоловіки, завжди в біді — дурні, всі вони.\nА моя Джульєтта — ох, моя Джульєтта, — як вона зростає, так швидко! Ледве чотирнадцять літочок вона знала, а вже її мати балакає про шлюб. Я пам’ятаю, як доглядала своє ягнятко, а тепер вона має стати нареченою! Ледь можу повірити. Сьогодні синьйора Капулетті викликала мене й наказала покликати Джульєтту, щоб поговорити про графа Паріса. Чудова людина, гадаю — благородний, симпатичний, пара справді вдала, без сумніву. Але моя дівчинка, моя мила Джульєтта — вона ще лише дитинча! Вона казала, що, може, й сподобається, але я чую той тон — не так палко, як слід. Молюся, щоб вона знайшла щастя, адже що може бути важливішим?\nПотім настав бенкет! Я допомагала своїй пташці зашнурувати сукню, підкосуючи її про",
    textSunday2: "молодого Паріса. „Та квітка він, то правда,“ казала я, а вона лише закочувала очі. Яке було видовисько — шовки, маски, музика така чудова, що навіть мої старенькі ноги хотіли потанцювати. І ось, що трапилось? Та проклята клятість — Монтеккі! Молодик у масці, повний шарму й гарних слів, і очі Джульєтти знайшли його. А його очі знайшли її — я знаю цей погляд. Кохання з першого погляду — дурна мрія. Та й вони поцілувалися! Коли вона, шепочучи, потягнула за мій рукав: „Хто ж цей джентльмен?“, я пішла дізнатися, і ох, моє серце майже розбилося. Монтеккі! З усіх хлопців Верони вона обрала його. Та її усмішка… Нагадує мені про мою Сусан. Нехай Бог охороняє її душу… Завжди чую балачки про злі вчинки Монтекків, але в його очах бачу доброту й любов. Можливо, я занадто поспішна судити всіх Монтекків як лихих. Та може, ця пара знайде спокій, — принаймні, так я сподіваюся.",
    friday: "П'ятниця",
    fridayStyle: { right: "90px" },
    textFriday: "Текст",
    monday: "Понеділок",
    textMonday: "Текст",
    tuesday: "Вівторок",
    textTuesday: "Текст",
    wed: "Середа",
    textWed: "Текст",
    thursday: "Четвер",
    textThursday: "Текст",
  }
};

//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

//Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function goNextPage() {
  if(currentLocation < maxLocation) {
    switch(currentLocation) {
      case 1:
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if(currentLocation > 1) {
    switch(currentLocation) {
      case 2:
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 2;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation--;
  }
}

//Language Switch
function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  document.title = translations[lang].title;
  document.getElementById("sunday").textContent = translations[lang].sunday;
  document.getElementById("textSunday").textContent = translations[lang].textSunday;
  document.getElementById("textSunday2").textContent = translations[lang].textSunday2;
  document.getElementById("friday").textContent = translations[lang].friday;
  document.getElementById("friday").style.right = translations[lang].fridayStyle.right;
  document.getElementById("textFriday").textContent = translations[lang].textFriday;
  friday.style.right = "95px";
  document.getElementById("monday").textContent = translations[lang].monday;
  document.getElementById("textMonday").textContent = translations[lang].textMonday;
  document.getElementById("tuesday").textContent = translations[lang].tuesday;
  document.getElementById("textTuesday").textContent = translations[lang].textTuesday;
  document.getElementById("wed").textContent = translations[lang].wed;
  document.getElementById("textWed").textContent = translations[lang].textWed;
  document.getElementById("thursday").textContent = translations[lang].thursday;
  document.getElementById("textThursday").textContent = translations[lang].textThursday;

  if (lang === "english") {
    englishBtn.querySelector("img").src = "images/feather-inkpot.png";
    ukrainianBtn.querySelector("img").src = "images/inkpot.png";
  } else {
    englishBtn.querySelector("img").src = "images/inkpot.png";
    ukrainianBtn.querySelector("img").src = "images/feather-inkpot.png";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "ukrainian";
  switchLanguage(savedLanguage);
});
englishBtn.addEventListener("click", () => switchLanguage("english"));
ukrainianBtn.addEventListener("click", () => switchLanguage("ukrainian"));
