const nummer1=Math.ceil(Math.random()*10);
const nummer2=Math.ceil(Math.random()*10);
console.log(nummer1);
console.log(nummer2);
const spørsmålEl=document.getElementById("spørsmål");
const inputEl=document.getElementById("input");
const formEl=document.getElementById("form");
const scoreEl=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`;
spørsmålEl.innerText= `Hva er ${nummer1} ganger ${nummer2}`;
const riktigSvar=nummer1*nummer2;

formEl.addEventListener("submit", ()=>{
    const brukerSvar=+inputEl.value;
    if(brukerSvar === riktigSvar){
    score++;
    updateLocalStorage();
}else{
    score--;
    updateLocalStorage();
}
});
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}