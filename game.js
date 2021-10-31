window.onload = function (){
    let over = true;
let score = 0;

let test = document.getElementsByClassName("boundary");
let s = document.getElementById("status");
let btn = document.getElementById("start");
let btn2 = document.getElementById("end");

var direction = "",
oldx = 0,
mousemovemethod = function (e) {

    if (e.pageX < oldx) {
        direction = "left"
    } else if (e.pageX > oldx) {
        direction = "right"
    }

    oldx = e.pageX;

}
document.addEventListener('mousemove',mousemovemethod)

//disable the end button
btn2.style.pointerEvents = 'none';

//change all to purple
function setpurple()
{
    for(let i = 0;i<test.length;i++)
    {
        test[i].style.backgroundColor = "purple";
    }
}

//change all to green
function setGreen()
{
    for(let i = 0;i<test.length;i++)
    {
        test[i].style.backgroundColor = "green";
    }
}

//change all to green
function setGray()
{
    for(let i = 0;i<test.length;i++)
    {
        test[i].style.backgroundColor = "#eeeeee";
    }
}

//set event listeners to the divs
for(let i = 0;i<test.length;i++)
{
    test[i].addEventListener("mouseenter", function( event ) 
    {
        if(over == false)
        {
            //disable end
            btn2.style.pointerEvents = 'none';
            score -= 10;
            s.innerHTML = score + "<br>You Lost!";
            setpurple();
            over = true;
        }
    
    });
}

//set event listener to the start div
btn.addEventListener("click", function( event ) 
{
    //enable end button
    btn2.style.pointerEvents = 'auto';

    setGray();
    //start
    over = false;
});

//set event listener to the end div
btn2.addEventListener("click", function( event ) 
{
    if(direction == 'right')
    {
        //disable end div
        btn2.style.pointerEvents = 'none';

        score += 5;
    
        s.innerHTML = score + "<br>You Won!";

        setGreen();
        //make sure that we dont decrease points after win
        over = true;
    }
    else
    {
        s.innerHTML = score + "<br>DONT CHEAT START OVER";

        btn2.style.pointerEvents = 'none';
        setGray();
        //start
        over = true;
    }

});

}
