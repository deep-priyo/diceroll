var rand = Math.random();
rand = (Math.floor(rand*6))+1;
var img1src = "dice"+rand+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", img1src);

var rand2 = Math.random();
rand2 = (Math.floor(rand2*6))+1;
var img2src="dice"+rand2+".png";

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",img2src);
if(rand>rand2)
{
     document.querySelector("h1").innerHTML="🚩Player 1 Wins";
    
}
if(rand<rand2)
{
     document.querySelector("h1").innerHTML="🚩Player 2 Wins";
    
}
if(rand==rand2)
{
    document.querySelector("h1").innerHTML="Draw";
}

