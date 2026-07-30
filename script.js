// =========================
// TELEGRAM BUTTONS
// =========================

const telegramLinks = [
  document.getElementById("join"),
  document.getElementById("join2"),
  document.getElementById("floatBtn")
];

telegramLinks.forEach(btn => {
  if (!btn) return;

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Try opening Telegram app
    window.location.href = "tg://resolve?domain=fxmisshirley";

    // Fallback to browser
    setTimeout(() => {
      window.location.href = "https://t.me/fxmisshirley";
    }, 700);
  });
});


// =========================
// LIVE MEMBER POPUPS
// =========================

const popup = document.getElementById("popup");
const popupName = document.getElementById("popupName");

const members = [

"Michael 🇬🇧",
"Emma 🇦🇺",
"Daniel 🇨🇦",
"James 🇺🇸",
"Oliver 🇩🇪",
"Lucas 🇧🇷",
"Sophia 🇳🇿",
"William 🇮🇪",
"Jack 🇸🇬",
"Benjamin 🇦🇪",
"Henry 🇿🇦",
"Ethan 🇫🇷",
"Alexander 🇳🇱",
"Noah 🇸🇪",
"Liam 🇳🇴"

];

function randomMember(){

const random =
members[Math.floor(Math.random()*members.length)];

popupName.innerHTML = random;

popup.style.display = "block";

popup.style.opacity = "1";

popup.style.transform = "translateY(0px)";

setTimeout(()=>{

popup.style.opacity="0";

popup.style.transform="translateY(20px)";

setTimeout(()=>{

popup.style.display="none";

},500);

},4000);

}

setTimeout(randomMember,3000);

setInterval(randomMember,9000);


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

const update=()=>{

const target = counter.innerText;

const number = parseInt(target.replace(/\D/g,''));

let current = 0;

const speed = number/80;

const timer = setInterval(()=>{

current += speed;

if(current >= number){

counter.innerText = target;

clearInterval(timer);

}else{

if(target.includes("%")){

counter.innerText=Math.floor(current)+"%";

}else if(target.includes("+")){

counter.innerText=Math.floor(current)+"+";

}else{

counter.innerText=Math.floor(current);

}

}

},20);

}

update();

});


// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.review-card,.faq-box").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});


// =========================
// YEAR
// =========================

const copy = document.querySelector(".copy");

if(copy){

copy.innerHTML =
"© " + new Date().getFullYear() + " Laura FX Mentorship. All Rights Reserved.";

}