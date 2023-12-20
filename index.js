var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
var ans;
if(randomNumber1>randomNumber2)
{
    ans="🚩 Player 1 won!";
}
else if(randomNumber2>randomNumber1)
{
    ans="Player 2 won! 🚩";
}
else
{
    ans="🎌 It's a draw 🎌";
}
document.querySelector("h1").textContent=ans;