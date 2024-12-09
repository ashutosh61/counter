var a = document.querySelector("h4");
var btn = document.querySelector("#add");

var flag = 0
btn.addEventListener("click",function()
{
    if(flag==0){

        a.innerHTML="friends"
        a.style.color="green"
        add.innerHTML="remove"
        flag=1;
    }
    else{
        a.innerHTML="Stranger"
        a.style.color="red"
        add.innerHTML="friends"
        flag=0
    }
})