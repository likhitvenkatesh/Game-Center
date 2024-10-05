window.onload = function() {
    console.log("Page has fully loaded!");
    refresh();
};

function refresh() {
    var rand1 = Math.floor((Math.random()*6)+1);
    var rand2 = Math.floor((Math.random()*6)+1);
     pl1(rand1); 
     pl2(rand2);
     document.querySelector(".navbar .first").classList.remove("visible");
     document.querySelector(".navbar .second").classList.remove("visible");
     if(rand1>rand2)
     {
     document.querySelector(".navbar .second").classList.add("visible");
     document.querySelector(".result").innerHTML="Player 1 is the Winner";
     document.querySelector(".result").style.margin="50px";
     }
     
     if(rand1<rand2)
        {
        document.querySelector(".navbar .first").classList.add("visible");
        document.querySelector(".result").innerHTML="Player 2 is the Winner";
        document.querySelector(".result").style.margin="50px";
        }
        if(rand1===rand2)
        {
            document.querySelector(".navbar .first").classList.add("visible");
            document.querySelector(".navbar .second").classList.add("visible");
        }
}
function pl1(rand1)
{
    document.querySelector(".player1 img").src = `images/dice${rand1}.png`;
}

function pl2(rand2)
{
     document.querySelector(".player2 img").src = `images/dice${rand2}.png`;
}