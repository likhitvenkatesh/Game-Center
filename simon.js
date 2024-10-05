
let arr=[];
let n=0;
let multiplier=1;



$(document).keypress(function(event){
        starttest();
    
});


function starttest() {
    start(multiplier);
    keycheck();
} 



function start(multiplier)
{
    let j=0;
    let hval=setInterval(function(){
        if(j<multiplier)
            {
                randomizer();
                
                j++;
            }
        else
            {
                clearInterval(hval);
            }
        },1000);
        
}


function keycheck()
{
    
    $("#green").click(function(){
        let audio1=new Audio("sounds/green.mp3");
        audio1.play();
        if(arr[n]==1)
        {
            n++;
            console.log("crt");
        }
        else{
            location.reload();
        }
        checkcompletion();
    });
    $("#red").click(function(){
        let audio2=new Audio("sounds/red.mp3");
        audio2.play();
        if(arr[n]==2)
            {
                n++;
                console.log("crt");
            }
            else{
                location.reload();
            }
            checkcompletion();
    });
    $("#blue").click(function(){
        let audio3=new Audio("sounds/blue.mp3");
        audio3.play();
        if(arr[n]==3)
            {
                n++;
                console.log("crt");
            }
            else{
                location.reload();
            }
            checkcompletion();
    });
    $("#yellow").click(function(){
        let audio4=new Audio("sounds/yellow.mp3");
        audio4.play();
        if(arr[n]==4)
            {
                n++;
                console.log("crt");
            }
            else{
                location.reload();
            }
            checkcompletion();
    });
    
}



function checkcompletion(){
    if(arr.length===n)
        {
            n=0;
            arr=[];
            let score=multiplier;
            $(".score p").html("SCORE: "+score);
            multiplier++;
            start(multiplier);
        }
       
}



function randomizer()
{
    let val=Math.floor(Math.random()*4)+1;
    console.log(val);
    arr.push(val);
    switch(val)
    {
        case 1:
        let x1=0;
        let val1=setInterval(function(){
            if(x1==0)
            {
                $("#green").addClass("pressed");
                x1=1;
            }
            else{
                $("#green").removeClass("pressed");
                clearInterval(val1);
            }

        },100);
        let audio1=new Audio("sounds/green.mp3");
        audio1.play();
        break;
        case 2:
        let x2=0;
        let val2=setInterval(function(){
            if(x2==0)
            {
                $("#red").addClass("pressed");
                x2=1;
            }
            else{
                $("#red").removeClass("pressed");
                clearInterval(val2);
            }

        },100);
        let audio2=new Audio("sounds/red.mp3");
        audio2.play();
        break;
        case 3:
        let x3=0;
        let val3=setInterval(function(){
            if(x3==0)
            {
                $("#blue").addClass("pressed");
                x3=1;
            }
            else{
                $("#blue").removeClass("pressed");
                clearInterval(val3);
            }

        },100);
        let audio3=new Audio("sounds/blue.mp3");
        audio3.play();
        break;
        case 4:
        let x4=0;
        let val4=setInterval(function(){
            if(x4==0)
            {
                $("#yellow").addClass("pressed");
                x4=1;
            }
            else{
                $("#yellow").removeClass("pressed");
                clearInterval(val4);
            }

        },100);
        let audio4=new Audio("sounds/yellow.mp3");
        audio4.play();
        break;


    }
    console.log(arr);  
    
   
}