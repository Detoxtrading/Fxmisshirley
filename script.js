// ===============================
// TELEGRAM BUTTONS
// ===============================

const telegramURL = "https://t.me/fxmisshirley";
const telegramApp = "tg://resolve?domain=fxmisshirley";

function openTelegram(e){

if(e) e.preventDefault();

window.location.href = telegramApp;

setTimeout(()=>{

window.location.href = telegramURL;

},700);

}

[
"joinTop",
"joinHero",
"joinBottom",
"joinFinal",
"floatingTelegram"

].forEach(id=>{

const btn=document.getElementById(id);

if(btn){

btn.addEventListener("click",openTelegram);

}

});


// ===============================
// FAQ ACCORDION
// ===============================

const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

const icon=question.querySelector("span");

document.querySelectorAll(".faq-answer").forEach(item=>{

if(item!==answer){

item.style.display="none";

}

});

document.querySelectorAll(".faq-question span").forEach(i=>{

if(i!==icon){

i.innerHTML="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

icon.innerHTML="+";

}else{

answer.style.display="block";

icon.innerHTML="−";

}

});

});


// ===============================
// LIVE JOIN POPUP
// ===============================

const popup=document.getElementById("joinPopup");
const popupName=document.getElementById("popupName");

const names=[

"Michael 🇬🇧",
"Emma 🇦🇺",
"Daniel 🇨🇦",
"James 🇺🇸",
"Oliver 🇩🇪",
"Lucas 🇧🇷",
"Noah 🇳🇱",
"William 🇮🇪",
"Ethan 🇫🇷",
"Henry 🇸🇬",
"Sophia 🇳🇿",
"Benjamin 🇦🇪",
"Liam 🇳🇴",
"Jack 🇸🇪"

];

function showPopup(){

const random=names[Math.floor(Math.random()*names.length)];

popupName.innerHTML=random;

popup.style.display="flex";

popup.style.opacity="1";

popup.style.transform="translateY(0px)";

setTimeout(()=>{

popup.style.opacity="0";

popup.style.transform="translateY(30px)";

setTimeout(()=>{

popup.style.display="none";

},500);

},4000);

}

setTimeout(showPopup,3000);

setInterval(showPopup,9000);


// ===============================
// NUMBER ANIMATION
// ===============================

const counters=document.querySelectorAll(".number-box h2");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animate(entry.target);

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

function animate(counter){

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

let current=0;

const step=Math.max(1,Math.ceil(number/80));

const timer=setInterval(()=>{

current+=step;

if(current>=number){

counter.innerText=text;

clearInterval(timer);

}else{

if(text.includes("%")){

counter.innerText=current+"%";

}else if(text.includes("+")){

counter.innerText=current+"+";

}else{

counter.innerText=current;

}

}

},20);

}


// ===============================
// SCROLL ANIMATION
// ===============================

const cards=document.querySelectorAll(

".feature-card,.review-card,.number-box,.faq-item"

);

const reveal=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

reveal.observe(card);

});


// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.85)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.55)";

header.style.boxShadow="none";

}

});