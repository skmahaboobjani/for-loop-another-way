var f=document.getElementById("add")
        f.addEventListener("click",fn)

function fn()
{
    for(i=0;i<10;i++)
    
    
    {
        var c=document.createElement('p')
        
        if(i%2==0)
        {
            c.innerText =i +"even"
            c.style.color="red"
        }
        else{
            c.innerText=i+"odd"
            c.style.color="black"
        }
        // c.addEventListener("click",fn)
        var d=document.querySelector("div")
        d.append(c)

    }
}