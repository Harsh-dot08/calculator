btn=document.querySelectorAll("button")
let expr=""
let msg=document.querySelector("#disp")
let arr=Array.from(btn)
let int=-1;
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            expr=eval(expr)
            msg.innerText=expr
        }else if(e.target.innerHTML=="DEL"){
            expr=expr.substring(0,expr.length-1)
            msg.innerText=expr
            int--;
        }
        else if(e.target.innerHTML=="AC"){
            expr=""
            msg.innerText="0"
            int=-1;
        }
        else{
            if(int==-1){
                if(e.target.innerHTML=="+" || e.target.innerHTML=="%" || e.target.innerHTML=="/" ||e.target.innerHTML=="*"||e.target.innerHTML=="-"||e.target.innerHTML=="."){
                }else{
                    expr+=e.target.innerHTML
                    msg.innerText=expr
                    int++;
                }
            }
        }        
    })
})