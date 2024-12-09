  let a = document.querySelector("#bulb")
 let b = document.querySelector("#button")
 let fig=0;
 b.addEventListener("click", function(){
    if(fig==0){
        bulb.style.backgroundColor="yellow";
         console.log("clicked")
        fig=1;
    }else
    {
    bulb.style.backgroundColor="transparent";
    console.log("off")
    fig=0;

    }
 })
